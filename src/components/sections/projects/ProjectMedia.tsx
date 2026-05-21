"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { Project } from "./projectData";

type ProjectMediaProps = {
  project: Project;
  align: "left" | "right";
};

const toneStyles: Record<Project["visual"]["tone"], string> = {
  ember:
    "from-[#2a130b] via-[#14100d] to-[#050505] before:bg-[radial-gradient(circle_at_38%_42%,rgba(255,157,85,0.24),transparent_34%)] after:bg-[linear-gradient(130deg,transparent_0%,rgba(234,166,106,0.12)_42%,transparent_62%)]",
  signal:
    "from-[#11130f] via-[#0a0d0c] to-[#050505] before:bg-[radial-gradient(circle_at_62%_35%,rgba(196,169,117,0.18),transparent_36%)] after:bg-[linear-gradient(110deg,transparent_0%,rgba(217,169,130,0.11)_46%,transparent_65%)]",
  nocturne:
    "from-[#0d1014] via-[#08090b] to-[#040404] before:bg-[radial-gradient(circle_at_42%_38%,rgba(119,139,160,0.18),transparent_38%)] after:bg-[linear-gradient(130deg,transparent_0%,rgba(207,166,119,0.1)_44%,transparent_62%)]",
};

export default function ProjectMedia({ project, align }: ProjectMediaProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(14px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`relative min-h-[22rem] overflow-hidden md:min-h-[68vh] ${
        align === "right" ? "md:order-2" : ""
      }`}
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${toneStyles[project.visual.tone]} before:absolute before:inset-0 after:absolute after:inset-0`}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.025, 1],
                filter: ["saturate(0.85)", "saturate(1)", "saturate(0.85)"],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.7'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        className="absolute left-[12%] top-[16%] h-[46%] w-[62%] border border-white/[0.055]"
        animate={
          shouldReduceMotion
            ? undefined
            : { y: [0, -12, 0], opacity: [0.4, 0.7, 0.4] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[14%] right-[10%] h-[32%] w-[45%] border border-[#d9a982]/[0.08]"
        animate={
          shouldReduceMotion
            ? undefined
            : { y: [0, 10, 0], opacity: [0.28, 0.58, 0.28] }
        }
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.18)_44%,rgba(0,0,0,0.72)_100%)]" />

      <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-8">
        <p className="max-w-xs font-serif text-2xl italic leading-tight text-[#f5d0a8]/72 sm:text-3xl">
          {project.visual.phrase}
        </p>
        <span className="hidden text-[0.62rem] uppercase tracking-[0.34em] text-white/26 sm:block">
          memory / {project.id}
        </span>
      </div>
    </motion.div>
  );
}
