/* File: src/app/metal-cardbot/page.tsx */
import Link from 'next/link';
import QuizCard from './components/QuizCard';
import { MetalCardbotQuizzes } from '@/data/quizzes/metalcardbot';

const quizzes = Object.values(MetalCardbotQuizzes).map((quiz) => ({
  id: quiz.id,
  title: quiz.title,
  description: quiz.questions[0] ? `Test your knowledge about Metal Cardbot with ${quiz.questions.length} questions!` : 'Coming soon...',
}));

export default function MetalCardbotPage() {
  return (
    <div className='min-h-screen px-4 py-8 md:px-8'>
      {/* Back Button */}
      <Link href='/' className='inline-block mb-8 text-sm text-[var(--primary)] hover:text-[var(--secondary)] transition-colors hover:-translate-x-1 transform'>
        ← Back to Categories
      </Link>

      <main className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4 text-gradient'>Metal Cardbot</h1>
          <p className='text-xl md:text-2xl text-[var(--accent1)]'>Transform and battle!</p>
        </div>

        {/* Quiz Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} id={quiz.id} title={quiz.title} description={quiz.description} />
          ))}
        </div>
      </main>
    </div>
  );
}
