"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type SectionMarker = {
  label: string;
  id?: string;
  fallback: number;
};

const sectionMarkers: SectionMarker[] = [
  { label: "INTRO", fallback: 0 },
  { label: "THOUGHTS", id: "about", fallback: 0.34 },
  { label: "PROJECTS", id: "projects", fallback: 0.68 },
  { label: "JOURNAL", id: "journal", fallback: 0.84 },
  { label: "PLAYGROUND", id: "playground", fallback: 0.96 },
];

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export default function CinematicScrollRail() {
  const shouldReduceMotion = useReducedMotion();
  const targetProgress = useRef(0);
  const frameRef = useRef<number | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [progress, setProgress] = useState(0);
  const [markerPositions, setMarkerPositions] = useState(
    sectionMarkers.map((marker) => marker.fallback),
  );
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const measureMarkers = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollable <= 0) return;

      setMarkerPositions(
        sectionMarkers.map((marker) => {
          if (!marker.id) return marker.fallback;

          const section = document.getElementById(marker.id);

          if (!section) return marker.fallback;

          return clamp(section.offsetTop / scrollable, 0, 1);
        }),
      );
    };

    const updateTarget = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      targetProgress.current =
        scrollable > 0 ? clamp(window.scrollY / scrollable, 0, 1) : 0;

      setIsScrolling(true);

      if (idleTimer.current) clearTimeout(idleTimer.current);

      idleTimer.current = setTimeout(() => {
        setIsScrolling(false);
      }, 900);
    };

    const animateProgress = () => {
      setProgress((current) => {
        const ease = shouldReduceMotion ? 1 : 0.095;
        const next = current + (targetProgress.current - current) * ease;

        if (Math.abs(next - targetProgress.current) < 0.0008) {
          return targetProgress.current;
        }

        return next;
      });

      frameRef.current = requestAnimationFrame(animateProgress);
    };

    measureMarkers();
    updateTarget();
    frameRef.current = requestAnimationFrame(animateProgress);

    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", measureMarkers);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", measureMarkers);
    };
  }, [shouldReduceMotion]);

  const labelsVisible = isScrolling || isHovering;
  const emberTop = `${progress * 100}%`;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 right-2 z-[60] hidden w-16 items-center justify-end md:flex lg:right-5"
    >
      <div
        className="pointer-events-auto relative h-[70vh] min-h-96 w-14"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="absolute right-3 top-0 h-full w-px bg-linear-to-b from-transparent via-[#c9a482]/[0.18] to-transparent" />
        <div className="absolute right-3 top-0 h-full w-px bg-linear-to-b from-transparent via-white/[0.035] to-transparent blur-[1px]" />

        <motion.div
          className="absolute right-3 h-20 w-px -translate-y-full bg-gradient-to-t from-[#e6a267]/18 via-[#e6a267]/8 to-transparent"
          animate={{ top: emberTop, opacity: isScrolling ? 1 : 0.48 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        />

        <motion.div
          className="absolute right-3 h-24 w-8 -translate-y-1/2 translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,161,83,0.18)_0%,rgba(255,161,83,0.07)_34%,transparent_72%)] blur-xl"
          animate={{
            top: emberTop,
            opacity: isHovering ? 0.9 : isScrolling ? 0.72 : 0.42,
            scale: shouldReduceMotion ? 1 : [0.92, 1.08, 0.96, 1.04, 0.92],
          }}
          transition={{
            top: { duration: 0.28, ease: "easeOut" },
            opacity: { duration: 0.4 },
            scale: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute right-3 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#ffd3a1] shadow-[0_0_9px_3px_rgba(255,139,65,0.42),0_0_26px_8px_rgba(255,139,65,0.12)]"
          animate={{
            top: emberTop,
            opacity: shouldReduceMotion ? 0.82 : [0.72, 1, 0.8, 0.94, 0.72],
            scale: isHovering
              ? 1.18
              : shouldReduceMotion
                ? 1
                : [0.94, 1.1, 0.98, 1.04, 0.94],
            y: shouldReduceMotion || isScrolling ? "-50%" : ["-50%", "-58%", "-45%", "-50%"],
          }}
          transition={{
            top: { duration: 0.28, ease: "easeOut" },
            opacity: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/75" />
        </motion.div>

        {sectionMarkers.map((marker, index) => (
          <motion.div
            key={marker.label}
            className="absolute right-3 flex translate-x-1/2 items-center"
            style={{ top: `${markerPositions[index] * 100}%` }}
            animate={{
              opacity: labelsVisible ? 1 : 0,
              x: labelsVisible ? 0 : 8,
            }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <span className="h-1 w-1 rounded-full bg-[#d9a982]/35" />
            <span className="ml-3 whitespace-nowrap text-[0.58rem] uppercase tracking-[0.28em] text-[#c9a482]/45">
              {marker.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
