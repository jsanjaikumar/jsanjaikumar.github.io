import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useLocation } from "react-router-dom";

export default function SmoothScrollWrapper({ children }) {
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);
  const location = useLocation();
  const shouldUseLenis = true;

  useEffect(() => {
    if (!shouldUseLenis) {
      lenisRef.current = null;
      window.lenis = undefined;
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }
    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      lenis.destroy();
    };
  }, [shouldUseLenis]);

  useEffect(() => {
    if (!shouldUseLenis) return;

    if (lenisRef.current && location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        setTimeout(() => {
          lenisRef.current.scrollTo(targetElement, { offset: -80 });
        }, 100);
      }
    }
  }, [location.hash, shouldUseLenis]);

  useEffect(() => {
    if (lenisRef.current) {
      window.lenis = lenisRef.current;
    }
    return () => {
      if (window.lenis === lenisRef.current) {
        window.lenis = undefined;
      }
    };
  }, [shouldUseLenis]);

  return <>{children}</>;
}
