import Link from 'next/link';

export default function TrinketsPage() {
  return (
    <div className='min-h-screen px-4 py-8 md:px-8'>
      <Link href='/' className='inline-block mb-8 text-sm text-[var(--primary)] hover:text-[var(--secondary)] transition-colors hover:-translate-x-1 transform'>
        ← Back to Categories
      </Link>
      <main className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4 text-gradient'>Trinkets</h1>
          <p className='text-xl md:text-2xl text-[var(--accent1)]'>Tambah kesaktian!</p>
        </div>
        <div className='text-center glass-card p-8'>
          <p className='text-lg opacity-70'>Coming Soon!</p>
        </div>
      </main>
    </div>
  );
}
