import type { QuizSet } from '@/components/Quiz/types';

const MS_PER_DAY = 86_400_000;

function parseUnlockDate(date: string): Date {
  // Treat as local midnight so cross-timezone behavior is predictable.
  return new Date(`${date}T00:00:00`);
}

export function isQuizUnlocked(quiz: QuizSet, now: Date = new Date()): boolean {
  if (!quiz.unlockDate) return true;
  return parseUnlockDate(quiz.unlockDate).getTime() <= now.getTime();
}

export function getDaysUntilUnlock(quiz: QuizSet, now: Date = new Date()): number {
  if (!quiz.unlockDate) return 0;
  const ms = parseUnlockDate(quiz.unlockDate).getTime() - now.getTime();
  return Math.max(0, Math.ceil(ms / MS_PER_DAY));
}

export function formatUnlockBadge(quiz: QuizSet, now: Date = new Date()): string {
  if (!quiz.unlockDate) return '';
  const days = getDaysUntilUnlock(quiz, now);
  if (days === 0) return '';
  if (days === 1) return 'Unlocks tomorrow';
  if (days <= 7) return `Unlocks in ${days} days`;
  return `Unlocks ${parseUnlockDate(quiz.unlockDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })}`;
}

export function sortByUnlockState<T extends QuizSet>(quizzes: T[], now: Date = new Date()): T[] {
  return [...quizzes].sort((a, b) => {
    const aUnlocked = isQuizUnlocked(a, now);
    const bUnlocked = isQuizUnlocked(b, now);
    if (aUnlocked && !bUnlocked) return -1;
    if (!aUnlocked && bUnlocked) return 1;
    if (!aUnlocked && !bUnlocked) {
      return (a.unlockDate ?? '').localeCompare(b.unlockDate ?? '');
    }
    return 0;
  });
}
