import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <nav>
        <ul>
          <li><Link href="/">home</Link></li>
          <li><Link href="/about">about</Link></li>
          <li><Link href="/contact">contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
