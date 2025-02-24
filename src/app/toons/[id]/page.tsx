/* File: src/app/toons/[id]/page.tsx */

'use client';

import Link from 'next/link';
import { use } from 'react';
import { Quiz } from '@/components/Quiz';
import { toonsQuizzes } from '@/data/quizzes/toons';

export default function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const quiz = toonsQuizzes[resolvedParams.id as keyof typeof toonsQuizzes];

  if (!quiz) {
    return (
      <div className='min-h-screen px-4 py-8 md:px-8'>
        <div className='text-center'>
          <p className='text-2xl text-red-500'>Quiz not found!</p>
          <Link href='/toons' className='inline-block mt-4 text-[var(--accent1)] hover:text-[var(--accent2)]'>
            ← Back to Toons
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen px-4 py-8 md:px-8'>
      {/* Back Button */}
      <Link href='/toons' className='inline-block mb-8 text-sm text-[var(--accent1)] hover:text-[var(--accent2)] transition-colors'>
        ← Back to Toons
      </Link>

      <main className='max-w-4xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>{quiz.title}</h1>
        </div>

        {/* Quiz Component */}
        <Quiz
          quizId={resolvedParams.id}
          onComplete={(score) => {
            // Log the score for debugging/analytics purposes
            console.log(`Quiz completed with score: ${score}`);
            // User can use the back link when ready to return to toons page
          }}
          showProgress={true}
        />
      </main>
    </div>
  );
}
