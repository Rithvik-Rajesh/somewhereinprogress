"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutContent({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
      className="max-w-md space-y-6 text-base font-light leading-relaxed text-white/60 sm:text-lg sm:leading-loose"
    >
      {children}
    </motion.div>
  );
}
