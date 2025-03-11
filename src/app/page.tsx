/* File: src/app/page.tsx */
import Image from 'next/image';
import Link from 'next/link';

// Category card interface
interface CategoryCard {
  title: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  isComingSoon: boolean; // New property to indicate "Coming Soon" status
}

// Category data
const categories: CategoryCard[] = [
  {
    title: 'Toons',
    description: 'Tun tun tun!',
    image: '/images/main/main_Toons.webp',
    icon: '✨',
    color: 'bg-[#8A2BE2]', // Primary purple
    isComingSoon: false,
  },
  {
    title: 'Twisted Toons',
    description: 'Yang bikin serem!',
    image: '/images/main/main_Twisted.webp',
    icon: '🔬',
    color: 'bg-[#87CEEB]', // Sky blue
    isComingSoon: false,
  },
  {
    title: 'Trinkets',
    description: 'Tambah kesaktian!',
    image: '/images/main/main_Trinkets.webp',
    icon: '📚',
    color: 'bg-[#FFD700]', // Sunny yellow
    isComingSoon: true,
  },
  {
    title: 'Items',
    description: 'Travel through time!',
    image: '/images/main/main_Items.webp',
    icon: '⏳',
    color: 'bg-[#90EE90]', // Grass green
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
    color: 'bg-[#8A2BE2]', // Primary purple
    isComingSoon: false,
  },
  {
    title: 'Gacha and Treasures',
    description: 'New Cookies are baked in the Witch oven, escaping to the Kingdom thereafter.!',
    image: '/images/cookierun/Icon_cookies_portal.webp',
    icon: '🔬',
    color: 'bg-[#87CEEB]', // Sky blue
    isComingSoon: true,
  },
  {
    title: 'Stories and Game Modes',
    description: 'Cutscene sequences which recount the dialogues and situations of characters.',
    image: '/images/cookierun/Icon_gacha_portal.webp',
    icon: '📚',
    color: 'bg-[#FFD700]', // Sunny yellow
    isComingSoon: true,
  },
  {
    title: 'Misc',
    description: 'You can place any decors you like! Dee-doo-dah!',
    image: '/images/cookierun/Icon_npcs_portal.webp',
    icon: '⏳',
    color: 'bg-[#90EE90]', // Grass green
    isComingSoon: true,
  },
];

// Category card component
const CategoryCard = ({ title, description, image, color, isComingSoon }: CategoryCard) => (
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
      className={`category-card p-6 rounded-2xl ${color} bg-opacity-20 ${isComingSoon ? 'cursor-not-allowed' : 'hover:bg-opacity-30 cursor-pointer'}`}
    >
      <div className='relative w-full h-40 mb-4 rounded-lg overflow-hidden'>
        <Image src={image} alt={title} fill className={`object-cover ${isComingSoon ? 'grayscale' : ''}`} />
        {isComingSoon && (
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <span className='text-white text-lg font-bold'>Coming Soon</span>
          </div>
        )}
      </div>
      <h2 className='text-xl font-bold mb-2'>{title}</h2>
      <p className='text-sm opacity-90'>{description}</p>
    </div>
  </Link>
);

export default function Home() {
  return (
    <div className='min-h-screen px-4 py-8 md:px-8'>
      {/* Header Section */}
      <header className='text-center mb-12'>
        <h1 className='text-4xl md:text-6xl font-bold float-animation text-gradient mb-4'>Quiz Dandy&apos;s World</h1>
        <p className='text-xl md:text-2xl text-[var(--accent1)] mb-8'>Where ASYA is Tested and Quizzed!</p>
        <div className='text-6xl bounce-animation'>🎯</div>
      </header>

      {/* Main Content */}
      <main className='max-w-6xl mx-auto'>
        {/* Welcome Message */}
        <div className='text-center mb-12'>
          <p className='text-lg md:text-xl'>Ready to embark on an exciting journey of discovery?</p>
        </div>

        {/* Category Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>

        {/* Cookie Run Kingdom Categories */}
        <div className='mt-16'>
          <h2 className='text-2xl font-bold mb-8 text-center text-gradient'>Cookie Run Kingdom</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {categoryCookieRunKingdom.map((category) => (
              <CategoryCard key={category.title} {...category} />
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
