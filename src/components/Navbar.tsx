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
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-800
        bg-slate-950/95
        backdrop-blur
        "
    >
      <nav 
        aria-label="Main navgation"
        className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
          "
      >
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
        <div className="hidden items-center gap-9 md:flex">
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  text-sm
                  font-medium
                  text-slate-300
                  transition-colors
                  hover:text-white
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:otline-offset-4
                  focus-visible:outline-sky-400
                  "
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <Link
            href="/contact"
            className="
              rounded-xl
              bg-sky-500
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-sky-400
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:otline-offset-4
              focus-visible:outline-sky-400
              "
          >
            Discuss a challenge
          </Link>
        </div>      

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="
            rounded-lg 
            p-2 
            text-slate-300 
            transition 
            hover:bg-slate-800 
            hover:text-white 
            md:hidden
            "
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
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    rounded-lg 
                    px-4 
                    py-3 
                    text-base 
                    text-slate-300 
                    transition 
                    hover:bg-slate-900 
                    hover:text-white
                    "
                >
                  {link.label}
                </Link>
              ))}

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="
                    mt-4
                    rounded-xl
                    bg-sky-500 
                    px-5 
                    py-3 
                    text-center
                    font-semibold
                    text-white
                    "
                >
                  Discuss a challenge
                </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}