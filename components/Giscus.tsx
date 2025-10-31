"use client";

import { useEffect, useRef } from "react";

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", "gofer-uz/website");
    script.setAttribute("data-repo-id", "R_kgDOQMi58w");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOQMi5884CxSM5");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "1");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "transparent_dark");
    script.setAttribute("data-lang", "uz");
    script.setAttribute("data-loading", "lazy");

    ref.current.appendChild(script);
  }, []);

  return (
    <div className="giscus-wrapper" style={{ marginTop: "2rem" }}>
      <div ref={ref} />
    </div>
  );
}
// copied from website
