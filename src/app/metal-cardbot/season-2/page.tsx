import Link from 'next/link';
import MetalCardbotQuizCard from '../components/MetalCardbotQuizCard';
import { MetalCardbotS2Quizzes } from '@/data/quizzes/metalcardbot';
import { sortByUnlockState } from '@/lib/quizUnlock';

export default function MetalCardbotS2Page() {
  const quizzes = sortByUnlockState(Object.values(MetalCardbotS2Quizzes));

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
          <h1 className='text-4xl md:text-6xl font-bold mb-4 text-gradient'>Metal Cardbot S2</h1>
          <p className='text-xl md:text-2xl text-[var(--accent1)]'>
            Speranza Crew awakens with Peruru — face Flame Nova!
          </p>
        </div>

        {quizzes.length === 0 ? (
          <p className='text-center opacity-60'>Quizzes coming soon!</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            {quizzes.map((quiz) => (
              <MetalCardbotQuizCard key={quiz.id} quiz={quiz} seasonSlug='season-2' />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
