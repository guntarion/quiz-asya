/* File: src/app/toons/page.tsx */
import Link from 'next/link';
import QuizCard from './components/QuizCard';

const quizzes = [
  {
    id: 'gigi-quiz',
    title: 'Quiz Gigi',
    description: 'Test your knowledge about Gigi!',
  },
  {
    id: 'cosmo-quiz',
    title: 'Quiz Cosmo',
    description: 'Test your knowledge about Cosmo!',
  },
];

export default function ToonsPage() {
  return (
    <div className='min-h-screen px-4 py-8 md:px-8'>
      {/* Back Button */}
      <Link href='/' className='inline-block mb-8 text-sm text-[var(--accent1)] hover:text-[var(--accent2)] transition-colors'>
        ← Back to Categories
      </Link>

      <main className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>Toons</h1>
          <p className='text-xl md:text-2xl text-[var(--accent1)]'>Tun tun tun!</p>
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
