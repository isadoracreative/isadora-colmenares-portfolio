/**
 * DividerShort — accent divider from the Figma design system (node 52:320).
 *
 * A solid green 1 px bar that fills its parent up to a max of 72 px.
 * Color: --color-core-green (#06d6a0).
 */
export default function DividerShort({ className }: { className?: string }) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={`w-full max-w-[72px] h-px bg-core-green ${className ?? ''}`}
    />
  );
}
