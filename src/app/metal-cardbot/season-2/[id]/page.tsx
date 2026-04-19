'use client';

import Link from 'next/link';
import { use } from 'react';
import { Quiz } from '@/components/Quiz';
import { MetalCardbotS2Quizzes } from '@/data/quizzes/metalcardbot';
import { isQuizUnlocked } from '@/lib/quizUnlock';

export default function S2QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const quiz = MetalCardbotS2Quizzes[resolvedParams.id];

  if (!quiz || !isQuizUnlocked(quiz)) {
    return (
      <div className='min-h-screen px-4 py-8 md:px-8'>
        <div className='text-center'>
          <p className='text-2xl text-[var(--error)]'>
            {quiz ? 'This quiz is still locked!' : 'Quiz not found!'}
          </p>
          <Link
            href='/metal-cardbot/season-2'
            className='inline-block mt-4 text-[var(--primary)] hover:text-[var(--secondary)]'
          >
            ← Back to Metal Cardbot S2
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen px-4 py-8 md:px-8'>
      <Link
        href='/metal-cardbot/season-2'
        className='inline-block mb-8 text-sm text-[var(--primary)] hover:text-[var(--secondary)] transition-colors'
      >
        ← Back to Metal Cardbot S2
      </Link>

      <main className='max-w-4xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>{quiz.title}</h1>
        </div>

        <Quiz
          quizId={resolvedParams.id}
          category='metal-cardbot'
          quizTitle={quiz.title}
          showProgress={true}
        />
      </main>
    </div>
  );
}
