/**
 * Button — solid, outline, and borderless variants, four sizes.
 *
 * Icons default to Font Awesome 7 Pro Sharp Light (`fa-sharp fa-light`).
 * Pass `iconVariant="brands"` to switch to FA7 Brands (`fa-brands`).
 * The FA7 Kit handles all font-family declarations via its own CSS —
 * no custom font-family utility is needed.
 *
 * Solid:      dark fill (--color-interactive), white text.
 * Outline:    transparent bg, green border (--color-core-green), dark text.
 * Borderless: transparent bg, no border; label underlines on hover/active
 *             (Figma node 444:6506).
 *
 * Security: when rendered as <a> with target="_blank", rel="noopener noreferrer"
 * is applied automatically if the caller does not provide a rel string.
 */

type ButtonSize      = 'xs' | 'sm' | 'default' | 'lg';
type ButtonVariant   = 'solid' | 'outline' | 'borderless';
type IconVariant     = 'sharp-light' | 'brands';
type IconPosition    = 'left' | 'right';

interface ButtonProps {
  label:          string;
  variant?:        ButtonVariant;
  size?:           ButtonSize;
  /** FA7 icon name without prefix, e.g. "download" or "linkedin" */
  icon?:           string;
  /** Which side of the label the icon renders on. Defaults to 'left'. */
  iconPosition?:   IconPosition;
  /** Defaults to 'sharp-light'; pass 'brands' for FA7 Brands icons */
  iconVariant?:    IconVariant;
  /** When true, stretches the button to fill its container's full width. */
  fullWidth?:      boolean;
  /**
   * Set to true when target="_blank" — appends a visually-hidden
   * "(opens in new tab)" notice for screen-reader users (Technique G201).
   */
  opensInNewTab?:  boolean;
  href?:           string;
  target?:         string;
  rel?:             string;
  className?:       string;
}

/* -- Size tokens -------------------------------------------------------- */

const PADDING: Record<ButtonVariant, Record<ButtonSize, string>> = {
  solid: {
    xs:      'px-2 py-1',
    sm:      'px-3 py-1.5',
    default: 'px-4 py-2',
    lg:      'px-5 py-3',
  },
  outline: {
    xs:      'px-2 py-1',
    sm:      'px-3 py-1.5',
    default: 'px-4 py-2',
    lg:      'px-5 py-3',
  },
  borderless: {
    xs:      'py-1',
    sm:      'py-1.5',
    default: 'py-2',
    lg:      'py-3',
  },
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

/* -- Variant tokens ----------------------------------------------------- */

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  solid:
    'bg-interactive hover:bg-interactive-hover active:bg-interactive-active text-text-white',
  outline:
    'border border-core-green bg-transparent hover:bg-gray-00 active:bg-gray-10 text-interactive',
  borderless:
    'bg-transparent text-interactive hover:text-interactive-hover active:text-interactive-active',
};

const BORDERLESS_LABEL_CLASS =
  'border-b border-transparent group-hover:border-interactive-hover group-active:border-interactive-active';

/*
  Focus ring — WCAG 2.4.11 / 2.4.7 (Level AA): Focus Visible.
  Uses focus-visible: so the ring only appears for keyboard navigation.
  ring-offset-2 provides a gap on coloured backgrounds.
*/
const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-core-green focus-visible:ring-offset-2';

/* -- Component ---------------------------------------------------------- */

export default function Button({
  label,
  variant       = 'solid',
  size          = 'default',
  icon,
  iconPosition  = 'left',
  iconVariant   = 'sharp-light',
  fullWidth     = false,
  opensInNewTab = false,
  href,
  target,
  rel,
  className     = '',
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
    'group inline-flex items-center justify-center gap-2',
    'rounded-sm cursor-pointer transition-colors',
    FOCUS_RING,
    PADDING[variant][size],
    VARIANT_CLASS[variant],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  const labelClass = [
    'font-body font-normal whitespace-nowrap leading-normal',
    LABEL_SIZE[size],
    variant === 'borderless' ? BORDERLESS_LABEL_CLASS : '',
  ]
    .filter(Boolean)
    .join(' ');

  const labelNode = (
    <span className={labelClass}>
      {label}
      {opensInNewTab && (
        <span className="sr-only"> (opens in new tab)</span>
      )}
    </span>
  );

  const leadingIcon = icon && iconPosition === 'left' ? (
    <i className={iconClass} aria-hidden="true" />
  ) : null;

  const trailingIcon = icon && iconPosition === 'right' ? (
    <i className={iconClass} aria-hidden="true" />
  ) : null;

  const content = (
    <>
      {leadingIcon}
      {labelNode}
      {trailingIcon}
    </>
  );

  if (href) {
    /*
      Auto-apply rel="noopener noreferrer" for _blank links that don't already
      carry a rel — prevents the opened tab from accessing window.opener.
    */
    const resolvedRel =
      target === '_blank' && !rel ? 'noopener noreferrer' : rel;

    return (
      <a href={href} target={target} rel={resolvedRel} className={rootClass}>
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
