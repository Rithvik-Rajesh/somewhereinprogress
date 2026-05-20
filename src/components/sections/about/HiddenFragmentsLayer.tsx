"use client";

import { RefObject, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import CursorGlow from "@/src/components/effects/CursorGlow";
import HiddenFragment from "@/src/components/effects/HiddenFragment";
import { useMouseGlow } from "@/src/components/effects/useMouseGlow";
import TorchGuide from "./TorchGuide";

type HiddenFragmentsLayerProps = {
  containerRef: RefObject<HTMLElement | null>;
};

const fragments = [
  {
    text: "dreaming louder every year.",
    className: "left-[8%] top-[16%]",
    drift: { x: 10, y: -8, duration: 13 },
  },
  {
    text: "music helps.",
    className: "right-[12%] top-[23%]",
    drift: { x: -8, y: -12, duration: 12, delay: 1.2 },
  },
  {
    text: "technology should feel human.",
    className: "left-[54%] top-[42%] hidden sm:block",
    drift: { x: 6, y: 10, duration: 15, delay: 0.5 },
  },
  {
    text: "trying to stay soft.",
    className: "left-[13%] bottom-[27%]",
    drift: { x: 8, y: 9, duration: 14, delay: 2 },
  },
  {
    text: "small details matter.",
    className: "right-[18%] bottom-[19%]",
    drift: { x: -10, y: 6, duration: 16, delay: 0.8 },
  },
  {
    text: "people matter most.",
    className: "left-[37%] bottom-[10%] hidden md:block",
    drift: { x: 7, y: -7, duration: 12, delay: 1.7 },
  },
  {
    text: "late-night thoughts.",
    className: "right-[6%] top-[58%] hidden lg:block",
    drift: { x: -7, y: -9, duration: 17, delay: 2.4 },
  },
];

export default function HiddenFragmentsLayer({
  containerRef,
}: HiddenFragmentsLayerProps) {
  const glow = useMouseGlow(containerRef);
  const [shouldShowGuide, setShouldShowGuide] = useState(false);
  const [hasTakenTorch, setHasTakenTorch] = useState(false);

  useEffect(() => {
    if (hasTakenTorch || shouldShowGuide) return;

    const container = containerRef.current;

    if (!container) return;

    let guideTimer: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          guideTimer = setTimeout(() => {
            setShouldShowGuide(true);
          }, 300);
        } else if (guideTimer) {
          clearTimeout(guideTimer);
          guideTimer = null;
        }
      },
      { threshold: 0.38 },
    );

    observer.observe(container);

    return () => {
      if (guideTimer) clearTimeout(guideTimer);
      observer.disconnect();
    };
  }, [containerRef, hasTakenTorch, shouldShowGuide]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    container.style.cursor = shouldShowGuide || hasTakenTorch ? "none" : "";

    return () => {
      container.style.cursor = "";
    };
  }, [containerRef, hasTakenTorch, shouldShowGuide]);

  useEffect(() => {
    if (hasTakenTorch || !shouldShowGuide) return;

    const handleMove = (event: MouseEvent | PointerEvent) => {
      const container = containerRef.current;

      if (!container) return;

      const rect = container.getBoundingClientRect();
      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (isInside) {
        setHasTakenTorch(true);
        setShouldShowGuide(false);
      }
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [containerRef, hasTakenTorch, shouldShowGuide]);

  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
      <AnimatePresence>
        {shouldShowGuide && !hasTakenTorch && <TorchGuide />}
      </AnimatePresence>

      {hasTakenTorch && <CursorGlow {...glow} />}

      {fragments.map((fragment) => (
        <HiddenFragment
          key={fragment.text}
          className={fragment.className}
          drift={fragment.drift}
          glow={glow}
        >
          {fragment.text}
        </HiddenFragment>
      ))}
    </div>
  );
}
