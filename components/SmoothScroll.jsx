"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

function LenisResizeHelper() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Immediately resize
    lenis.resize();

    // Observe body height changes so any async image/font loads or dynamic sections update Lenis limit
    const ro = new ResizeObserver(() => {
      lenis.resize();
    });

    ro.observe(document.body);

    const timer1 = setTimeout(() => lenis.resize(), 500);
    const timer2 = setTimeout(() => lenis.resize(), 1500);

    return () => {
      ro.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 2.0, smoothTouch: true }}>
      <LenisResizeHelper />
      {children}
    </ReactLenis>
  );
}

