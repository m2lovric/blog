import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=' w-full h-screen flex'>
      <aside className=' w-1/6 bg-slate-500 h-vh p-6'>
        <nav className='flex flex-col text-white'>
          <h2 className=''>Creator Dashboard</h2>
          <Link href='/'>Home</Link>
          <Link href='/dashboard/profile'>Profile</Link>
          <Link href='/dashboard/blogs'>Blogs</Link>
          <Link href='/dashboard/stats'>Stats</Link>
        </nav>
      </aside>
      {children}
    </main>
  );
}
