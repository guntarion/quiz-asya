'use client';

import Link from 'next/link';
import { useQuizHistory } from '@/hooks/useQuizHistory';
import type { QuizSet } from '@/components/Quiz/types';
import { isQuizUnlocked, formatUnlockBadge } from '@/lib/quizUnlock';

interface MetalCardbotQuizCardProps {
  quiz: QuizSet;
  seasonSlug: 'season-1' | 'season-2' | 'season-3';
}

export default function MetalCardbotQuizCard({ quiz, seasonSlug }: MetalCardbotQuizCardProps) {
  const { getQuizAttempts, getQuizBest } = useQuizHistory();
  const attemptCount = getQuizAttempts(quiz.id).length;
  const best = getQuizBest(quiz.id);
  const unlocked = isQuizUnlocked(quiz);
  const completed = attemptCount > 0;

  const description = quiz.questions[0]
    ? `Test your knowledge with ${quiz.questions.length} questions!`
    : 'Coming soon...';

  if (!unlocked) {
    const badge = formatUnlockBadge(quiz);
    return (
      <div className='block group'>
        <div className='glass-card p-6 opacity-60 cursor-not-allowed grayscale'>
          <div className='flex items-start justify-between mb-2'>
            <h3 className='text-xl font-bold'>{quiz.title}</h3>
            <span className='text-xs px-2 py-0.5 rounded-full bg-[var(--secondary)]/30 text-[var(--foreground)] font-medium shrink-0 ml-2'>
              🔒 Locked
            </span>
          </div>
          <p className='text-sm opacity-80'>{description}</p>
          <div className='mt-4 flex items-center justify-between'>
            <div className='text-sm opacity-70'>{badge}</div>
          </div>
        </div>
      </div>
    );
  }

  const completedBorder = completed ? 'border-t-4 border-t-[var(--accent3)]' : '';

  return (
    <Link href={`/metal-cardbot/${seasonSlug}/${quiz.id}`} className='block group'>
      <div
        className={`glass-card p-6 hover:border-[var(--primary)] hover:border-opacity-40 hover:shadow-lg transition-all cursor-pointer ${completedBorder}`}
      >
        <div className='flex items-start justify-between mb-2'>
          <h3 className='text-xl font-bold'>{quiz.title}</h3>
          {completed && (
            <span className='text-xs px-2 py-0.5 rounded-full bg-[var(--accent3)]/30 text-[var(--accent3)] font-medium shrink-0 ml-2'>
              ✓ {attemptCount}x
            </span>
          )}
        </div>
        <p className='text-sm opacity-80'>{description}</p>
        <div className='mt-4 flex items-center justify-between'>
          <div className='text-sm text-[var(--primary)] flex items-center gap-1'>
            {completed ? '✓ Completed — replay?' : 'Click to start'}{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1'>→</span>
          </div>
          {best && <span className='text-xs opacity-60'>Best: {best.percentage}%</span>}
        </div>
      </div>
    </Link>
  );
}
