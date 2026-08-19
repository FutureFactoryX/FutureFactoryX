"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/services", label: "Services"},
    { href: "/blog", label: "Blog"},
    { href: "/about", label: "About"},
    { href: "/contact", label: "Contact"},
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-20 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
        href="/"
        aria-label="FutureFactoryX - Home"
        className="flex items-center"
        onClick={() => setIsOpen(false)}
        >
        <Image
            src="/logo/futurefactoryx-logo-navbar.png"
            alt="FutureFactoryX"
            width={220}
            height={40}
            priority
            className="h-9 w-auto object-contain"
        />
        </Link>
        <div className="hidden md:flex items-center gap-10 text-sm text-slate-300">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            /* X ICON */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* HAMBURGER ICON */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
      </div>
      )}
    </nav>
  );
}