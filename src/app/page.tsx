/* File: src/app/page.tsx */
import Image from 'next/image';
import Link from 'next/link';

// Category card interface
interface CategoryCard {
  title: string;
  description: string;
  image: string;
  icon: string;
  accentColor: string;
  borderColor: string;
  isComingSoon: boolean;
}

// Category data
const categories: CategoryCard[] = [
  {
    title: 'Toons',
    description: 'Tun tun tun!',
    image: '/images/main/main_Toons.webp',
    icon: '✨',
    accentColor: 'bg-[var(--primary)]',
    borderColor: 'border-t-[var(--primary)]',
    isComingSoon: false,
  },
  {
    title: 'Twisted Toons',
    description: 'Yang bikin serem!',
    image: '/images/main/main_Twisted.webp',
    icon: '🔬',
    accentColor: 'bg-[var(--accent1)]',
    borderColor: 'border-t-[var(--accent1)]',
    isComingSoon: false,
  },
  {
    title: 'Trinkets',
    description: 'Tambah kesaktian!',
    image: '/images/main/main_Trinkets.webp',
    icon: '📚',
    accentColor: 'bg-[var(--accent3)]',
    borderColor: 'border-t-[var(--accent3)]',
    isComingSoon: true,
  },
  {
    title: 'Items',
    description: 'Travel through time!',
    image: '/images/main/main_Items.webp',
    icon: '⏳',
    accentColor: 'bg-[var(--accent2)]',
    borderColor: 'border-t-[var(--accent2)]',
    isComingSoon: true,
  },
];

// Category data for CookieRunKingdom
const categoryCookieRunKingdom: CategoryCard[] = [
  {
    title: 'Cookies and NPC',
    description: 'Together, we, Cookies, can do anything!',
    image: '/images/cookierun/Icon_stories_portal.webp',
    icon: '✨',
    accentColor: 'bg-[var(--secondary)]',
    borderColor: 'border-t-[var(--secondary)]',
    isComingSoon: false,
  },
  {
    title: 'Gacha and Treasures',
    description: 'New Cookies are baked in the Witch oven, escaping to the Kingdom thereafter.!',
    image: '/images/cookierun/Icon_cookies_portal.webp',
    icon: '🔬',
    accentColor: 'bg-[var(--accent4)]',
    borderColor: 'border-t-[var(--accent4)]',
    isComingSoon: true,
  },
  {
    title: 'Stories and Game Modes',
    description: 'Cutscene sequences which recount the dialogues and situations of characters.',
    image: '/images/cookierun/Icon_gacha_portal.webp',
    icon: '📚',
    accentColor: 'bg-[var(--accent3)]',
    borderColor: 'border-t-[var(--accent3)]',
    isComingSoon: true,
  },
  {
    title: 'Misc',
    description: 'You can place any decors you like! Dee-doo-dah!',
    image: '/images/cookierun/Icon_npcs_portal.webp',
    icon: '⏳',
    accentColor: 'bg-[var(--accent2)]',
    borderColor: 'border-t-[var(--accent2)]',
    isComingSoon: true,
  },
];

// Category card component
const CategoryCardComponent = ({ title, description, image, borderColor, isComingSoon }: CategoryCard) => (
  <Link
    href={
      isComingSoon
        ? '#'
        : title === 'Cookies and NPC'
        ? '/cookies-npc'
        : title === 'Gacha and Treasures'
        ? '/gacha-treasures'
        : title === 'Stories and Game Modes'
        ? '/stories-game-modes'
        : `/${title.toLowerCase().replace(/[ &]/g, '-')}`
    }
    className='block'
  >
    <div
      className={`category-card glass-card p-5 border-t-4 ${borderColor} ${isComingSoon ? 'cursor-not-allowed opacity-80' : 'hover:scale-[1.02] cursor-pointer'} transition-all`}
    >
      <div className='relative w-full h-40 mb-4 rounded-lg overflow-hidden'>
        <Image src={image} alt={title} fill className={`object-cover ${isComingSoon ? 'grayscale' : ''}`} />
        {isComingSoon && (
          <div className='absolute inset-0 backdrop-blur-sm bg-[var(--card-bg)] flex items-center justify-center'>
            <span className='px-4 py-1.5 rounded-full bg-[var(--secondary)] text-[var(--foreground)] text-sm font-bold shadow-md'>
              Coming Soon
            </span>
          </div>
        )}
      </div>
      <h2 className='text-xl font-bold mb-2'>{title}</h2>
      <p className='text-sm opacity-80'>{description}</p>
    </div>
  </Link>
);

export default function Home() {
  return (
    <div className='min-h-screen px-4 py-8 md:px-8'>
      {/* Header Section */}
      <header className='text-center mb-12'>
        <h1 className='text-4xl md:text-6xl font-bold float-animation text-gradient mb-4'>Asya&apos;s Quizzes</h1>
        <p className='text-xl md:text-2xl text-[var(--accent1)] mb-8'>Where ASYA is Tested and Quizzed!</p>
        <div className='text-6xl bounce-animation'>🎯</div>
      </header>

      {/* Main Content */}
      <main className='max-w-6xl mx-auto'>
        {/* Welcome Message */}
        <div className='text-center mb-12'>
          <p className='text-lg md:text-xl'>Ready to embark on an exciting journey of discovery?</p>
          <Link
            href='/history'
            className='inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full text-sm font-bold glass-card hover:border-[var(--primary)] transition-all'
          >
            ⭐ My Progress
          </Link>
        </div>

        {/* Category Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {categories.map((category) => (
            <CategoryCardComponent key={category.title} {...category} />
          ))}
        </div>

        {/* Gradient divider */}
        <div className='my-16 h-px bg-gradient-to-r from-transparent via-[var(--primary-light)] to-transparent' />

        {/* Cookie Run Kingdom Categories */}
        <div>
          <h2 className='text-2xl font-bold mb-8 text-center text-gradient'>Cookie Run Kingdom</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {categoryCookieRunKingdom.map((category) => (
              <CategoryCardComponent key={category.title} {...category} />
            ))}
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className='mt-16 text-center'>
          <h2 className='text-2xl font-bold mb-4 text-gradient'>Did You Know? 🤔</h2>
          <p className='text-lg'>Learning something new makes your brain grow bigger and stronger!</p>
        </div>
      </main>

      {/* Footer */}
      <footer className='text-center mt-16 text-sm opacity-70'>
        <p>Created with ❤️ by Guling Papa!</p>
      </footer>
    </div>
  );
}
