/* File: src/app/toons/components/QuizCard.tsx */
import Link from 'next/link';

interface QuizCardProps {
  id: string;
  title: string;
  description: string;
}

export default function QuizCard({ id, title, description }: QuizCardProps) {
  return (
    <Link href={`/cookies-npc/${id}`} className='block'>
      <div className='p-6 rounded-xl bg-purple-600 bg-opacity-20 hover:bg-opacity-30 transition-all cursor-pointer'>
        <h3 className='text-xl font-bold mb-2'>{title}</h3>
        <p className='text-sm opacity-90'>{description}</p>
        <div className='mt-4 text-sm text-purple-400'>Click to start →</div>
      </div>
    </Link>
  );
}
