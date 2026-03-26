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
    id: 'gigi-quiz-2',
    title: 'Quiz Gigi 2',
    description: 'Test your knowledge about Gigi Part 2!',
  },
  {
    id: 'cosmo-quiz',
    title: 'Quiz Cosmo',
    description: 'Test your knowledge about Cosmo!',
  },
  {
    id: 'glisten-quiz-1',
    title: 'Quiz Glisten #1',
    description: "Glisten's appearance, abilities, and basic gameplay mechanics!",
  },
  {
    id: 'glisten-quiz-2',
    title: 'Quiz Glisten #2',
    description: "Glisten's personality, relationships, and backstor!",
  },
  {
    id: 'brightney-quiz-1',
    title: 'Quiz Brightney #1',
    description: "Test your knowledge about Brightney's unique features, stats, and gameplay strategies",
  },
  {
    id: 'brightney-quiz-2',
    title: 'Quiz Brightney #2',
    description: "Delve into Brightney's personality, relationships, and lesser-known facts",
  },
];

export default function ToonsPage() {
  return (
    <div className='min-h-screen px-4 py-8 md:px-8'>
      {/* Back Button */}
      <Link href='/' className='inline-block mb-8 text-sm text-[var(--primary)] hover:text-[var(--secondary)] transition-colors hover:-translate-x-1 transform'>
        ← Back to Categories
      </Link>

      <main className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4 text-gradient'>Stories and Game Modes</h1>
          <p className='text-xl md:text-2xl text-[var(--accent1)]'>Uncover the tales!</p>
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
