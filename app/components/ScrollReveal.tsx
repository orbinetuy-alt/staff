"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!("IntersectionObserver" in window) || reduceMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("reveal-enabled");
    elements.forEach((element) => element.classList.remove("is-visible"));

    const mobileViewport = window.matchMedia("(max-width: 560px)").matches;
    const tabletViewport = window.matchMedia("(max-width: 980px)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        // On mobile the same cards become considerably taller. A lower
        // threshold prevents Mobile Safari from skipping their entrance when
        // only a narrow portion of the element fits in the viewport.
        threshold: mobileViewport ? 0.025 : tabletViewport ? 0.07 : 0.14,
        rootMargin: mobileViewport ? "0px 0px -24px 0px" : "0px 0px -6% 0px",
      },
    );

    // Wait for the hidden state to be painted before observing. Without this,
    // a restored route can become visible again in the same frame and skip
    // the transition entirely.
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        elements.forEach((element) => observer.observe(element));
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
