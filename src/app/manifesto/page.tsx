import DividerShort from '@/components/DividerShort';
import ManifestoCardStack from '@/components/ManifestoCardStack';

/* -----------------------------------------------------------------------------
   Page (Figma nodes 621:7862 / 621:7867 / 621:7872 / 621:7877 — xs, sm-md,
   lg, and xl-2xl breakpoints of the same "Manifesto for Progress" page).

   Layout:
     container-inner
       page heading (h1 + DividerShort + "A Design Philosophy" sub-heading)
       ManifestoCardStack — front card fully authored, 3 skeleton
         placeholders stacked behind it for stages not yet written.

   Only "The Spark" has been written so far — the remaining stages of the
   philosophy are represented as skeleton placeholder cards (see
   ManifestoCardStack) stacked behind it until their copy is authored. The
   stack is a static layout for now; it will animate (front card cycling
   back, next card advancing) in a follow-up pass.
----------------------------------------------------------------------------- */

const manifestoSections = [
  {
    icon: 'burst',
    heading: 'The Spark',
    paragraphs: [
      'It starts with a spark of inspiration, an idea, a thought.',
      'Ideate until the subject is exhausted.',
      'Collaborate and listen to input from multiple sources.',
      'The best design results from listening to and considering all ideas before deciding.',
      'A concept is proposed based on an assumption.',
      'The subject is explored with the target audience to test for relevance.',
      'The research leads to adjustments and edits.',
    ],
    cta: { icon: 'owl', label: 'Embrace Knowledge' },
  },
];

export default function ManifestoPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none scroll-mt-12">
      <div className="container-inner py-6 sm:py-9 lg:py-12 flex flex-col gap-6 sm:gap-9 lg:gap-12">

        {/* -- Page heading ------------------------------------------------ */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h1>Manifesto for Progress</h1>
            <DividerShort />
          </div>
          <p className="font-body font-medium text-para-lg text-text-primary leading-tight">
            A Design Philosophy
          </p>
        </div>

        {/* -- Card stack --------------------------------------------------- */}
        <ManifestoCardStack sections={manifestoSections} upcomingCount={3} />

      </div>
    </main>
  );
}
