/**
 * 100xmylife.ai — minimal motion
 *
 * One effect: when each 1×/10×/100× numeral scrolls into view, ease its
 * Fraunces SOFT axis from hard (0) to soft (100). Everything else is CSS.
 */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || prefersReduced) {
    // Reveal everything and call it a day.
    document.querySelectorAll("[data-numeral]").forEach(function (el) {
      el.classList.add("is-soft");
    });
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("is-visible");
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

  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll("[data-reveal]").forEach(function (el) {
    revealObserver.observe(el);
  });
})();
