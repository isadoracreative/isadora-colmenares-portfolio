import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Immersive Assessment Platforms — Aon | Isadora Colmenares',
  description:
    'Directed UX strategy and frontend engineering for an enterprise SaaS talent assessment platform, consolidating legacy applications into a token-driven, accessible experience.',
};

export default function AonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
