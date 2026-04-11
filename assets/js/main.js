/**
 * 100xmylife.ai — minimal motion
 *
 * One effect: when each 1×/10×/100× numeral scrolls into view, ease its
 * Fraunces SOFT axis from hard to soft. Everything else is CSS.
 */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || prefersReduced) {
    document.querySelectorAll("[data-numeral]").forEach(function (el) {
      el.classList.add("is-soft");
    });
    return;
  }

  var numeralObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Small delay so the reveal is felt, not instant.
          var el = entry.target;
          window.setTimeout(function () {
            el.classList.add("is-soft");
          }, 80);
          numeralObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.45, rootMargin: "0px 0px -8% 0px" }
  );

  document.querySelectorAll("[data-numeral]").forEach(function (el) {
    numeralObserver.observe(el);
  });
})();
