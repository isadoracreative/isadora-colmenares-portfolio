import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Conference Experiences — Cambridge Innovation Institute | Isadora Colmenares',
  description:
    'Collaborated on an enterprise design system by engineering a core templating framework and programmatic data automation pipelines to enforce strict visual governance across 60+ annual life sciences conferences.',
};

export default function CIILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
