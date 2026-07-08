import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Botanical Landscape 3D Modeling — Burton Cooperative Residence | Isadora Colmenares',
  description:
    'Modeled a steep variable-grade frontage to engineer on-site stormwater mitigation, balancing structural masonry and botanical retention zoning to capture precipitation and comply with pedestrian corridor drainage code.',
};

export default function BurtonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
