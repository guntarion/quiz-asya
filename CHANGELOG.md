## 2026-03-27 08:40:10

security: Update Next.js 15.1.7 to 15.1.11 (CVE-2025-66478)

Fixes security vulnerability in next@15.1.7 flagged as deprecated on npm.
Manual update applied; avoided running unverified npx fix tools.

---

## 2026-03-27 01:32:50

feat: Add quiz history tracking with localStorage

- Add useQuizHistory hook to persist quiz attempts in localStorage
- Track attempt count, scores, and personal bests per quiz
- Show attempt count and best score badges on all QuizCard components
- Display "Attempt #N" and personal best comparison on score screen
- Add /history page with stats summary, per-quiz attempt history, and clear option
- Add "My Progress" link on home page
- Pass category and quizTitle props to Quiz component across all 6 categories
- Fix gacha-treasures, misc, stories-game-modes [id]/page.tsx to import from correct data files

---

## 2026-03-26 21:22:06

feat: Add light/dark theme toggle and visual overhaul

- Add ThemeProvider context and ThemeToggle button with localStorage persistence
- Replace monochrome purple palette with soft vibrant dual-theme colors
  (blush pink, orchid, candy pink, sky blue, mint, peach, lavender)
- Add glassmorphism card styling across all components
- Add floating animated background shapes (stars, hearts, butterflies, etc.)
- Redesign quiz components: pill difficulty badges, A/B/C/D letter circles,
  circular progress ring on score screen, tier-based congratulatory messages,
  confetti burst animation, gradient buttons
- Improve progress bar with gradient fill and glow effect
- Add per-category accent colors on home page cards
- Fix incorrect href paths in gacha-treasures, misc, and stories-game-modes
- Rename site title from "Quiz Dandy's World" to "Asya's Quizzes"
- Switch Google Fonts (Geist) to local geist npm package
- Add CLAUDE.md for project documentation

---

