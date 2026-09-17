import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manifesto for Progress | Isadora Colmenares',
  description:
    'A design philosophy: the mindset and principles Isadora Colmenares brings to every project, from first spark to final delivery.',
};

export default function ManifestoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
