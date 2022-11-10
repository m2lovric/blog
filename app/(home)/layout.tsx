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
      <body className='w-full h-full'>
        <nav className='w-1/12 p-6 font-light flex justify-between'>
          <Link href='/'>Home</Link>
          <Link href='dashboard/profile'>Profile</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
