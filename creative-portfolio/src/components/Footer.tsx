import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="px-4 py-10 md:px-6 md:py-14 lg:py-16 text-slate-600">
      <div className="mx-auto w-full max-w-7xl">
        <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
          <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
            >
            Pavan Sai
            </Link>
            <p className="text-sm text-slate-300">© 2025 credits:Pasam Pavan Sai</p>
          </div>
          <nav className="navigation" aria-label="Footer Navigation">
            <ul className="flex items-center gap-1">
              <li>
                <Link
                  href="/about"
                  className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:text-yellow-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:text-yellow-400"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:text-yellow-400"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className="socials inline-flex justify-center sm:justify-end">
            <a
              target="_blank"
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label="Pavan on GitHub"
              rel="noreferrer"
              href="https://github.com/pasam05"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
              </svg>
            </a>
            <a
              target="_blank"
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label="Pavan on Twitter"
              rel="noreferrer"
              href="https://leetcode.com/u/rWWlIYMnjh/"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
  <text x="12" y="15" fontSize="10" fontWeight="bold" fill="currentColor" textAnchor="middle">LC</text>
</svg>
            </a>
            <a
              target="_blank"
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label=" on LinkedIn"
              rel="noreferrer"
              href="https://www.linkedin.com/in/pasampavansai/"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19ZM18.5 18.5V13.2C18.5 11.4 17 10.2 15.3 10.2C14.3 10.2 13.4 10.7 13 11.4V10.4H10.3V18.5H13V13.7C13 12.8 13.7 12.1 14.6 12.1C15.5 12.1 16.2 12.8 16.2 13.7V18.5H18.5ZM6.5 8.3C7.3 8.3 8 7.6 8 6.8C8 6 7.3 5.3 6.5 5.3C5.7 5.3 5 6 5 6.8C5 7.6 5.7 8.3 6.5 8.3ZM7.8 18.5V10.4H5.2V18.5H7.8Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
