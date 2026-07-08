'use client';

import Link from 'next/link';
import type { RefObject } from 'react';

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-core-green focus-visible:ring-inset';

export type NavLink = {
  href: string;
  label: string;
};

type HeaderNavDropdownProps = {
  links: NavLink[];
  pathname: string;
  onLinkClick?: () => void;
  firstItemRef?: RefObject<HTMLAnchorElement | null>;
  id?: string;
  variant?: 'mobile' | 'desktop';
  ariaLabel?: string;
};

function isLinkActive(href: string, pathname: string): boolean {
  if (href === '/') return pathname === '/';
  if (href === '/projects') return pathname === '/projects';
  return pathname.startsWith(href);
}

export default function HeaderNavDropdown({
  links,
  pathname,
  onLinkClick,
  firstItemRef,
  id = 'mobile-nav',
  variant = 'mobile',
  ariaLabel = 'Mobile navigation',
}: HeaderNavDropdownProps) {
  const isDesktop = variant === 'desktop';

  return (
    <nav
      id={id}
      aria-label={ariaLabel}
      className={[
        'absolute top-full z-50 bg-white py-3',
        FOCUS_RING,
        isDesktop
          ? 'right-0 w-max min-w-full border border-gray-20'
          : 'right-0 w-[100px] border-l border-r border-b border-gray-20',
      ].join(' ')}
    >
      {links.map(({ href, label }, index) => {
        const isActive = isLinkActive(href, pathname);
        return (
          <Link
            key={href + label}
            href={href}
            ref={index === 0 ? firstItemRef : undefined}
            onClick={onLinkClick}
            aria-current={isActive ? 'page' : undefined}
            className={[
              'flex items-center px-6 py-4 text-para-sm font-body text-text-primary transition-colors',
              FOCUS_RING,
              isDesktop ? 'whitespace-nowrap hover:bg-core-green-light' : '',
              !isDesktop && isActive
                ? 'border-l-[3px] border-core-green'
                : !isDesktop
                  ? 'hover:bg-core-green-light'
                  : '',
            ].join(' ')}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
