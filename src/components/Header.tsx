'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-20">

      {/* ── Mobile bar (xs → md, hidden at lg+) ──────────────────────── */}
      <div className="flex h-12 items-center justify-between pl-4 sm:pl-6 pr-3 lg:hidden">
        <Link
          href="/"
          className="font-heading font-semibold text-para-sm text-text-primary leading-none"
        >
          Isadora Colmenares
        </Link>

        <button
          type="button"
          className="flex h-full w-8 items-center justify-center text-text-primary"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <i
            className={`fa-sharp fa-light text-para ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* ── Mobile dropdown menu ──────────────────────────────────────── */}
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="lg:hidden border-t border-gray-10 bg-white">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={[
                  'flex items-center px-6 py-4 text-para-sm font-body text-text-primary transition-colors',
                  isActive
                    ? 'border-l-[3px] border-core-green'
                    : 'hover:bg-core-green-light',
                ].join(' ')}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}

      {/* ── Desktop bar (lg+, hidden below lg) ───────────────────────── */}
      <div className="hidden lg:flex items-center w-full pl-9 pr-6">
        <div className="flex flex-1 items-center justify-between max-w-[1440px] mx-auto">
          <Link
            href="/"
            className="font-heading font-semibold text-para text-text-primary leading-none"
          >
            Isadora Colmenares
          </Link>

          <nav aria-label="Main navigation" className="flex items-stretch">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={[
                    'flex items-center px-4 py-4 text-para-sm font-body text-text-primary transition-colors',
                    isActive
                      ? 'border-b-[3px] border-core-green'
                      : 'hover:bg-core-green-light',
                  ].join(' ')}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

    </header>
  );
}
