/**
 * Button — solid and outline variants, four sizes.
 *
 * Icons default to Font Awesome 7 Pro Sharp Light (`fa-sharp fa-light`).
 * Pass `iconVariant="brands"` to switch to FA7 Brands (`fa-brands`).
 * The FA7 Kit handles all font-family declarations via its own CSS —
 * no custom font-family utility is needed.
 *
 * Solid:   dark fill (--color-interactive), white text.
 * Outline: transparent bg, green border (--color-core-green), dark text.
 */

type ButtonSize    = 'xs' | 'sm' | 'default' | 'lg';
type ButtonVariant = 'solid' | 'outline';
type IconVariant   = 'sharp-light' | 'brands';

interface ButtonProps {
  label:        string;
  variant?:     ButtonVariant;
  size?:        ButtonSize;
  /** FA7 icon name without prefix, e.g. "download" or "linkedin" */
  icon?:        string;
  /** Defaults to 'sharp-light'; pass 'brands' for FA7 Brands icons */
  iconVariant?: IconVariant;
  href?:        string;
  target?:      string;
  rel?:         string;
  className?:   string;
}

/* ── Size tokens ──────────────────────────────────────────────────────── */

const PADDING: Record<ButtonSize, string> = {
  xs:      'px-2 py-1',
  sm:      'px-3 py-1.5',
  default: 'px-4 py-2',
  lg:      'px-5 py-3',
};

const ICON_SIZE: Record<ButtonSize, string> = {
  xs:      'text-[12px]',
  sm:      'text-[14px]',
  default: 'text-[14px]',
  lg:      'text-[16px]',
};

const LABEL_SIZE: Record<ButtonSize, string> = {
  xs:      'text-para-xs',
  sm:      'text-para-sm',
  default: 'text-para-sm',
  lg:      'text-para',
};

/* ── Variant tokens ───────────────────────────────────────────────────── */

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  solid:
    'bg-interactive hover:bg-interactive-hover active:bg-interactive-active text-text-white',
  outline:
    'border border-core-green bg-transparent hover:bg-gray-00 active:bg-gray-10 text-interactive',
};

/* ── Component ────────────────────────────────────────────────────────── */

export default function Button({
  label,
  variant     = 'solid',
  size        = 'default',
  icon,
  iconVariant = 'sharp-light',
  href,
  target,
  rel,
  className   = '',
}: ButtonProps) {
  const iconClass = icon
    ? [
        iconVariant === 'brands'
          ? `fa-brands fa-${icon}`
          : `fa-sharp fa-light fa-${icon}`,
        ICON_SIZE[size],
        'shrink-0 leading-none',
      ].join(' ')
    : '';

  const rootClass = [
    'inline-flex items-center justify-center gap-2',
    'rounded-sm cursor-pointer transition-colors',
    PADDING[size],
    VARIANT_CLASS[variant],
    className,
  ]
    .join(' ')
    .trim();

  const content = (
    <>
      {icon && <i className={iconClass} aria-hidden="true" />}
      <span className={`font-body font-normal ${LABEL_SIZE[size]} whitespace-nowrap leading-normal`}>
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={rootClass}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={rootClass}>
      {content}
    </button>
  );
}
