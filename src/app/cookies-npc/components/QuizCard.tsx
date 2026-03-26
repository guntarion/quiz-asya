'use client';

import Link from 'next/link';
import { useQuizHistory } from '@/hooks/useQuizHistory';

interface QuizCardProps {
  id: string;
  title: string;
  description: string;
}

export default function QuizCard({ id, title, description }: QuizCardProps) {
  const { getQuizAttempts, getQuizBest } = useQuizHistory();
  const attemptCount = getQuizAttempts(id).length;
  const best = getQuizBest(id);

  return (
    <Link href={`/cookies-npc/${id}`} className='block group'>
      <div className='glass-card p-6 hover:border-[var(--primary)] hover:border-opacity-40 hover:shadow-lg transition-all cursor-pointer'>
        <div className='flex items-start justify-between mb-2'>
          <h3 className='text-xl font-bold'>{title}</h3>
          {attemptCount > 0 && (
            <span className='text-xs px-2 py-0.5 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] font-medium shrink-0 ml-2'>
              {attemptCount}x
            </span>
          )}
        </div>
        <p className='text-sm opacity-80'>{description}</p>
        <div className='mt-4 flex items-center justify-between'>
          <div className='text-sm text-[var(--primary)] flex items-center gap-1'>
            Click to start <span className='inline-block transition-transform group-hover:translate-x-1'>→</span>
          </div>
          {best && (
            <span className='text-xs opacity-60'>Best: {best.percentage}%</span>
          )}
        </div>
      </div>
    </Link>
  );
}
