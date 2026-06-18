import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center py-24 px-4">
      <div className="text-center space-y-4">
        <h1>Isadora Colmenares</h1>
        <p className="text-para-lg text-text-secondary">
          Experience Design Leader &amp; Engineer
        </p>
        <Link
          href="/design-system"
          className="inline-block mt-4 text-para-sm text-interactive underline underline-offset-4 hover:text-interactive-hover transition-colors"
        >
          View Design System →
        </Link>
      </div>
    </main>
  );
}
