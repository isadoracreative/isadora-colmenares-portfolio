import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-core-green">
      {/*
        Padding mirrors the layout grid from Figma:
          xs      → px-4  (16px)
          sm / md → px-6  (24px)
          lg+     → px-9  (36px)

        The inner div caps content at 1440px and centers it,
        which matches the Figma max-w-1440 constraint at 2xl.
      */}
      <div className="w-full px-4 sm:px-6 lg:px-9 py-9">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <nav aria-label="Footer navigation" className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-para-sm font-body text-text-primary underline underline-offset-2 hover:no-underline transition-all"
              >
                {label}
              </Link>
            ))}
          </nav>

          <p className="text-para-sm font-body text-text-primary">
            &copy; Isadora Colmenares 2026. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
