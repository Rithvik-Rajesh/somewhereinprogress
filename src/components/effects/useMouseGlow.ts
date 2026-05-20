"use client";

import { RefObject, useEffect, useRef, useState } from "react";

type GlowPosition = {
  x: number;
  y: number;
  isInside: boolean;
};

const RESTING_POSITION: GlowPosition = {
  x: 0,
  y: 0,
  isInside: false,
};

export function useMouseGlow<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
) {
  const target = useRef(RESTING_POSITION);
  const frame = useRef<number | null>(null);
  const [position, setPosition] = useState(RESTING_POSITION);

  useEffect(() => {
    const updatePosition = () => {
      setPosition((current) => ({
        x: current.x + (target.current.x - current.x) * 0.18,
        y: current.y + (target.current.y - current.y) * 0.18,
        isInside: target.current.isInside,
      }));

      frame.current = requestAnimationFrame(updatePosition);
    };

    const handlePointerMove = (event: MouseEvent | PointerEvent) => {
      const container = containerRef.current;

      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const isInside =
        x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

      target.current = { x, y, isInside };
    };

    const handlePointerLeave = () => {
      target.current = {
        ...target.current,
        isInside: false,
      };
    };

    frame.current = requestAnimationFrame(updatePosition);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [containerRef]);

  return position;
}
