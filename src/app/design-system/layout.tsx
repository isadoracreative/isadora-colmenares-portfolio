import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System | Isadora Colmenares",
  description:
    "Typography and color token reference for the Isadora Colmenares portfolio design system.",
};

export default function DesignSystemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
