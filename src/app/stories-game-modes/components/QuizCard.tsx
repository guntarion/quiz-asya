import Link from 'next/link';

interface QuizCardProps {
  id: string;
  title: string;
  description: string;
}

export default function QuizCard({ id, title, description }: QuizCardProps) {
  return (
    <Link href={`/stories-game-modes/${id}`} className='block group'>
      <div className='glass-card p-6 hover:border-[var(--primary)] hover:border-opacity-40 hover:shadow-lg transition-all cursor-pointer'>
        <h3 className='text-xl font-bold mb-2'>{title}</h3>
        <p className='text-sm opacity-80'>{description}</p>
        <div className='mt-4 text-sm text-[var(--primary)] flex items-center gap-1'>
          Click to start <span className='inline-block transition-transform group-hover:translate-x-1'>→</span>
        </div>
      </div>
    </Link>
  );
}
