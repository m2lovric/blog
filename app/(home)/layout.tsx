import Link from 'next/link';
import '../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='w-full h-screen'>
        <header className='bg-emerald-400 w-full text-white'>
          <nav className='w-1/4 py-6 px-96 font-semibold text-lg flex justify-between'>
            <Link href='/' className=' mr-24'>
              Home
            </Link>
            <Link href='dashboard/profile'>Profile</Link>
          </nav>
        </header>
        <main className='h-full'>{children}</main>
      </body>
    </html>
  );
}
