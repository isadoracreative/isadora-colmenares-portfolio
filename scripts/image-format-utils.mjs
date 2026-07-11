/** Shared photo vs. graphic classification for image optimization scripts.
 *
 * JPG when photo/photorealistic imagery dominates (some incidental text is OK).
 * PNG when text, UI, diagrams, or flat graphics are the primary subject.
 * See .cursor/rules/image-formats.mdc for the full decision guide.
 */

/** Exact basenames (no extension) treated as photographs. */
export const PHOTO_BASENAMES = new Set([
  'aon-overview-dashboard',
  'aon-overview-mobile-simulation',
  'aon-section-01-persona-workshop',
  'aon-section-03-closed-captioning',
  'aon-section-03-mobile-sjt',
  'aon-section-04-assessment-reports',
  'burton-section-03-ideation-workshop',
  'burton-section-04-drainage-pipe',
  'burton-section-04-initial-planting',
  'burton-section-04-storm-flooding',
  'burton-section-05-mature-growth',
  'burton-render-spatial',
  'burton-section-03-planting-density',
  'cii-overview-signage',
  'cii-section-04-aabc-asia',
  'cii-section-04-aabc-regional',
  'cii-section-04-discovery-cross-channel',
  'cii-section-04-dot-infographic',
  'cii-section-04-wayfinding-booklet',
  'inpa-overview-backdrop-signage',
  'inpa-overview-event-program',
  'inpa-overview-keynote-staging',
  'inpa-section-02-registration-desk',
  'inpa-section-02-tote-bags',
  'inpa-section-03-event-website',
  'inpa-section-03-promotional-signage',
  'inpa-section-04-attendee-badges',
  'inpa-section-04-speaker-namecards',
  'inpa-section-04-staff-apparel',
  'inpa-section-05-abstract-guide',
  'project-arachnology-lab',
  'project-botanical-landscape',
  'project-global-conference',
  'project-immersive-assessment',
  'project-ornithology-congress',
]);

/** Basename prefixes treated as photographs. */
export const PHOTO_PREFIXES = [
  'avatar-',
  'isa-',
  'burton-section-01-',
  'cii-section-05-',
];

export function isPhotoAsset(basename) {
  if (PHOTO_BASENAMES.has(basename)) return true;
  return PHOTO_PREFIXES.some(
    (prefix) => basename === prefix || basename.startsWith(prefix),
  );
}
