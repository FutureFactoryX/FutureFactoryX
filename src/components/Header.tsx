import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-sky-900/30">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-end gap-8">

        <Link href="/">Home</Link>

        <Link href="/blog">Blog</Link>

        <Link href="/about">About</Link>

        <Link href="/contact">Contact</Link>

      </div>
    </header>
  );
}