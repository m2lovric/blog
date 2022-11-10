import Link from 'next/link';
import '../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <main className=' w-full h-screen flex'>
          <aside className=' w-1/6 h-vh p-6 border-r border-slate-400'>
            <nav className='flex flex-col text-gray-900'>
              <h2 className=' text-2xl font-black mb-8'>Creator Dashboard</h2>
              <div className='flex flex-col '>
                <Link className=' font-light ml-6 mb-6' href='/'>
                  Home
                </Link>
                <Link
                  className=' font-light ml-6 mb-6'
                  href='/dashboard/profile'
                >
                  Profile
                </Link>
                <Link className=' font-light ml-6 mb-6' href='/dashboard/blogs'>
                  Blogs
                </Link>
                <Link className=' font-light ml-6 mb-6' href='/dashboard/stats'>
                  Stats
                </Link>
              </div>
            </nav>
          </aside>
          {children}
        </main>
      </body>
    </html>
  );
}
