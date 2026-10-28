export function Eyebrow({ children, light }) {
  return <p className={`eyebrow ${light ? "eyebrow--light" : ""}`}>{children}</p>;
}

/**
 * Section heading: eyebrow + title + optional intro text.
 * variant: "center" | "row" (heading left, children right) | undefined
 */
export default function SectionHead({ eyebrow, title, text, light, variant, children }) {
  const cls = ["section-head", light && "section-head--light", variant && `section-head--${variant}`].filter(Boolean).join(" ");
  const head = (
    <div className="reveal">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className="title">{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
  return (
    <div className={cls}>
      {head}
      {children}
    </div>
  );
}
