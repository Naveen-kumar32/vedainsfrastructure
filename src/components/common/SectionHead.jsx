export function Eyebrow({ children, light, center }) {
  return (
    <p className={`eyebrow ${light ? "eyebrow--light" : ""}`}>
      <span className="eyebrow__line" />
      {children}
      {center && <span className="eyebrow__line" />}
    </p>
  );
}

/**
 * Section heading: eyebrow + title.
 * variant: "center" | "row" (title left, children right) | undefined
 */
export default function SectionHead({ eyebrow, title, light, variant, children }) {
  const cls = ["section-head", light && "section-head--light", variant && `section-head--${variant}`].filter(Boolean).join(" ");
  const head = (
    <>
      <div className="reveal"><Eyebrow light={light} center={variant === "center"}>{eyebrow}</Eyebrow></div>
      <h2 className="title reveal">{title}</h2>
    </>
  );
  return (
    <div className={cls}>
      {variant === "row" ? <div>{head}</div> : head}
      {children}
    </div>
  );
}
