"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutQuote({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className="leading-[1.3] sm:leading-[1.4] select-text"
    >
      <div className="text-3xl font-light tracking-normal text-white/90 sm:text-4xl lg:text-5xl">
        {children}
      </div>
    </motion.div>
  );
}
