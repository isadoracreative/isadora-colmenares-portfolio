'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import HeaderNavDropdown, { type NavLink } from '@/components/HeaderNavDropdown';
import { projects, projectNavHref } from '@/data/projects';

const navLinks: NavLink[] = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
];

const projectNavLinks: NavLink[] = projects.map((project) => ({
  href: projectNavHref(project),
  label: project.clientName,
}));

/*
  Focus ring shared class — applied to all interactive nav elements via
  focus-visible: so the ring only appears on keyboard navigation, not mouse.
  WCAG 2.4.11 / 2.4.7 (Level AA): Focus Visible.
*/
const FOCUS_RING = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-core-green focus-visible:ring-inset';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  /*
    Mobile menu focus management — WCAG 2.4.3 (Level A): Focus Order.
    • On open  → focus the first nav item so keyboard/AT users know new
                 content is available.
    • On close → return focus to the hamburger button so the keyboard user
                 lands back where they were (APG Disclosure Navigation pattern).
    The `wasOpen` ref prevents the close-focus from firing on initial mount.
  */
  const firstMobileItemRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef      = useRef<HTMLButtonElement>(null);
  const wasOpen            = useRef(false);

  useEffect(() => {
    if (menuOpen) {
      wasOpen.current = true;
      firstMobileItemRef.current?.focus();
    } else if (wasOpen.current) {
      menuButtonRef.current?.focus();
    }
  }, [menuOpen]);

  /* Escape key closes the menu — WCAG 2.1.2 No Keyboard Trap. */
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!projectsOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProjectsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [projectsOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-20">

      {/* -- Mobile bar (xs → md, hidden at lg+) ------------------------ */}
      <div className="relative flex h-12 items-center justify-between pl-4 sm:pl-6 pr-3 lg:hidden">
        <Link
          href="/"
          className={`font-heading font-semibold text-para-sm text-text-primary leading-none rounded ${FOCUS_RING}`}
        >
          Isadora Colmenares
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className={`flex h-full w-8 items-center justify-center text-text-primary rounded ${FOCUS_RING}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? 'mobile-nav' : undefined}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <i
            className={`fa-sharp fa-light text-para ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}
            aria-hidden="true"
          />
        </button>

        {/*
          Mobile menu overlay — absolutely positioned so it drops over page content
          rather than pushing it down. Aligns to the right edge of the mobile bar,
          flush with the hamburger button. Width matches the Figma "menu container"
          spec (100px). Border on left, right, and bottom only (top is flush with
          the header bar which already has its own bottom border).
        */}
        {menuOpen && (
          <HeaderNavDropdown
            links={navLinks}
            pathname={pathname}
            onLinkClick={() => setMenuOpen(false)}
            firstItemRef={firstMobileItemRef}
          />
        )}
      </div>

      {/* -- Desktop bar (lg+, hidden below lg) ------------------------- */}
      <div className="hidden lg:flex items-center w-full pl-9 pr-6">
        <div className="flex flex-1 items-center justify-between max-w-[1440px] mx-auto">
          <Link
            href="/"
            className={`font-heading font-semibold text-para text-text-primary leading-none rounded ${FOCUS_RING}`}
          >
            Isadora Colmenares
          </Link>

          <nav aria-label="Main navigation" className="flex items-stretch">
            <Link
              href="/"
              aria-current={pathname === '/' ? 'page' : undefined}
              className={[
                `flex items-center px-4 py-4 text-para-sm font-body text-text-primary transition-colors ${FOCUS_RING}`,
                pathname === '/'
                  ? 'border-b-[3px] border-core-green'
                  : 'hover:bg-core-green-light',
              ].join(' ')}
            >
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
              onFocus={() => setProjectsOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                  setProjectsOpen(false);
                }
              }}
            >
              <Link
                href="/projects"
                aria-current={pathname.startsWith('/projects') ? 'page' : undefined}
                aria-expanded={projectsOpen}
                aria-controls={projectsOpen ? 'projects-nav' : undefined}
                className={[
                  `flex items-center px-4 py-4 text-para-sm font-body text-text-primary transition-colors ${FOCUS_RING}`,
                  pathname.startsWith('/projects')
                    ? 'border-b-[3px] border-core-green'
                    : 'hover:bg-core-green-light',
                ].join(' ')}
              >
                Projects
              </Link>

              {projectsOpen && (
                <HeaderNavDropdown
                  id="projects-nav"
                  variant="desktop"
                  ariaLabel="Projects"
                  links={projectNavLinks}
                  pathname={pathname}
                  onLinkClick={() => setProjectsOpen(false)}
                />
              )}
            </div>
          </nav>
        </div>
      </div>

    </header>
  );
}
