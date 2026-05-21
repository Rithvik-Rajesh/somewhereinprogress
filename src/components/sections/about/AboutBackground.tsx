"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AboutBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#080807]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a0a0a_0%,#10100e_28%,#090908_72%,#050505_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[42vh] bg-[linear-gradient(180deg,rgba(255,151,83,0.16)_0%,rgba(124,82,53,0.08)_34%,transparent_100%)]" />
      <div className="absolute -left-[18vw] top-[8vh] h-[70vh] w-[58vw] bg-[radial-gradient(ellipse_at_center,rgba(190,123,79,0.13)_0%,rgba(190,123,79,0.045)_38%,transparent_72%)] blur-3xl" />
      <div className="absolute right-[-10vw] bottom-[2vh] h-[62vh] w-[50vw] bg-[radial-gradient(ellipse_at_center,rgba(137,126,100,0.09)_0%,rgba(137,126,100,0.03)_42%,transparent_74%)] blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.7'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        aria-hidden
        className="absolute inset-x-[-10%] top-[18%] h-[56vh] bg-[linear-gradient(105deg,transparent_8%,rgba(255,204,151,0.035)_34%,transparent_62%)]"
        animate={
          shouldReduceMotion
            ? undefined
            : { opacity: [0.36, 0.62, 0.36], x: ["-1.5%", "1.5%", "-1.5%"] }
        }
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_52%,transparent_0%,rgba(0,0,0,0.1)_44%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}
