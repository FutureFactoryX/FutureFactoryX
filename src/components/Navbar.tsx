import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950">
      <nav className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6">
        <Link
        href="/"
        aria-label="FutureFactoryX - Home"
        className="flex items-center"
        >
        <Image
            src="/logo/futurefactoryx-logo-navbar.png"
            alt="FutureFactoryX"
            width={220}
            height={40}
            priority
            className="h-10 w-auto object-contain transition-opacity hover:opacity-90"
        />
        </Link>

        <div className="hidden md:flex flex-1 items-center gap-10 text-sm text-slate-300 ml-10">
          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>

          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>

          <Link href="/about" className="hover:text-white transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        <a
          href="https://linkedin.com/in/..."
          target="_blank"
          className="rounded-xl border border-slate-700 px-4 py-2 text-sm hover:border-sky-400 hover:text-sky-400 transition"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}