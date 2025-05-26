'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <nav aria-label="Main navigation">
        <ul className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
          {/* Logo / Brand */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              aria-label="Home page"
              className="text-xl font-extrabold tracking-tighter text-slate-900"
            >
              Pasam Pavan Sai
            </Link>
            <button
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="block p-2 text-2xl text-slate-800 md:hidden"
              onClick={toggleMenu}
            >
              {!isMenuOpen ? '☰' : '✕'}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-[100%]'
            }`}
          >
            <button
              aria-label="Close menu"
              aria-expanded={isMenuOpen}
              className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden"
              onClick={toggleMenu}
            >
              ✕
            </button>

            <li className="first:mt-8">
              <Link
                href="/about"
                className="group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative">About</span>
              </Link>
            </li>
            <li className="first:mt-8">
              <Link
                href="/projects"
                className="group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative">Projects</span>
              </Link>
            </li>
            <li className="first:mt-8">
              <Link
                href="/blog"
                className="group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative">Blog</span>
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                className="group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105 ml-3"
                rel="noreferrer"
                href="mailto:pavanpasam0507@gmail.com"
              >
                <span className="relative flex items-center justify-center gap-2">
                  Contact
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </li>
          </div>

          {/* Desktop menu */}
          <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
            <li>
              <Link
                href="/about"
                className={`group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900 ${
                  pathname === '/about' ? 'bg-yellow-100' : ''
                }`}
              >
                <span className="relative">About</span>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900 ${
                  pathname === '/projects' ? 'bg-yellow-100' : ''
                }`}
              >
                <span className="relative">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900 ${
                  pathname === '/blog' ? 'bg-yellow-100' : ''
                }`}
              >
                <span className="relative">Blog</span>
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                className="group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105 ml-3"
                rel="noreferrer"
                href="mailto:pavanpasam0507@gmail.com"
              >
                <span className="relative flex items-center justify-center gap-2">
                  Contact
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

