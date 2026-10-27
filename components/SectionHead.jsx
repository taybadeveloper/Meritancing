export default function SectionHead({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
}) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <Heading>{title}</Heading>
      {description && <p>{description}</p>}
    </div>
  );
}
