'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import Button from '@/components/Button';

/**
 * ManifestoCardStack — the "Manifesto for Progress" card stack
 * (Figma node 621:7080, "fluid container" / "cards").
 *
 * `sections` is an ordered, looping sequence (Spark → Knowledge → Memory →
 * Audience → Spark …). Every section renders as a *pair* of elements,
 * both always mounted and stacked in the same CSS grid cell (Figma node
 * 654:12397's fan-out, generalized to real content):
 *
 *   - a "skeleton box" — the generic placeholder shape, sized to the
 *     section's role: 100% wide at role 0 (front), tapering to 82.5% /
 *     65% / 47.5% for roles 1-3 fanned out behind it.
 *   - a "content box" — the section's real heading/paragraphs/CTA, always
 *     rendered at a *fixed* 100% width regardless of role, fading to
 *     opacity/blur only when it isn't front.
 *
 * Role — `(sectionIndex - currentIndex + N) % N` — drives both boxes'
 * vertical offset and z-index identically, so at role 0 they coincide
 * exactly (looking like one card); at roles 1-3 the content box is simply
 * invisible. Keeping the content box's width constant (never narrowed) is
 * what keeps every card a uniform height: since it's always in normal
 * flow at the *same* width, each section's natural content height is
 * stable regardless of which role it currently occupies (narrowing it per
 * role would make its text re-wrap into more lines the further back it
 * sits, inflating the height the stack is measured against). The shared
 * CSS grid cell all 4 content boxes occupy auto-sizes to whichever
 * section's content is tallest, and every skeleton/content box
 * `self-stretch`es to fill that same height — so nothing visibly grows or
 * shrinks mid-shuffle, only width/position/opacity/blur animate.
 *
 * Clicking the front card's CTA advances `currentIndex`, which recomputes
 * every pair's role in one go — the browser's CSS transition engine
 * animates each of them from their old role's values to their new role's
 * values simultaneously. This is the same "compute role from one index,
 * let CSS animate the diff" pattern as the reference carousel.
 *
 * `isAnimating` locks the button for one transition's duration so repeated
 * clicks can't overlap mid-flight, matching the reference's guard.
 */

export type ManifestoSection = {
  /** Font Awesome (sharp, thin) icon name, no prefix — e.g. "burst". */
  icon: string;
  heading: string;
  paragraphs: string[];
  cta: { icon: string; label: string };
};

interface ManifestoCardStackProps {
  sections: ManifestoSection[];
  className?: string;
}

/* How long the advance transition takes — keep in sync with the duration-500 classes below. */
const TRANSITION_MS = 500;

/* Matches the reference carousel's easing (cubic-bezier(0.25, 0.46, 0.45, 0.94)). */
const EASE = 'ease-[cubic-bezier(0.25,0.46,0.45,0.94)]';

/* Per-role skeleton-box width — index 0 is the front card, 1-3 fan out behind it. */
const ROLE_WIDTH = ['100%', '82.5%', '65%', '47.5%'];
/* The front role is always topmost (z-[4]) so its real content — CTA included — is never
   covered by a skeleton peeking out from behind it; the skeletons then descend in order. */
const ROLE_Z = ['z-[4]', 'z-[3]', 'z-[2]', 'z-[1]'];
/* Pushes each role down from the shared top edge of the stack — since every card is a uniform
   height (see block comment above), this both tucks a card behind the one in front of it and
   leaves a 32px sliver of it peeking out below, role over role. Shared by the skeleton box and
   content box of a given role so the two always coincide. */
const ROLE_OFFSET_PX = [0, 32, 64, 96];

/* Shared visual shape for both the skeleton box and the content box. */
const CARD_BOX =
  'h-full overflow-hidden border border-gray-20 border-l-4 border-l-core-green rounded-sm bg-white';

/* -- Shared bits -------------------------------------------------------- */

function SkeletonBars({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`.trim()}>
      <div className="h-2 w-2.5 rounded-full border border-core-purple" />
      <div className="h-2 w-full rounded-full bg-gray-10" />
      <div className="h-2 w-[50px] rounded-full bg-gray-10" />
      <div className="h-2 w-full rounded-full bg-gray-10" />
      <div className="h-2 w-[37px] rounded-full bg-gray-10" />
    </div>
  );
}

function CardContent({
  section,
  onCtaClick,
  ctaDisabled,
}: {
  section: ManifestoSection;
  onCtaClick?: () => void;
  ctaDisabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3 flex-1 min-w-0">
      <i
        className={`fa-sharp fa-thin fa-${section.icon} text-[40px] leading-none text-core-purple`}
        aria-hidden="true"
      />
      <div className="flex flex-col gap-2 pb-3">
        <h6>{section.heading}</h6>
        <div className="flex flex-col gap-4 text-text-primary">
          {section.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
      <Button
        variant="solid"
        icon={section.cta.icon}
        label={section.cta.label}
        fullWidth
        className="sm:w-auto sm:self-start"
        onClick={onCtaClick}
        disabled={ctaDisabled}
      />
    </div>
  );
}

/* -- Component ---------------------------------------------------------- */

export default function ManifestoCardStack({
  sections,
  className = '',
}: ManifestoCardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const count = sections.length;
  if (count === 0) return null;

  function handleAdvance() {
    if (isAnimating || count < 2) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % count);
    timerRef.current = setTimeout(() => setIsAnimating(false), TRANSITION_MS);
  }

  return (
    <div className={`flex flex-col items-center lg:items-start ${className}`.trim()}>
      <div className="isolate relative grid grid-cols-1 w-full lg:max-w-[625px] xl:max-w-[590px]">
        {sections.map((section, i) => {
          const role = (i - currentIndex + count) % count;
          const isFront = role === 0;
          const translate = `translateY(${ROLE_OFFSET_PX[role]}px)`;

          return (
            <Fragment key={i}>
              {/* Skeleton box — generic "not revealed yet" placeholder shape; narrows per role. */}
              <div
                aria-hidden="true"
                className={[
                  'relative col-start-1 row-start-1 self-stretch justify-self-center',
                  `transition-[width,transform] duration-500 ${EASE}`,
                  ROLE_Z[role],
                ].join(' ')}
                style={{ width: ROLE_WIDTH[role], transform: translate }}
              >
                <div className={CARD_BOX}>
                  <div
                    className={`p-4 transition-opacity duration-500 ${isFront ? 'opacity-0' : 'opacity-100'}`}
                  >
                    <SkeletonBars />
                  </div>
                </div>
              </div>

              {/* Content box — real heading/paragraphs/CTA. Always full width (see block
                  comment above), so it fades in/out as a whole box without ever narrowing. */}
              <div
                inert={!isFront}
                className={[
                  'col-start-1 row-start-1 self-stretch justify-self-center w-full',
                  `transition-[opacity,filter,transform] duration-500 ${EASE}`,
                  isFront ? 'opacity-100 blur-none' : 'opacity-0 blur-md pointer-events-none',
                  ROLE_Z[role],
                ].join(' ')}
                style={{ transform: translate }}
              >
                <div className={`${CARD_BOX} pl-7 pr-6 py-6 lg:pl-10 lg:pr-9 lg:py-9`}>
                  <CardContent
                    section={section}
                    onCtaClick={isFront ? handleAdvance : undefined}
                    ctaDisabled={isAnimating}
                  />
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
