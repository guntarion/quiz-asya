/* File: src/app/toons/[id]/page.tsx */

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Quiz } from '@/components/Quiz';
import { toonsQuizzes } from '@/data/quizzes/toons';

export default function QuizPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const quiz = toonsQuizzes[params.id as keyof typeof toonsQuizzes];

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
          quizId={params.id}
          onComplete={(score) => {
            // You could save the score or show additional UI here
            console.log(`Quiz completed with score: ${score}`);
            // Optionally redirect after a delay
            setTimeout(() => router.push('/toons'), 3000);
          }}
          showProgress={true}
        />
      </main>
    </div>
  );
}
