import Link from 'next/link';
import MetalCardbotQuizCard from '../components/MetalCardbotQuizCard';
import { MetalCardbotS1Quizzes } from '@/data/quizzes/metalcardbot';
import { sortByUnlockState } from '@/lib/quizUnlock';

export default function MetalCardbotS1Page() {
  const quizzes = sortByUnlockState(Object.values(MetalCardbotS1Quizzes));

  return (
    <div className='min-h-screen px-4 py-8 md:px-8'>
      <Link
        href='/'
        className='inline-block mb-8 text-sm text-[var(--primary)] hover:text-[var(--secondary)] transition-colors hover:-translate-x-1 transform'
      >
        ← Back to Categories
      </Link>

      <main className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4 text-gradient'>Metal Cardbot S1</h1>
          <p className='text-xl md:text-2xl text-[var(--accent1)]'>
            Mowtown era — meet Blue Cop and the Star Guardians!
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
          {quizzes.map((quiz) => (
            <MetalCardbotQuizCard key={quiz.id} quiz={quiz} seasonSlug='season-1' />
          ))}
        </div>
      </main>
    </div>
  );
}
