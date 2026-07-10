import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'International Ornithology Congress — INPA | Isadora Colmenares',
  description:
    'Architected a unified, scientifically resonant design system for a historic joint ornithology congress in the Brazilian Amazon, scaling identity assets from digital publications to physical environmental installations.',
};

export default function InpaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
