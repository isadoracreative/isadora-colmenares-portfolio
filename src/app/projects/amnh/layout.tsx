import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arachnology Research Lab — AMNH | Isadora Colmenares',
  description:
    'Directed UX research, institutional rebranding, and front-end development for the AMNH Arachnology Lab, delivering a searchable academic directory and CMS-ready Next.js web presence.',
};

export default function AmnhLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
