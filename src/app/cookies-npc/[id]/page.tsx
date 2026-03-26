/* File: src/app/cookies-npc/[id]/page.tsx */

'use client';

import Link from 'next/link';
import { use } from 'react';
import { Quiz } from '@/components/Quiz';
import { CookiesNPCQuizzes } from '@/data/quizzes/cookienpc';

export default function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const quiz = CookiesNPCQuizzes[resolvedParams.id as keyof typeof CookiesNPCQuizzes];

  if (!quiz) {
    return (
      <div className='min-h-screen px-4 py-8 md:px-8'>
        <div className='text-center'>
          <p className='text-2xl text-[var(--error)]'>Quiz not found!</p>
          <Link href='/cookies-npc' className='inline-block mt-4 text-[var(--primary)] hover:text-[var(--secondary)]'>
            ← Back to Cookies and NPC
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen px-4 py-8 md:px-8'>
      {/* Back Button */}
      <Link href='/cookies-npc' className='inline-block mb-8 text-sm text-[var(--primary)] hover:text-[var(--secondary)] transition-colors'>
        ← Back to Cookies and NPC
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
            // User can use the back link when ready to return to cookies-npc page
          }}
          showProgress={true}
        />
      </main>
    </div>
  );
}
