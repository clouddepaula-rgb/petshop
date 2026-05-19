"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    // If window is not defined (SSR), do nothing
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const observerOptions = {
      root: null, // Viewport
      rootMargin: "0px 0px -80px 0px", // Trigger slightly before element is fully in view
      threshold: 0.15, // Trigger when 15% is visible
    };

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          // Once animated, stop observing this element
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Query all reveal elements
    const elementsToReveal = document.querySelectorAll(
      ".reveal-hidden, .reveal-hidden-left, .reveal-hidden-right"
    );

    elementsToReveal.forEach((el) => observer.observe(el));

    // Cleanup function to unobserve
    return () => {
      elementsToReveal.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}
