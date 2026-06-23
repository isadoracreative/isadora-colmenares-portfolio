import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Isadora Colmenares",
  description:
    "Selected work by Isadora Colmenares spanning experience design, design systems, environmental graphics, and frontend engineering.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
