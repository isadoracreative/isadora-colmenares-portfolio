export default function DividerFull({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`w-full h-px bg-gray-20 ${className ?? ''}`.trim()}
    />
  );
}
