import ProjectHeader from '@/components/ProjectHeader';
import { requireProjectBySlug } from '@/data/projects';
import ProjectContentSection from '@/components/ProjectContentSection';
import ProjectCaptionedImage, { type CaptionedImageProps } from '@/components/ProjectCaptionedImage';
import DividerShort from '@/components/DividerShort';

const project = requireProjectBySlug('burton-cooperative-residence');

const plan2d = project.overviewImages?.find((img) => img.src.endsWith('burton-plan-2d.png'));
const model3d = project.overviewImages?.find((img) => img.src.endsWith('burton-model-3d-isometric.png'));
const spatialRender = project.overviewImages?.find((img) => img.src.endsWith('burton-render-spatial.jpg'));

if (!plan2d || !model3d || !spatialRender) {
  throw new Error('Missing overview images for burton-cooperative-residence');
}

const overviewImageTrio = [plan2d, model3d, spatialRender] as const;

// -- Overview: Role (replace placeholder with final copy) --------------------

const overviewRole =
  'I was the sole designer on this project, supporting building management agents, co-op board leadership, and residential committee members. I collaborated with civil engineers, construction contractors, and landscaping crews.';

// -- Section 01 -------------------------------------------------------------

const section01Highlights = [
  {
    title: 'Topographical Grade Analysis',
    body:
      'Recorded severity of slopes to identify primary runoff pathways and structural weak points prone to erosion or saturation.',
  },
  {
    title: 'Drainage Regulation Compliance',
    body:
      "Reviewed engineers' interpretation of municipal drainage codes to understand design constraints pertaining to on-site water retention and corridor diversion.",
  },
  {
    title: 'Public-Private Spatial Balancing',
    body:
      'Managed the intersection of secure private residential landscape architecture and accessible public infrastructure.',
  },
] as const;

const section01Images: CaptionedImageProps[] = [
  {
    src: '/images/burton-section-01-lower-lawn-runoff.jpg',
    alt: 'Lower lawn susceptible to excessive storm water runoff',
    caption: 'Lower lawn susceptible to excessive storm water runoff',
    sizes: '(min-width: 640px) 482px, 100vw',
  },
  {
    src: '/images/burton-section-01-seed-blanket.jpg',
    alt: 'Steep grade change temporarily guarded from erosion using seed blanket',
    caption: 'Steep grade change temporarily guarded from erosion using seed blanket',
    sizes: '(min-width: 640px) 482px, 100vw',
  },
  {
    src: '/images/burton-section-01-retaining-wall.jpg',
    alt: 'Retaining wall, gas lines, and temporary engineering structure for exploring drainage management',
    caption:
      'Retaining wall, gas lines, and temporary engineering structure for exploring drainage management',
    sizes: '(min-width: 640px) 482px, 100vw',
  },
  {
    src: '/images/burton-section-01-invasive-hedges.jpg',
    alt: 'Invasive, non-native hedges and chronic flood area at intersection of private and public property',
    caption:
      'Invasive, non-native hedges and chronic flood area at intersection of private and public property',
    sizes: '(min-width: 640px) 482px, 100vw',
  },
];

// -- Section 02 -------------------------------------------------------------

const section02Highlights = [
  {
    title: 'Flat Vector Foundation (AutoCAD)',
    body:
      'Drafted master top-view technical plans detailing exact property lines, public pedestrian right-of-ways, and core structural footprints to secure a precise baseline.',
  },
  {
    title: 'Volumetric Hardscape Modeling (SketchUp)',
    body:
      'Extruded 2D geometric layouts into high-fidelity 3D structural masses, modeling the exact physical scale, depth, and stepped positioning of the stone retaining walls.',
  },
  {
    title: 'Cross-Platform Spatial Alignment',
    body:
      'Managed a seamless data pipeline between AutoCAD DWG files and SketchUp viewports to ensure 2D site grading contours perfectly mapped onto 3D terrain manipulations, leaving zero margin for structural error.',
  },
] as const;

const section02Images: CaptionedImageProps[] = [
  {
    src: plan2d.src,
    alt: '2D site plan drafted in AutoCAD, implementing line-weight hierarchy and detailed labeling',
    caption: '2D site plan drafted in AutoCAD, implementing line-weight hierarchy and detailed labeling',
    border: true,
  },
  {
    src: model3d.src,
    alt: '3D volumetric SketchUp model illustrating complex lawn gradients and hardscape layout',
    caption: '3D volumetric SketchUp model illustrating complex lawn gradients and hardscape layout',
    border: true,
  },
];

// -- Section 03 -------------------------------------------------------------

const section03Highlights = [
  {
    title: 'Collaborative Flora Mapping',
    body:
      'Synthesized qualitative resident input and obtained botanist review of native planting list to cross-reference species selections with regional soil-stabilization performance metrics.',
  },
  {
    title: 'Rapid Ideation of Spatial Layouts',
    body:
      'Executed freehand site sketches and conceptual overlays during stakeholder workshops to rapidly iterate zone assignments, mapping out species distribution relative to microclimate exposure and shade profiles.',
  },
  {
    title: 'Volumetric Terrain & Growth Simulation',
    body:
      'Sculpted the steep, variable-grade frontage within SketchUp to model volumetric soil configurations and simulate multi-year plant canopy growth, validating long-term aesthetic transformation.',
  },
] as const;

const section03Images: CaptionedImageProps[] = [
  {
    src: '/images/burton-section-03-planting-density.jpg',
    alt: 'High-fidelity 3D landscape simulation in SketchUp validating plant density distributions',
    caption:
      'High-fidelity 3D landscape simulation in SketchUp validating plant density distributions across specified planting zones',
    border: true,
  },
  {
    src: '/images/burton-section-03-ideation-workshop.jpg',
    alt: 'Ideation workshop sketch and mapped photo references for native plantings',
    caption:
      'Ideation workshop sketch and mapped photo references compiling qualitative resident feedback and botanist suggestions for native plantings',
    border: true,
  },
];

// -- Section 04 -------------------------------------------------------------

const section04Highlights = [
  {
    title: 'Erosion Stabilization',
    body:
      'Identified issue with plantings intended to support erosion control due to sparsity of installation and lack of root system maturity.',
  },
  {
    title: 'Complex Runoff Patterns',
    body:
      'Documented water runoff across multiple on-site visits in inclement weather to capture evidence of storm effects.',
  },
  {
    title: 'Subsurface Hydrological Routing',
    body:
      'Collaborated on a subterranean drainage network and piping infrastructure to channel runoff away from residential foundations and public walkways.',
  },
] as const;

const section04Hero: CaptionedImageProps = {
  src: '/images/burton-section-04-initial-planting.jpg',
  alt: 'Initial planting installation including native Black Chokeberry intended to support erosion control',
  caption: 'Initial planting installation including native Black Chokeberry intended to support erosion control',
};

const section04TwoUp: CaptionedImageProps[] = [
  {
    src: '/images/burton-section-04-storm-flooding.jpg',
    alt: 'Storm water flooding due to insufficient erosion control',
    caption: 'Storm water flooding due to insufficient erosion control',
    sizes: '(min-width: 640px) 482px, 100vw',
  },
  {
    src: '/images/burton-section-04-drainage-pipe.jpg',
    alt: 'Installation of drainage pipe redistributing water runoff for increased natural irrigation and flood prevention',
    caption:
      'Installation of drainage pipe redistributing water runoff for increased natural irrigation and flood prevention',
    sizes: '(min-width: 640px) 482px, 100vw',
  },
];

// -- Section 05 -------------------------------------------------------------

const section05Highlights = [
  {
    title: 'Resident-Requested Native Plantings',
    body:
      'Created an elegant stepped landscape that supports a wide variety of pollinator-attracting native plantings and offers an aesthetically pleasing experience for residents, visitors, and passers-by.',
  },
  {
    title: 'On-Site Precipitation Capture',
    body:
      'Diverted 100% of surface runoff away from municipal sidewalks and back into native soil ecosystems.',
  },
  {
    title: 'Visual-Technical Documentation',
    body:
      'AutoCAD drafting and SketchUp modeling serve as references for future planning and upgrades.',
  },
] as const;

const section05Images: CaptionedImageProps[] = [
  {
    src: spatialRender.src,
    alt: '3D model simulating human scale perspective at adjoining resident walkway and public city sidewalk',
    caption:
      '3D model simulating human scale perspective at adjoining resident walkway and public city sidewalk',
  },
  {
    src: '/images/burton-section-05-mature-growth.jpg',
    alt: 'Sustained mature plant growth after a 2 year period, featuring native Red Osier Dogwood and pollinator-attracting Beebalms, Milkweed, and Lobelia',
    caption:
      'Sustained mature plant growth after a 2 year period, featuring native Red Osier Dogwood and pollinator-attracting Beebalms, Milkweed, and Lobelia',
  },
];

export default function BurtonPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none scroll-mt-12">

      {/* -- Project header — container-inner (matches main content grid) --- */}
      <div className="container-inner pt-6 sm:pt-9 pb-12">
        <ProjectHeader
          clientName={project.clientName}
          projectTitle={project.projectTitle}
          tags={[...project.tags]}
        />
      </div>

      {/* -- Main content — container-inner ----------------------- */}
      <div className="container-inner pb-6 sm:pb-9 grid grid-cols-12 gap-y-9">

        {/* -- Overview ----------------------------------------------------- */}
        <section
          aria-labelledby="overview-heading"
          className="col-span-12 grid grid-cols-12 gap-y-8"
        >

          {/* Text block — narrows at lg+ */}
          <div className="col-span-12 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6 flex flex-col gap-6">

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <h2 id="overview-heading">Overview</h2>
                <DividerShort />
              </div>

              <p className="font-body font-medium text-para-lg text-text-primary leading-tight text-pretty">
              The Burton Cooperative's goal was to synthesizing resident feedback into a precise, functional landscape design that anchors a topographically sensitive urban incline while complying with city regulations and maintaining aesthetics in a high traffic area.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h6>Challenge</h6>
                <p className="text-text-primary text-pretty">
                Following a retaining wall update, residents requested the removal of invasive plant species and favored native plantings for the front landscaping reconstruction. Cross-disciplinary project management exposed vendor issues: an engineering firm underestimated stormwater runoff, and a landscaping crew deployed inadequate stone barriers and immature flora. These failures accelerated topsoil erosion and threatened existing structures.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h6>Solution</h6>
                <p className="text-text-primary text-pretty">
                  Designed a landscaping model to simulate placement of native
                  pollinator-attracting plantings and coordinated an auxiliary contractor
                  to engineer a subsurface drainage pipeline. This structural correction
                  mitigated the erosion problem while establishing natural
                  irrigation support that recycled diverted water runoff to
                  nourish the lower lawn plantings.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h6>Role</h6>
                <p className="text-text-primary text-pretty">{overviewRole}</p>
              </div>
            </div>

          </div>

          {/* Image group — three-up row; full width at every breakpoint */}
          <div className="col-span-12">
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
              {overviewImageTrio.map(({ src, alt, caption, border }) => (
                <ProjectCaptionedImage
                  key={caption}
                  src={src}
                  alt={alt}
                  caption={caption}
                  border={border}
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              ))}
            </div>
          </div>

        </section>
        {/* -- End overview ------------------------------------------------- */}

        {/* -- 01 / Topography & Compliance Challenges ----------------------- */}
        <ProjectContentSection
          id="section-01-heading"
          number="01"
          title="Topography & Compliance Challenges"
          lead="Analyzed variable-grade property frontage to identify soil erosion liabilities and municipal drainage code affecting a high-traffic pedestrian corridor. Discovered core layout challenge lay in executing a high-density environmental design that could capture and filter immense volumes of water on-site without sacrificing the goal of increasing native plantings and improving co-op aesthetics."
          highlights={section01Highlights}
        >
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
            {section01Images.slice(0, 2).map((image) => (
              <ProjectCaptionedImage key={image.caption} {...image} />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
            {section01Images.slice(2, 4).map((image) => (
              <ProjectCaptionedImage key={image.caption} {...image} />
            ))}
          </div>
        </ProjectContentSection>

        {/* -- 02 / Technical Drafting & Hardscape Layout -------------------- */}
        <ProjectContentSection
          id="section-02-heading"
          number="02"
          title="Technical Drafting & Hardscape Layout"
          lead="Translated site measurements into precise 2D AutoCAD vector blueprints to establish spatial boundaries and hardscape architecture. Used SketchUp environment to build out the volumetric hardscape profiles, visualizing 3D structures and multi-tiered lawn geometries required to determine planting zones."
          highlights={section02Highlights}
        >
          {section02Images.map((image) => (
            <ProjectCaptionedImage key={image.caption} {...image} />
          ))}
        </ProjectContentSection>

        {/* -- 03 / Planting Simulation & 3D Spatial Modeling ---------------- */}
        <ProjectContentSection
          id="section-03-heading"
          number="03"
          title="Planting Simulation & 3D Spatial Modeling"
          lead="Translated qualitative co-op resident feedback into hand-drawn sketches and 3D models to establish planting zones, targeting native species to support local pollinator populations. Used SketchUp to model volumetric soil gradients and visualize plant canopies and lower floral tiers, ensuring sustainable growth and erosion control."
          highlights={section03Highlights}
        >
          {section03Images.map((image) => (
            <ProjectCaptionedImage key={image.caption} {...image} />
          ))}
        </ProjectContentSection>

        {/* -- 04 / Civil Mitigation & Hydrological Infrastructure Engineering */}
        <ProjectContentSection
          id="section-04-heading"
          number="04"
          title="Civil Mitigation & Hydrological Infrastructure Engineering"
          lead="Discovered structural engineering errors in runoff routing and led an auxiliary contractor to install a subsurface drainage pipe. This structural correction mitigated the slope erosion threat while establishing a sustainable, natural resource system to passively irrigate the lower lawn plantings."
          highlights={section04Highlights}
        >
          <ProjectCaptionedImage {...section04Hero} />
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-9">
            {section04TwoUp.map((image) => (
              <ProjectCaptionedImage key={image.caption} {...image} />
            ))}
          </div>
        </ProjectContentSection>

        {/* -- 05 / Solution and Functional Outcomes ------------------------- */}
        <ProjectContentSection
          id="section-05-heading"
          number="05"
          title="Solution and Functional Outcomes"
          lead="Delivered a regulation-compliant, community-centric landscape design pairing hard retaining barriers with localized botanical zoning. The solution secured the eroding frontage while repurposing water runoff into a natural irrigation asset that sustained the lower lawn ecosystem and enhanced co-op aesthetics."
          highlights={section05Highlights}
        >
          {section05Images.map((image) => (
            <ProjectCaptionedImage key={image.caption} {...image} />
          ))}
        </ProjectContentSection>

      </div>
    </main>
  );
}
