'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, '');
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  // scroll-margin-top on the anchor handles header clearance consistently.
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scheduleScrollToHash(hash: string) {
  if (!hash) return;

  // Defer until after paint so positions reflect the full layout above the target.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scrollToHash(hash);
    });
  });
}

export default function ProjectHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/projects') return;
    scheduleScrollToHash(window.location.hash);
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => scheduleScrollToHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return null;
}
