import Button from '@/components/Button';

/**
 * ManifestoCardStack — the "Manifesto for Progress" card stack
 * (Figma node 621:7080, "fluid container" / "cards").
 *
 * Renders the first entry in `sections` as a fully authored front card, then
 * stacks `upcomingCount` skeleton placeholder cards behind it — each
 * narrower than the one in front, overlapping by a constant 68px so only a
 * 32px sliver peeks out — to represent stages of the philosophy that
 * haven't been written yet.
 *
 * Layout is static for now (per Figma nodes 621:7862 / 621:7867 / 621:7872 /
 * 621:7877, the four breakpoint frames for this page). The z-index order
 * (front card z-2, first skeleton z-3, second z-2, third z-1) mirrors Figma
 * exactly so a future "advance the stack" animation — cycling the front
 * card back and bringing the next skeleton forward — can reuse it without a
 * jarring z-index swap.
 *
 * The accent bar is a simplified `border-l-4` rather than the separate
 * masked rectangle Figma exports, since the visible stripe renders about
 * that thin — see docs/backlog.md-adjacent Figma frames for reference.
 */

type ManifestoSection = {
  /** Font Awesome (sharp, thin) icon name, no prefix — e.g. "burst". */
  icon: string;
  heading: string;
  paragraphs: string[];
  cta: { icon: string; label: string };
};

interface ManifestoCardStackProps {
  sections: ManifestoSection[];
  /** Number of not-yet-written stages to represent as skeleton cards behind the front card. */
  upcomingCount?: number;
  className?: string;
}

/* Skeleton cards taper to these widths (relative to the front card) so they fan out behind it. */
const SKELETON_WIDTHS = ['82.5%', '65%', '47.5%'];

/* Literal z-index classes for the skeleton stack — written out (not built via template
   string) so Tailwind's static content scan can find and generate them. */
const SKELETON_Z = ['z-[3]', 'z-[2]', 'z-[1]'];

/* Constant overlap — every card but the last in the stack pulls the next one up by 68px,
   leaving a 32px sliver of the card behind it visible. */
const OVERLAP = 'mb-[-68px]';

export default function ManifestoCardStack({
  sections,
  upcomingCount = 3,
  className = '',
}: ManifestoCardStackProps) {
  const [front] = sections;
  if (!front) return null;

  return (
    <div className={`flex flex-col items-center lg:items-start ${className}`.trim()}>
      <div className="isolate relative flex flex-col w-full lg:max-w-[625px] xl:max-w-[590px]">

        {/* Front card — fully authored content (Figma node 621:9876) */}
        <div className={`relative z-[2] w-full ${upcomingCount > 0 ? OVERLAP : ''}`}>
          <div className="flex border border-gray-20 border-l-4 border-l-core-green rounded-sm bg-white pl-7 pr-6 py-6 lg:pl-10 lg:pr-9 lg:py-9">
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              <i
                className={`fa-sharp fa-thin fa-${front.icon} text-[40px] leading-none text-core-purple`}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-2 pb-3">
                <h6>{front.heading}</h6>
                <div className="flex flex-col gap-4 text-text-primary">
                  {front.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <Button
                variant="solid"
                icon={front.cta.icon}
                label={front.cta.label}
                fullWidth
                className="sm:w-auto sm:self-start"
              />
            </div>
          </div>
        </div>

        {/* Skeleton placeholders — not-yet-written stages (Figma node 654:12397), decorative only */}
        {upcomingCount > 0 && (
          <div className="relative z-[1] flex flex-col items-center w-full" aria-hidden="true">
            {Array.from({ length: upcomingCount }).map((_, i) => {
              const isLast = i === upcomingCount - 1;
              const width = SKELETON_WIDTHS[i] ?? SKELETON_WIDTHS[SKELETON_WIDTHS.length - 1];
              const zClass = SKELETON_Z[i] ?? SKELETON_Z[SKELETON_Z.length - 1];
              return (
                <div
                  key={i}
                  className={`relative ${zClass} ${isLast ? '' : OVERLAP}`}
                  style={{ width }}
                >
                  <div className="flex flex-col gap-2 border border-gray-20 border-l-4 border-l-core-green rounded-sm bg-white pl-4 pr-3 pt-4 pb-3">
                    <div className="h-2 w-2.5 rounded-full border border-core-purple" />
                    <div className="h-2 w-full rounded-full bg-gray-10" />
                    <div className="h-2 w-[50px] rounded-full bg-gray-10" />
                    <div className="h-2 w-full rounded-full bg-gray-10" />
                    <div className="h-2 w-[37px] rounded-full bg-gray-10" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
