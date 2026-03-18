/* ============================================
   animations.js — AOS scroll init + DSA bars
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ── AOS (Animate On Scroll) ──
  AOS.init({
    duration: 900,
    once: true,
    offset: 80,
  });

  // ── DSA Progress Bars ──
  // Bars start at width:0 in CSS, animate to
  // target width when the section scrolls into view.
  const DSA_TARGETS = {
    easy: '85%',
    med:  '68%',
    hard: '32%',
  };

  const dsaSection = document.querySelector('.dsa-wrap');

  if (dsaSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Object.entries(DSA_TARGETS).forEach(([cls, width]) => {
              const bar = dsaSection.querySelector(`.bar-fill.${cls}`);
              if (bar) bar.style.width = width;
            });
            observer.disconnect(); // animate once only
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(dsaSection);
  }

});
