export function ProjectVisual({ imageSrc, imageAlt }: { imageSrc?: string; imageAlt?: string }) {
  if (!imageSrc) return null;
  return (
    <div className="project-visual">
      <img src={imageSrc} alt={imageAlt ?? ""} loading="lazy" width={1408} height={912} />
    </div>
  );
}
