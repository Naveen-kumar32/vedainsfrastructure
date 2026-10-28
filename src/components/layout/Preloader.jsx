import { useEffect, useState } from "react";

export default function Preloader({ onDone }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      setDone(true);
      onDone?.();
    };
    const onLoad = () => setTimeout(finish, 500);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    const fallback = setTimeout(finish, 4000); // never block on a slow image
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`preloader ${done ? "is-done" : ""}`} aria-hidden="true">
      <div className="preloader__inner">
        <img src="/images/vs-logo.png" alt="" className="preloader__mark" />
        <div className="preloader__bar"><span /></div>
        <p className="preloader__text">Building excellence</p>
      </div>
    </div>
  );
}
