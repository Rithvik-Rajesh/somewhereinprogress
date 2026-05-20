"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type GlowPosition = {
  x: number;
  y: number;
  isInside: boolean;
};

type HiddenFragmentProps = {
  children: string;
  className?: string;
  glow: GlowPosition;
  drift?: {
    x?: number;
    y?: number;
    duration?: number;
    delay?: number;
  };
};

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export default function HiddenFragment({
  children,
  className = "",
  glow,
  drift = {},
}: HiddenFragmentProps) {
  const fragmentRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const centerRef = useRef({ x: 0, y: 0 });
  const [reveal, setReveal] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const measureFragment = () => {
      const fragment = fragmentRef.current;

      if (!fragment) return;

      const rect = fragment.getBoundingClientRect();
      const parentRect = fragment.offsetParent?.getBoundingClientRect();

      if (!parentRect) return;

      centerRef.current = {
        x: rect.left - parentRect.left + rect.width / 2,
        y: rect.top - parentRect.top + rect.height / 2,
      };
    };

    measureFragment();
    window.addEventListener("resize", measureFragment);
    window.addEventListener("scroll", measureFragment, { passive: true });

    return () => {
      window.removeEventListener("resize", measureFragment);
      window.removeEventListener("scroll", measureFragment);
    };
  }, []);

  useEffect(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      if (!glow.isInside) {
        setReveal(0);
        return;
      }

      const { x, y } = centerRef.current;
      const distance = Math.hypot(glow.x - x, glow.y - y);

      const nextReveal = clamp(1 - (distance - 90) / 360, 0, 1);

      setReveal(nextReveal);
    });

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [glow.x, glow.y, glow.isInside]);

  return (
    <motion.div
      ref={fragmentRef}
      aria-hidden
      className={`pointer-events-none absolute select-none whitespace-nowrap font-serif text-[clamp(0.9rem,1.2vw,1.35rem)] italic tracking-normal text-[#f8dfc1] will-change-transform ${className}`}
      animate={
        {
          opacity: reveal * 0.92,
          filter: `blur(${14 - reveal * 14}px)`,
          textShadow: `0 0 ${6 + reveal * 28}px rgba(255,178,111,${
            reveal * 0.44
          })`,
        }
      }
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.span
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, drift.x ?? 8, 0],
                y: [0, drift.y ?? -10, 0],
              }
        }
        transition={{
          duration: drift.duration ?? 11,
          delay: drift.delay ?? 0,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
}
