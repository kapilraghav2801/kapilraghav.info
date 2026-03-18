/* ============================================
   terminal.js — Typed.js animations for the
   Experience section terminal cards.

   FIX: contentType:'html' requires <br> tags
   for line breaks — NOT \n characters.
   ============================================ */

function initTerminals() {
  // ── CURRENT ROLE ──
  new Typed('#typed-current', {
    strings: [
      [
        "<span style='color:#fff;font-weight:bold'>Python Backend Developer</span>",
        "<span style='color:#555'>Cognizant Technology Solutions</span>",
        "<span style='color:#555'>Apr 2023 – Present · Noida</span>",
        "",
        "<span style='color:#4ade80'>✓</span> AskSOP GenAI — 90% search time saved",
        "<span style='color:#4ade80'>✓</span> FastAPI backend · 99.5% uptime",
        "<span style='color:#4ade80'>✓</span> Redis caching → -$2K LLM cost/month",
        "<span style='color:#4ade80'>✓</span> Azure AD + RBAC multi-tenant auth",
        "<span style='color:#4ade80'>✓</span> 99% accuracy · zero hallucinations",
      ].join("<br>"),
    ],
    typeSpeed: 16,
    loop: false,
    showCursor: true,
    cursorChar: '█',
    contentType: 'html',
    startDelay: 300,
  });

  // ── PREVIOUS ROLE ──
  new Typed('#typed-prev', {
    strings: [
      [
        "<span style='color:#fff;font-weight:bold'>Oracle Technical Developer</span>",
        "<span style='color:#555'>Cognizant Technology Solutions</span>",
        "<span style='color:#555'>Nov 2022 – Mar 2023</span>",
        "",
        "<span style='color:#4ade80'>✓</span> PL/SQL for Oracle E-Business Suite",
        "<span style='color:#4ade80'>✓</span> -50% month-end processing time",
        "<span style='color:#4ade80'>✓</span> 15+ enterprise financial reports auto'd",
        "<span style='color:#4ade80'>✓</span> 10+ manual hours saved per week",
        "<span style='color:#4ade80'>✓</span> Reporting errors reduced by 25%",
      ].join("<br>"),
    ],
    typeSpeed: 16,
    loop: false,
    showCursor: true,
    cursorChar: '█',
    contentType: 'html',
    startDelay: 600,
  });

  // ── ORIGIN / INTERN ──
  new Typed('#typed-origin', {
    strings: [
      [
        "<span style='color:#fff;font-weight:bold'>Software Engineering Intern</span>",
        "<span style='color:#555'>Cognizant Technology Solutions</span>",
        "<span style='color:#555'>Mar 2022 – Oct 2022</span>",
        "",
        "<span style='color:#4ade80'>✓</span> Hospital Mgmt Backend — FastAPI",
        "<span style='color:#4ade80'>✓</span> 15+ RESTful CRUD APIs shipped",
        "<span style='color:#4ade80'>✓</span> Sub-200ms response times",
        "<span style='color:#4ade80'>✓</span> JWT + RBAC + Pydantic security",
        "<span style='color:#4ade80'>✓</span> Prototype delivery accelerated by 25%",
      ].join("<br>"),
    ],
    typeSpeed: 16,
    loop: false,
    showCursor: true,
    cursorChar: '█',
    contentType: 'html',
    startDelay: 900,
  });
}

// Wait for DOM before initialising
document.addEventListener('DOMContentLoaded', initTerminals);
