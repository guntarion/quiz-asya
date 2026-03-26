/* File: src/app/twisted-toons/[id]/page.tsx */

'use client';

import Link from 'next/link';
import { use } from 'react';
import { Quiz } from '@/components/Quiz';
import { twistedToonsQuizzes } from '@/data/quizzes/twistedtoons';

export default function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const quiz = twistedToonsQuizzes[resolvedParams.id as keyof typeof twistedToonsQuizzes];

  if (!quiz) {
    return (
      <div className='min-h-screen px-4 py-8 md:px-8'>
        <div className='text-center'>
          <p className='text-2xl text-[var(--error)]'>Quiz not found!</p>
          <Link href='/twisted-toons' className='inline-block mt-4 text-[var(--primary)] hover:text-[var(--secondary)]'>
            ← Back to Twisted Toons
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen px-4 py-8 md:px-8'>
      {/* Back Button */}
      <Link href='/twisted-toons' className='inline-block mb-8 text-sm text-[var(--primary)] hover:text-[var(--secondary)] transition-colors'>
        ← Back to Twisted Toons
      </Link>

      <main className='max-w-4xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>{quiz.title}</h1>
        </div>

        {/* Quiz Component */}
        <Quiz
          quizId={resolvedParams.id}
          category="twisted-toons"
          quizTitle={quiz.title}
          showProgress={true}
        />
      </main>
    </div>
  );
}
