/**
 * 100xmylife.ai — minimal motion + interactive dashboard
 */

/* Numeral scroll-reveal -------------------------------------------------- */
(function () {
  "use strict";

  var prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
          var el = entry.target;
          window.setTimeout(function () {
            el.classList.add("is-soft");
          }, 80);
          numeralObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.45, rootMargin: "0px 0px -8% 0px" },
  );

  document.querySelectorAll("[data-numeral]").forEach(function (el) {
    numeralObserver.observe(el);
  });
})();

/* Interactive dashboard -------------------------------------------------- */
(function () {
  "use strict";

  var stats = document.getElementById("dashboard-stats");
  if (!stats) return;

  var state = { a: 50, b: 50, c: 50 };

  var content = {
    a: [
      { max: 15, heading: "Drowning." },
      { max: 35, heading: "Treading water." },
      { max: 55, heading: "Finding the floor." },
      { max: 75, heading: "Solid ground." },
      { max: 95, heading: "Near full capacity." },
      { max: 100, heading: "Full creative capacity." },
    ],
    b: [
      { max: 15, heading: "Solo." },
      { max: 35, heading: "First hires." },
      { max: 55, heading: "Small team." },
      { max: 75, heading: "Real delegation." },
      { max: 95, heading: "Full team." },
      { max: 100, heading: "Maximum capacity." },
    ],
    c: [
      { max: 15, heading: "Ideas stay ideas." },
      { max: 35, heading: "Slow prototyping." },
      { max: 55, heading: "Faster loops." },
      { max: 75, heading: "Overnight execution." },
      { max: 95, heading: "Near speed of thought." },
      { max: 100, heading: "Speed of thought." },
    ],
  };

  function calc(a, b, c) {
    return (a / 100) * (b / 100) * (c / 100) * 100;
  }

  function fmt(n) {
    if (n >= 10) return Math.round(n) + "\u00d7";
    return n.toFixed(1) + "\u00d7";
  }

  function resultColor(total) {
    if (total >= 70) return "var(--oxblood)";
    if (total >= 30) return "var(--ink)";
    return "var(--ink-dim)";
  }

  function getContent(layer, pct) {
    var levels = content[layer];
    for (var i = 0; i < levels.length; i++) {
      if (pct <= levels[i].max) return levels[i];
    }
    return levels[levels.length - 1];
  }

  function getNarrative(a, b, c, total) {
    if (total >= 70)
      return "All three layers compounding. This is the compass at full north. The arc plays out over years \u2014 and the magnification is real.";
    if (total >= 30)
      return "Strong across the board. The compounding is visible \u2014 what took weeks now takes days.";
    if (total >= 10)
      return "Solid foundation, meaningful leverage. Room to grow and the direction is clear.";
    var min = Math.min(a, b, c);
    var weak = min === a ? "Efficiency" : min === b ? "Capacity" : "Creativity";
    if (total >= 3)
      return (
        weak +
        " is the bottleneck at " +
        min +
        "%. Strengthening it would unlock the most leverage."
      );
    return "Early days. Each layer you strengthen compounds the others.";
  }

  var CIRC = 2 * Math.PI * 50;

  function render() {
    var a = state.a,
      b = state.b,
      c = state.c;
    var total = calc(a, b, c);

    var resultEl = document.getElementById("dashboard-result");
    resultEl.textContent = fmt(total);
    resultEl.style.color = resultColor(total);

    document.getElementById("dashboard-narrative").textContent = getNarrative(
      a,
      b,
      c,
      total,
    );

    ["a", "b", "c"].forEach(function (layer) {
      var card = stats.querySelector('[data-layer="' + layer + '"]');
      var val = state[layer];

      card
        .querySelector(".dashboard-gauge-fill")
        .setAttribute("stroke-dashoffset", CIRC * (1 - val / 100));
      card.querySelector(".dashboard-gauge-text").textContent = val + "%";
      card.querySelector(".dashboard-tagline").textContent = getContent(
        layer,
        val,
      ).heading;

      card.querySelectorAll(".dashboard-bullets li").forEach(function (li) {
        li.classList.toggle("active", val >= +li.dataset.thresh);
      });
    });
  }

  stats.querySelectorAll(".dashboard-card").forEach(function (card) {
    var layer = card.dataset.layer;
    var input = card.querySelector("input");
    input.addEventListener("input", function () {
      state[layer] = +input.value;
      render();
    });
  });

  render();
})();
