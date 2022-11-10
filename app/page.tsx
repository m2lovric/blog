import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h2 className=' text-red-800 text-4xl'>Blog</h2>
      <Link href='/dashboard/profile'>Profile</Link>
    </div>
  );
}
