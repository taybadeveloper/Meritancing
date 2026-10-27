import Link from "next/link";

export default function CtaBanner({ title, description, cta, href }) {
  return (
    <div className="cta-banner">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={href} className="btn btn-primary">
        {cta}
      </Link>
    </div>
  );
}
