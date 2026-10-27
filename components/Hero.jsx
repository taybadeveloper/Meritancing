export default function Hero({
  eyebrow,
  title,
  description,
  children,
  small = false,
  container = true,
  wide = false,
  alt = "Meritancing data intelligence platform overview for family wealth planning",
}) {
  const content = (
    <div
      className="hero-content"
      style={wide ? { maxWidth: "720px" } : undefined}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {children && <div className="hero-ctas">{children}</div>}
    </div>
  );

  return (
    <section className={`hero${small ? " hero-sm" : ""}`}>
      <div className="hero-media">
        <img
          src="/assets/hero.jpg"
          alt={alt}
          width="1600"
          height="900"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="hero-overlay"></div>
      {container ? <div className="container">{content}</div> : content}
    </section>
  );
}
