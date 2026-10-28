import { Fragment } from "react";
import { tickerItems } from "../../data/services.js";

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems]; // doubled for a seamless loop
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {items.map((t, i) => (
          <Fragment key={i}><span>{t}</span><i /></Fragment>
        ))}
      </div>
    </div>
  );
}
