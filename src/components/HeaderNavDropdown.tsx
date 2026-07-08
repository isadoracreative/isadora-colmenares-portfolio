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
  onLinkClick: () => void;
  firstItemRef?: RefObject<HTMLAnchorElement | null>;
  id?: string;
};

function isLinkActive(href: string, pathname: string): boolean {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export default function HeaderNavDropdown({
  links,
  pathname,
  onLinkClick,
  firstItemRef,
  id = 'mobile-nav',
}: HeaderNavDropdownProps) {
  return (
    <nav
      id={id}
      aria-label="Mobile navigation"
      className={`absolute top-full right-0 w-[100px] bg-white border-l border-r border-b border-gray-20 py-3 z-50 ${FOCUS_RING}`}
    >
      {links.map(({ href, label }, index) => {
        const isActive = isLinkActive(href, pathname);
        return (
          <Link
            key={href}
            href={href}
            ref={index === 0 ? firstItemRef : undefined}
            onClick={onLinkClick}
            aria-current={isActive ? 'page' : undefined}
            className={[
              `flex items-center px-6 py-4 text-para-sm font-body text-text-primary transition-colors ${FOCUS_RING}`,
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
  );
}
