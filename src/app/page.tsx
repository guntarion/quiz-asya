/* File: src/app/page.tsx */
import Image from 'next/image';

// Category card interface
interface CategoryCard {
  title: string;
  description: string;
  image: string;
  icon: string;
  color: string;
}

// Category data
const categories: CategoryCard[] = [
  {
    title: 'Toons',
    description: 'Tun tun tun!',
    image: '/images/main/main_Toons.webp',
    icon: '✨',
    color: 'bg-[#8A2BE2]', // Primary purple
  },
  {
    title: 'Twisted Toons',
    description: 'Yang bikin serem!',
    image: '/images/main/main_Twisted.webp',
    icon: '🔬',
    color: 'bg-[#87CEEB]', // Sky blue
  },
  {
    title: 'Trinkets',
    description: 'Tambah kesaktian!',
    image: '/images/main/main_Trinkets.webp',
    icon: '📚',
    color: 'bg-[#FFD700]', // Sunny yellow
  },
  {
    title: 'Items',
    description: 'Travel through time!',
    image: '/images/main/main_Items.webp',
    icon: '⏳',
    color: 'bg-[#90EE90]', // Grass green
  },
];

// Category card component
const CategoryCard = ({ title, description, image, color }: CategoryCard) => (
  <div className={`category-card p-6 rounded-2xl ${color} bg-opacity-20 hover:bg-opacity-30 cursor-pointer`}>
    <div className='relative w-full h-40 mb-4 rounded-lg overflow-hidden'>
      <Image src={image} alt={title} fill className='object-cover' />
    </div>
    <h2 className='text-xl font-bold mb-2'>{title}</h2>
    <p className='text-sm opacity-90'>{description}</p>
  </div>
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
