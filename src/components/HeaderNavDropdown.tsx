'use client';

import Link from 'next/link';
import type { RefObject } from 'react';

const LINK_FOCUS =
  'focus-visible:outline-none focus-visible:ring-0 focus-visible:bg-core-green-light';

export type NavLink = {
  href: string;
  label: string;
  /** Optional eyebrow line rendered above the primary label. */
  eyebrow?: string;
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

function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  return path.replace(/\/$/, '');
}

export function isNavLinkActive(href: string, pathname: string): boolean {
  const path = normalizePath(pathname);
  const [hrefPath, hrefHash] = href.split('#');
  const linkPath = normalizePath(hrefPath);

  if (linkPath === '/') return path === '/';
  if (linkPath === '/projects' && !hrefHash) return path === '/projects';
  if (hrefHash) {
    return (
      path === linkPath &&
      typeof window !== 'undefined' &&
      window.location.hash.replace(/^#/, '') === hrefHash
    );
  }
  return path === linkPath || path.startsWith(`${linkPath}/`);
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
  const focusIndex = links.findIndex(({ href }) => isNavLinkActive(href, pathname));

  return (
    <nav
      id={id}
      aria-label={ariaLabel}
      className={[
        'absolute z-50 bg-white py-3',
        isDesktop
          ? 'top-full right-0 w-max min-w-full border border-gray-20'
          : 'top-[calc(100%+1px)] right-0 w-[100px] border-l border-r border-b border-gray-20',
      ].join(' ')}
    >
      {links.map(({ href, label, eyebrow }, index) => {
        const isActive = isNavLinkActive(href, pathname);
        return (
          <Link
            key={href + label}
            href={href}
            ref={index === (focusIndex >= 0 ? focusIndex : 0) ? firstItemRef : undefined}
            onClick={onLinkClick}
            aria-current={isActive ? 'page' : undefined}
            className={[
              'flex px-6 py-4 transition-colors',
              !isActive ? LINK_FOCUS : 'focus-visible:outline-none focus-visible:ring-0',
              eyebrow ? 'flex-col gap-0.5' : 'items-center',
              isDesktop ? 'whitespace-nowrap' : 'text-para-sm font-body text-text-primary',
              isActive
                ? 'border-l-[3px] border-core-green'
                : 'border-l-[3px] border-transparent hover:bg-core-green-light',
            ].join(' ')}
          >
            {eyebrow && (
              <span className="font-body text-para-xs text-text-secondary">
                {eyebrow}
              </span>
            )}
            <span
              className={[
                'font-body text-text-primary',
                eyebrow ? 'text-para-sm font-medium' : 'text-para-sm',
              ].join(' ')}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
