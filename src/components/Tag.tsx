/*
  Tag — Figma component node 200:895 (Tags section).
  
  Two sizes:
    small  — 4px/2px padding, 4px radius, 12px text  (used in ProjectPreview)
    large  — 8px/4px padding, 6px radius, 16px text

  Seven color variants: gray (default), blue, green, yellow, orange, red, purple.
  Each has a default (light background) and active (core color fill) state.

  Optional dismiss icon using FA7 Pro Sharp Light (fa-sharp fa-light fa-xmark).
  The dismiss handler is only wired when `onDismiss` is provided.
*/

type TagSize  = 'small' | 'large';
type TagColor = 'gray' | 'blue' | 'green' | 'yellow' | 'orange' | 'red' | 'purple';
type TagState = 'default' | 'active';

interface TagProps {
  label:       string;
  size?:       TagSize;
  color?:      TagColor;
  state?:      TagState;
  dismissible?: boolean;
  onDismiss?:  () => void;
  className?:  string;
}

/* ── Size tokens ──────────────────────────────────────────────────────────── */

const SIZE_WRAP: Record<TagSize, string> = {
  small: 'px-2 py-0.5 gap-1 rounded',          /* 8px/2px pad, 4px radius, 4px gap */
  large: 'px-2 py-1   gap-2   rounded-[6px]',     /* 8px/4px pad, 6px radius, 8px gap */
};

const SIZE_TEXT: Record<TagSize, string> = {
  small: 'text-para-xs', /* 12px via --text-para-xs */
  large: 'text-para',   /* 16px via --text-para */
};

/* ── Color tokens ─────────────────────────────────────────────────────────── */

const COLOR_BG: Record<TagColor, Record<TagState, string>> = {
  gray:   { default: 'bg-gray-10',           active: 'bg-gray-50' },
  blue:   { default: 'bg-core-blue-light',   active: 'bg-core-blue' },
  green:  { default: 'bg-core-green-light',  active: 'bg-core-green' },
  yellow: { default: 'bg-core-yellow-light', active: 'bg-core-yellow' },
  orange: { default: 'bg-core-orange-light', active: 'bg-core-orange' },
  red:    { default: 'bg-core-red-light',    active: 'bg-core-red' },
  purple: { default: 'bg-core-purple-light', active: 'bg-core-purple' },
};

/* ── Component ────────────────────────────────────────────────────────────── */

export default function Tag({
  label,
  size       = 'small',
  color      = 'gray',
  state      = 'default',
  dismissible = false,
  onDismiss,
  className  = '',
}: TagProps) {
  return (
    <span
      className={[
        'inline-flex items-center justify-center',
        'font-body font-normal whitespace-nowrap leading-normal',
        'text-text-primary',
        SIZE_WRAP[size],
        SIZE_TEXT[size],
        COLOR_BG[color][state],
        className,
      ]
        .join(' ')
        .trim()}
    >
      {label}

      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label={`Remove ${label}`}
          className="shrink-0 size-3 flex items-center justify-center leading-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-core-green rounded-sm"
        >
          <i className="fa-sharp fa-light fa-xmark text-[10px]" aria-hidden="true" />
        </button>
      )}
    </span>
  );
}
