/* File: src/app/twisted-toons/page.tsx */
import Link from 'next/link';
import QuizCard from './components/QuizCard';

const quizzes = [
  {
    id: 'twisted-basics-quiz',
    title: 'Twisted Toons: Basic Knowledge Quiz',
    description: 'Test your knowledge about Twisted Toons basics!',
  },
  {
    id: 'twisted-mechanics-quiz',
    title: 'Twisted Toons: Special Abilities Quiz',
    description: 'How well do you know the special abilities of Twisted Toons?',
  },
  {
    id: 'twisted-categories-quiz',
    title: 'Twisted Toons: Categories & Classifications Quiz',
    description: 'Test your knowledge about different types of Twisted Toons!',
  },
  // {
  //   id: 'twisted-stats-quiz',
  //   title: 'Twisted Toons: Stats & Characteristics Quiz',
  //   description: 'How well do you know the unique traits of each Twisted Toon?',
  // },
];

export default function TwistedToonsPage() {
  return (
    <div className='min-h-screen px-4 py-8 md:px-8'>
      {/* Back Button */}
      <Link href='/' className='inline-block mb-8 text-sm text-[var(--accent1)] hover:text-[var(--accent2)] transition-colors'>
        ← Back to Categories
      </Link>

      <main className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>Twisted Toons</h1>
          <p className='text-xl md:text-2xl text-[var(--accent1)]'>Yang bikin serem!</p>
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
