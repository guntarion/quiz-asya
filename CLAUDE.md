# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint check
npm run start    # Serve production build
```

No test framework is configured.

## Architecture

**Next.js 15 App Router** quiz app with two game worlds: "Dandy's World" and "Cookie Run Kingdom". Built with React 19, TypeScript (strict), Tailwind CSS 3, and Framer Motion.

### Routing

Each quiz category has a route folder under `src/app/`:
- `toons/`, `twisted-toons/`, `cookies-npc/`, `gacha-treasures/`, `stories-game-modes/`, `misc/` — active categories
- `trinkets/`, `items/` — placeholder "Coming Soon" pages

Each category folder contains:
- `page.tsx` — list of quizzes using `QuizCard` components
- `[id]/page.tsx` — individual quiz page, uses `Quiz` component
- `components/QuizCard.tsx` — category-specific card (links to quiz by id)

### Quiz Data Flow

1. **Data files** (`src/data/quizzes/*.ts`) — export a `Record<string, QuizSet>` mapping quiz IDs to quiz sets. Each `QuizSet` has an `id`, `title`, and array of `QuizQuestion` objects with `options[]`, `correctAnswer`, and `difficulty` ('easy'|'medium'|'hard').

2. **`useQuiz` hook** (`src/hooks/useQuiz.ts`) — loads quiz by ID by checking all imported quiz maps. Manages state machine: `idle → active → completed`. Scoring: +2 correct, -1 wrong, minimum 0.

3. **Quiz components** (`src/components/Quiz/`) — `Quiz.tsx` orchestrates the flow; `QuestionCard.tsx` renders questions with answer feedback (green sparkle for correct, red shake for wrong); `ScoreDisplay.tsx` shows live/final score; `AnswerReview.tsx` shows post-quiz review; `ProgressBar.tsx` animates progress.

### Adding a New Quiz

1. Add quiz data to the appropriate file in `src/data/quizzes/` following the `QuizSet` interface.
2. The quiz ID key in the record must match what the category page links to.

### Adding a New Category

1. Create a route folder under `src/app/` with `page.tsx`, `[id]/page.tsx`, and `components/QuizCard.tsx`.
2. Create a data file in `src/data/quizzes/`.
3. Import and add the new quiz map to the lookup chain in `src/hooks/useQuiz.ts` (line 29).
4. Add the category card to the home page grid in `src/app/page.tsx`.

## Key Conventions

- **Path alias:** `@/*` maps to `./src/*`
- **Types:** All quiz-related interfaces live in `src/components/Quiz/types.ts`
- **Theme:** CSS custom properties (`--primary`, `--secondary`, etc.) defined in `globals.css`, consumed via Tailwind config. Colors: purple (#8A2BE2), yellow (#FFD700), sky blue (#87CEEB), green (#90EE90).
- **Font:** Bubblegum Sans (Google Fonts) as primary display font
- **Animations:** Custom keyframes in `globals.css` — `float`, `bounce`, `sparkle`, `shake`
- **Dynamic params:** Uses React 19 `use()` hook to unwrap `params` promise in `[id]/page.tsx` files (Next.js 15 pattern)
