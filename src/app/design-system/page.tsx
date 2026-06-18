/**
 * Design System Spec Sheet
 *
 * A living reference page that renders all typography and color tokens
 * from the design system. Tokens are consumed from CSS custom properties
 * defined in globals.css @theme, which are mapped 1:1 from
 * config/variables.json (Figma export).
 */

/* ── Token Data ─────────────────────────────────────────────────── */

const headingTokens = [
  { level: "H1", variable: "--text-h1", mobile: "2rem (32px)", desktop: "3.75rem (60px)" },
  { level: "H2", variable: "--text-h2", mobile: "1.5rem (24px)", desktop: "2.75rem (44px)" },
  { level: "H3", variable: "--text-h3", mobile: "1.375rem (22px)", desktop: "2rem (32px)" },
  { level: "H4", variable: "--text-h4", mobile: "1.25rem (20px)", desktop: "1.625rem (26px)" },
  { level: "H5", variable: "--text-h5", mobile: "1.1875rem (19px)", desktop: "1.375rem (22px)" },
  { level: "H6", variable: "--text-h6", mobile: "1.125rem (18px)", desktop: "1.25rem (20px)" },
];

const paragraphTokens = [
  { name: "Para XL", variable: "--text-para-xl", size: "1.25rem (20px)", className: "text-para-xl" },
  { name: "Para LG", variable: "--text-para-lg", size: "1.125rem (18px)", className: "text-para-lg" },
  { name: "Para", variable: "--text-para", size: "1rem (16px)", className: "text-para" },
  { name: "Para SM", variable: "--text-para-sm", size: "0.875rem (14px)", className: "text-para-sm" },
  { name: "Para XS", variable: "--text-para-xs", size: "0.75rem (12px)", className: "text-para-xs" },
];

interface ColorStop {
  stop: string;
  variable: string;
  hex: string;
}

interface ColorFamily {
  name: string;
  stops: ColorStop[];
}

const primitiveColors: ColorFamily[] = [
  {
    name: "Gray",
    stops: [
      { stop: "00", variable: "--color-gray-00", hex: "#f7f8f8" },
      { stop: "10", variable: "--color-gray-10", hex: "#eceeee" },
      { stop: "20", variable: "--color-gray-20", hex: "#d4d8d8" },
      { stop: "30", variable: "--color-gray-30", hex: "#b9c0c0" },
      { stop: "40", variable: "--color-gray-40", hex: "#9ea7a8" },
      { stop: "50", variable: "--color-gray-50", hex: "#838f90" },
      { stop: "60", variable: "--color-gray-60", hex: "#6a7576" },
      { stop: "70", variable: "--color-gray-70", hex: "#525b5b" },
      { stop: "80", variable: "--color-gray-80", hex: "#3a4041" },
      { stop: "90", variable: "--color-gray-90", hex: "#222526" },
      { stop: "100", variable: "--color-gray-100", hex: "#0a0b0b" },
    ],
  },
  {
    name: "Blue",
    stops: [
      { stop: "00", variable: "--color-blue-00", hex: "#edf9fd" },
      { stop: "10", variable: "--color-blue-10", hex: "#daf3fc" },
      { stop: "20", variable: "--color-blue-20", hex: "#99def5" },
      { stop: "30", variable: "--color-blue-30", hex: "#6acff1" },
      { stop: "40", variable: "--color-blue-40", hex: "#3bc0ec" },
      { stop: "50", variable: "--color-blue-50", hex: "#15addf" },
      { stop: "60", variable: "--color-blue-60", hex: "#118ab2" },
      { stop: "70", variable: "--color-blue-70", hex: "#0c6582" },
      { stop: "80", variable: "--color-blue-80", hex: "#084254" },
      { stop: "90", variable: "--color-blue-90", hex: "#052733" },
      { stop: "100", variable: "--color-blue-100", hex: "#020e13" },
    ],
  },
  {
    name: "Green",
    stops: [
      { stop: "00", variable: "--color-green-00", hex: "#ebfff9" },
      { stop: "10", variable: "--color-green-10", hex: "#d3fdf2" },
      { stop: "20", variable: "--color-green-20", hex: "#a7fbe5" },
      { stop: "30", variable: "--color-green-30", hex: "#5df4cd" },
      { stop: "40", variable: "--color-green-40", hex: "#13e7b0" },
      { stop: "50", variable: "--color-green-50", hex: "#06d6a0" },
      { stop: "60", variable: "--color-green-60", hex: "#05ae82" },
      { stop: "70", variable: "--color-green-70", hex: "#037759" },
      { stop: "80", variable: "--color-green-80", hex: "#024f3b" },
      { stop: "90", variable: "--color-green-90", hex: "#012d21" },
      { stop: "100", variable: "--color-green-100", hex: "#01140f" },
    ],
  },
  {
    name: "Yellow",
    stops: [
      { stop: "00", variable: "--color-yellow-00", hex: "#fff9eb" },
      { stop: "10", variable: "--color-yellow-10", hex: "#fff0cc" },
      { stop: "20", variable: "--color-yellow-20", hex: "#ffe099" },
      { stop: "30", variable: "--color-yellow-30", hex: "#ffd166" },
      { stop: "40", variable: "--color-yellow-40", hex: "#fdc135" },
      { stop: "50", variable: "--color-yellow-50", hex: "#f4ae0b" },
      { stop: "60", variable: "--color-yellow-60", hex: "#cc8f00" },
      { stop: "70", variable: "--color-yellow-70", hex: "#996b00" },
      { stop: "80", variable: "--color-yellow-80", hex: "#664700" },
      { stop: "90", variable: "--color-yellow-90", hex: "#2e2000" },
      { stop: "100", variable: "--color-yellow-100", hex: "#140e00" },
    ],
  },
  {
    name: "Orange",
    stops: [
      { stop: "00", variable: "--color-orange-00", hex: "#fff7f5" },
      { stop: "10", variable: "--color-orange-10", hex: "#ffe7e0" },
      { stop: "20", variable: "--color-orange-20", hex: "#ffc6b8" },
      { stop: "30", variable: "--color-orange-30", hex: "#ffa58f" },
      { stop: "40", variable: "--color-orange-40", hex: "#ff7c5c" },
      { stop: "50", variable: "--color-orange-50", hex: "#fe582f" },
      { stop: "60", variable: "--color-orange-60", hex: "#e63205" },
      { stop: "70", variable: "--color-orange-70", hex: "#b72906" },
      { stop: "80", variable: "--color-orange-80", hex: "#8a1c00" },
      { stop: "90", variable: "--color-orange-90", hex: "#470e00" },
      { stop: "100", variable: "--color-orange-100", hex: "#290800" },
    ],
  },
  {
    name: "Red",
    stops: [
      { stop: "00", variable: "--color-red-00", hex: "#fff0f3" },
      { stop: "10", variable: "--color-red-10", hex: "#fcd9e2" },
      { stop: "20", variable: "--color-red-20", hex: "#f8b4c4" },
      { stop: "30", variable: "--color-red-30", hex: "#f37291" },
      { stop: "40", variable: "--color-red-40", hex: "#ef476f" },
      { stop: "50", variable: "--color-red-50", hex: "#eb194b" },
      { stop: "60", variable: "--color-red-60", hex: "#c0113b" },
      { stop: "70", variable: "--color-red-70", hex: "#9b0d2f" },
      { stop: "80", variable: "--color-red-80", hex: "#750a24" },
      { stop: "90", variable: "--color-red-90", hex: "#420614" },
      { stop: "100", variable: "--color-red-100", hex: "#21030a" },
    ],
  },
  {
    name: "Purple",
    stops: [
      { stop: "00", variable: "--color-purple-00", hex: "#f6f0f9" },
      { stop: "10", variable: "--color-purple-10", hex: "#efe4f6" },
      { stop: "20", variable: "--color-purple-20", hex: "#e1ceee" },
      { stop: "30", variable: "--color-purple-30", hex: "#cdabe2" },
      { stop: "40", variable: "--color-purple-40", hex: "#b888d7" },
      { stop: "50", variable: "--color-purple-50", hex: "#a368ca" },
      { stop: "60", variable: "--color-purple-60", hex: "#7d44a2" },
      { stop: "70", variable: "--color-purple-70", hex: "#5f2d81" },
      { stop: "80", variable: "--color-purple-80", hex: "#492262" },
      { stop: "90", variable: "--color-purple-90", hex: "#301640" },
      { stop: "100", variable: "--color-purple-100", hex: "#14091a" },
    ],
  },
];

interface SemanticToken {
  name: string;
  variable: string;
  aliasTo: string;
  hex: string;
}

const coreColors: SemanticToken[] = [
  { name: "White", variable: "--color-white", aliasTo: "White", hex: "#ffffff" },
  { name: "Black", variable: "--color-black", aliasTo: "Black", hex: "#000000" },
  { name: "Gray", variable: "--color-core-gray", aliasTo: "Gray 50", hex: "#838f90" },
  { name: "Gray light", variable: "--color-core-gray-light", aliasTo: "Gray 10", hex: "#eceeee" },
  { name: "Gray dark", variable: "--color-core-gray-dark", aliasTo: "Gray 80", hex: "#3a4041" },
  { name: "Blue", variable: "--color-core-blue", aliasTo: "Blue 60", hex: "#118ab2" },
  { name: "Blue light", variable: "--color-core-blue-light", aliasTo: "Blue 10", hex: "#daf3fc" },
  { name: "Blue dark", variable: "--color-core-blue-dark", aliasTo: "Blue 80", hex: "#084254" },
  { name: "Green", variable: "--color-core-green", aliasTo: "Green 50", hex: "#06d6a0" },
  { name: "Green light", variable: "--color-core-green-light", aliasTo: "Green 10", hex: "#d3fdf2" },
  { name: "Green dark", variable: "--color-core-green-dark", aliasTo: "Green 80", hex: "#024f3b" },
  { name: "Yellow", variable: "--color-core-yellow", aliasTo: "Yellow 30", hex: "#ffd166" },
  { name: "Yellow light", variable: "--color-core-yellow-light", aliasTo: "Yellow 10", hex: "#fff0cc" },
  { name: "Yellow dark", variable: "--color-core-yellow-dark", aliasTo: "Yellow 70", hex: "#996b00" },
  { name: "Orange", variable: "--color-core-orange", aliasTo: "Orange 40", hex: "#ff7c5c" },
  { name: "Orange light", variable: "--color-core-orange-light", aliasTo: "Orange 10", hex: "#ffe7e0" },
  { name: "Orange dark", variable: "--color-core-orange-dark", aliasTo: "Orange 70", hex: "#b72906" },
  { name: "Red", variable: "--color-core-red", aliasTo: "Red 40", hex: "#ef476f" },
  { name: "Red light", variable: "--color-core-red-light", aliasTo: "Red 10", hex: "#fcd9e2" },
  { name: "Red dark", variable: "--color-core-red-dark", aliasTo: "Red 70", hex: "#9b0d2f" },
  { name: "Purple", variable: "--color-core-purple", aliasTo: "Purple 50", hex: "#a368ca" },
  { name: "Purple light", variable: "--color-core-purple-light", aliasTo: "Purple 10", hex: "#efe4f6" },
  { name: "Purple dark", variable: "--color-core-purple-dark", aliasTo: "Purple 70", hex: "#5f2d81" },
];

const textColors: SemanticToken[] = [
  { name: "Text primary", variable: "--color-text-primary", aliasTo: "Gray 90", hex: "#222526" },
  { name: "Text secondary", variable: "--color-text-secondary", aliasTo: "Gray 60", hex: "#6a7576" },
  { name: "Text white", variable: "--color-text-white", aliasTo: "White", hex: "#ffffff" },
];

const interactiveColors: SemanticToken[] = [
  { name: "Interactive", variable: "--color-interactive", aliasTo: "Gray 80", hex: "#3a4041" },
  { name: "Hover", variable: "--color-interactive-hover", aliasTo: "Gray 70", hex: "#525b5b" },
  { name: "Active", variable: "--color-interactive-active", aliasTo: "Gray 100", hex: "#0a0b0b" },
];

/* ── Helper: contrast text color ────────────────────────────────── */

function contrastText(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#222526" : "#ffffff";
}

/* ── Components ─────────────────────────────────────────────────── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 mb-8">
      <h2>{children}</h2>
      <div className="w-[72px] h-px bg-core-green" />
    </div>
  );
}

function SubsectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 text-text-secondary">{children}</h3>;
}

function TokenMeta({ label, value }: { label: string; value: string }) {
  return (
    <span className="text-para-xs text-text-secondary font-body">
      <span className="text-text-primary font-semibold">{label}:</span> {value}
    </span>
  );
}

function ColorSwatch({ hex, label, sublabel }: { hex: string; label: string; sublabel?: string }) {
  const textColor = contrastText(hex);
  return (
    <div className="flex flex-col gap-1">
      <div
        className="rounded-sm w-full aspect-square flex items-end p-2 min-w-[56px]"
        style={{ backgroundColor: hex, color: textColor }}
      >
        <span className="text-para-xs font-body leading-none">{hex}</span>
      </div>
      <span className="text-para-xs font-body text-text-primary font-semibold truncate">{label}</span>
      {sublabel && (
        <span className="text-para-xs font-body text-text-secondary truncate">{sublabel}</span>
      )}
    </div>
  );
}

function SemanticColorRow({ token }: { token: SemanticToken }) {
  const textColor = contrastText(token.hex);
  return (
    <div className="flex items-center gap-4">
      <div
        className="shrink-0 w-12 h-12 rounded-sm border border-gray-20"
        style={{ backgroundColor: token.hex, color: textColor }}
      />
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-para-sm font-body font-semibold text-text-primary">{token.name}</span>
        <span className="text-para-xs font-body text-text-secondary truncate">
          {token.variable} → {token.aliasTo} → <code className="font-mono">{token.hex}</code>
        </span>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────── */

export default function DesignSystemPage() {
  return (
    <div className="container-inner py-12 sm:py-16">
      {/* Page header */}
      <div className="mb-16">
        <h1>Design System</h1>
        <p className="mt-3 text-para-lg text-text-secondary max-w-2xl">
          Typography and color token reference. All values are sourced from the
          Figma design variables and mapped into Tailwind CSS via{" "}
          <code className="font-mono text-para-sm bg-gray-00 px-1.5 py-0.5 rounded-sm">
            @theme
          </code>{" "}
          in globals.css.
        </p>
      </div>

      {/* ── TYPOGRAPHY ──────────────────────────────────────────── */}
      <section className="mb-20" id="typography">
        <SectionTitle>Typography</SectionTitle>

        {/* Fonts */}
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded bg-gray-00">
            <p className="text-para-sm text-text-secondary font-body mb-2">Heading Font</p>
            <p className="font-heading text-h4 font-semibold">Montserrat</p>
            <p className="text-para-xs text-text-secondary font-body mt-1">
              Weights: 400, 600 (semibold), 700
            </p>
          </div>
          <div className="p-6 rounded bg-gray-00">
            <p className="text-para-sm text-text-secondary font-body mb-2">Body Font</p>
            <p className="font-body text-h4">Karla</p>
            <p className="text-para-xs text-text-secondary font-body mt-1">
              Weights: 400, 500, 600, 700
            </p>
          </div>
        </div>

        {/* Headings */}
        <SubsectionTitle>Headings — Montserrat Semibold</SubsectionTitle>
        <div className="flex flex-col gap-8 mb-12">
          {headingTokens.map(({ level, variable, mobile, desktop }) => {
            const Tag = level.toLowerCase() as keyof Pick<
              React.JSX.IntrinsicElements,
              "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
            >;
            return (
              <div key={level} className="border-b border-gray-10 pb-6">
                <Tag>{level} — The quick brown fox</Tag>
                <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2">
                  <TokenMeta label="Token" value={variable} />
                  <TokenMeta label="Mobile" value={mobile} />
                  <TokenMeta label="Desktop" value={desktop} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Paragraphs */}
        <SubsectionTitle>Paragraphs — Karla Regular</SubsectionTitle>
        <div className="flex flex-col gap-6">
          {paragraphTokens.map(({ name, variable, size, className }) => (
            <div key={name} className="border-b border-gray-10 pb-4">
              <p className={`${className} font-body`}>
                {name} — The quick brown fox jumps over the lazy dog.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2">
                <TokenMeta label="Token" value={variable} />
                <TokenMeta label="Size" value={size} />
                <span className="text-para-xs bg-gray-00 text-text-secondary font-body px-1.5 py-0.5 rounded-sm">
                  Same across breakpoints
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COLORS ──────────────────────────────────────────────── */}
      <section id="colors">
        <SectionTitle>Colors</SectionTitle>

        {/* Primitive Colors */}
        <SubsectionTitle>Primitive Colors</SubsectionTitle>
        <div className="flex flex-col gap-8 mb-16">
          {primitiveColors.map((family) => (
            <div key={family.name}>
              <p className="text-para-sm font-body font-semibold text-text-primary mb-3">
                {family.name}
              </p>
              <div className="grid grid-cols-11 gap-1.5">
                {family.stops.map((stop) => (
                  <ColorSwatch
                    key={stop.variable}
                    hex={stop.hex}
                    label={stop.stop}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Semantic Colors: Core */}
        <SubsectionTitle>Core Colors</SubsectionTitle>
        <p className="text-para-sm text-text-secondary font-body mb-4">
          Semantic aliases that map to specific primitive stops.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {coreColors.map((token) => (
            <SemanticColorRow key={token.variable} token={token} />
          ))}
        </div>

        {/* Semantic Colors: Text */}
        <SubsectionTitle>Text Colors</SubsectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {textColors.map((token) => (
            <SemanticColorRow key={token.variable} token={token} />
          ))}
        </div>

        {/* Semantic Colors: Interactive */}
        <SubsectionTitle>Interactive Colors</SubsectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {interactiveColors.map((token) => (
            <SemanticColorRow key={token.variable} token={token} />
          ))}
        </div>
      </section>
    </div>
  );
}
