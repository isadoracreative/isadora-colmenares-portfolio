import DividerShort from '@/components/DividerShort';
import ManifestoCardStack from '@/components/ManifestoCardStack';

/* -----------------------------------------------------------------------------
   Page (Figma nodes 621:7862 / 621:7867 / 621:7872 / 621:7877 — xs, sm-md,
   lg, and xl-2xl breakpoints of the same "Manifesto for Progress" page;
   card content sourced from Figma node 621:7052).

   Layout:
     container-inner
       page heading (h1 + DividerShort + "A Design Philosophy" sub-heading)
       ManifestoCardStack — one card front-and-center at a time, cycling
         through the 4 stages below; 3 generic skeleton cards fan out
         behind it. Clicking a card's CTA advances to the next stage,
         looping back to "The Spark" after "The Audience".
----------------------------------------------------------------------------- */

const manifestoSections = [
  {
    icon: 'burst',
    heading: 'The Spark',
    paragraphs: [
      'It starts with a spark of inspiration, an idea, a thought. Ideate until the subject is exhausted. Collaborate and listen to input from multiple sources. The best design results from listening to and considering all ideas before deciding.',
      'A concept is proposed based on an assumption. The subject is explored with the target audience to test for relevance. The research leads to adjustments and edits.',
    ],
    cta: { icon: 'owl', label: 'Gain Knowledge' },
  },
  {
    icon: 'owl',
    heading: 'Knowledge and Inspiration',
    paragraphs: [
      'Knowledge in books is accessed by a subset of the population: people who can read, want to read, and can accurately interpret text-based meaning. It is a designer\u2019s duty to disseminate information by communicating concepts, theories, and facts through spatial experiences that incorporate text alongside multi-sensory media. Inspire people with information about topics connected to their interests.',
      'Increase retention through multi-sensory activities. People observing and interacting with novel subjects have a reaction. Be inspired! Gain knowledge! Fill with emotion! Ignite a passion in people to act and make a social impact. Engage the senses to lay the groundwork for nostalgia.',
    ],
    cta: { icon: 'head-side-heart', label: 'Create Memories' },
  },
  {
    icon: 'head-side-heart',
    heading: 'Memory and Connection',
    paragraphs: [
      'Defeat boredom by providing activities that meaningfully entertain. Facilitate the creation of memories using subject matter that connects people with other people. Through shared experiences, people connect and memories are born.',
      'The hallmark of a successful exhibition is an audience so moved that they encourage others to participate.',
    ],
    cta: { icon: 'users-rays', label: 'Respect Your Audience' },
  },
  {
    icon: 'users-rays',
    heading: 'The Audience',
    paragraphs: [
      'Exhibitions and experiences are for all; no human is excluded. Truly inclusive experiences are created through accessible, universal design.',
      'The benefit of an experience is determined by the needs of the target audience. Target audiences are selected with intention, based on research and facts. A great exhibition will be centered around that audience; it will not center the audience around the exhibition.',
      'Above all, the spark should never be lost. Let it rise and fall, dance and falter, but never let it miss the target. A great experience brings the spark to the audience. It remains embedded there, now an ember waiting to burst into a bouquet of wild new ideas.',
    ],
    cta: { icon: 'burst', label: 'Find The Spark' },
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
        <ManifestoCardStack sections={manifestoSections} />

      </div>
    </main>
  );
}
