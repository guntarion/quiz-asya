/* File: src/app/gacha-treasures/[id]/page.tsx */

'use client';

import Link from 'next/link';
import { use } from 'react';
import { Quiz } from '@/components/Quiz';
import { toonsQuizzes as gachaTreasuresQuizzes } from '@/data/quizzes/gachatreasures';

export default function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const quiz = gachaTreasuresQuizzes[resolvedParams.id as keyof typeof gachaTreasuresQuizzes];

  if (!quiz) {
    return (
      <div className='min-h-screen px-4 py-8 md:px-8'>
        <div className='text-center'>
          <p className='text-2xl text-[var(--error)]'>Quiz not found!</p>
          <Link href='/gacha-treasures' className='inline-block mt-4 text-[var(--primary)] hover:text-[var(--secondary)]'>
            ← Back to Gacha and Treasures
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen px-4 py-8 md:px-8'>
      {/* Back Button */}
      <Link href='/gacha-treasures' className='inline-block mb-8 text-sm text-[var(--primary)] hover:text-[var(--secondary)] transition-colors'>
        ← Back to Gacha and Treasures
      </Link>

      <main className='max-w-4xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>{quiz.title}</h1>
        </div>

        {/* Quiz Component */}
        <Quiz
          quizId={resolvedParams.id}
          category="gacha-treasures"
          quizTitle={quiz.title}
          showProgress={true}
        />
      </main>
    </div>
  );
}
