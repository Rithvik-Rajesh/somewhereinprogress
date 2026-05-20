"use client";

import { motion, useReducedMotion } from "framer-motion";

type CursorGlowProps = {
  x: number;
  y: number;
  isInside: boolean;
};

type TorchVisualProps = {
  lit?: boolean;
  ignitionDelay?: number;
  scale?: number;
};

const emberParticles = [
  { x: -10, y: -48, drift: -24, rise: -150, size: 3, delay: 0, duration: 2.2 },
  { x: 0, y: -54, drift: 16, rise: -180, size: 2, delay: 0.28, duration: 2.7 },
  { x: 8, y: -46, drift: 28, rise: -132, size: 2, delay: 0.58, duration: 2.1 },
  { x: -2, y: -58, drift: -12, rise: -210, size: 2, delay: 0.88, duration: 3 },
  { x: 5, y: -50, drift: 22, rise: -164, size: 3, delay: 1.18, duration: 2.45 },
  { x: -7, y: -44, drift: -32, rise: -118, size: 2, delay: 1.48, duration: 2 },
];

export function TorchVisual({
  lit = true,
  ignitionDelay = 0,
  scale = 1,
}: TorchVisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const flameOpacity = lit ? 1 : 0;

  return (
    <div
      className="absolute left-0 top-0"
      style={{ transform: `scale(${scale})`, transformOrigin: "0 0" }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.45 }}
        animate={
          lit
            ? {
                scale: shouldReduceMotion
                  ? 0.92
                  : [0.82, 1.08, 0.92, 1.14, 0.86],
                opacity: shouldReduceMotion
                  ? 0.58
                  : [0.34, 0.82, 0.5, 0.95, 0.42],
              }
            : { opacity: 0, scale: 0.45 }
        }
        transition={{
          delay: ignitionDelay,
          duration: shouldReduceMotion ? 0.6 : 1.35,
          repeat: lit && !shouldReduceMotion ? Infinity : 0,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,184,95,0.33) 0%, rgba(214,92,31,0.18) 24%, rgba(255,191,118,0.06) 48%, transparent 74%)",
        }}
      />

      <motion.div
        className="absolute -left-[13px] -top-[46px] h-12 w-9"
        initial={{ opacity: 0, scale: 0.2, y: 14 }}
        animate={
          lit
            ? shouldReduceMotion
              ? { opacity: 1, scale: 1, y: 0 }
              : {
                  opacity: 1,
                  scale: 1,
                  x: [0, 2, -1, 3, -2, 0],
                  y: [0, -2, 1, -3, 0],
                  rotate: [-7, 6, -3, 8, -5, -7],
                  filter: [
                    "brightness(0.95)",
                    "brightness(1.45)",
                    "brightness(1.08)",
                    "brightness(1.7)",
                    "brightness(1)",
                  ],
                }
            : { opacity: 0, scale: 0.2, y: 14 }
        }
        transition={{
          delay: ignitionDelay,
          duration: shouldReduceMotion ? 0.5 : 0.92,
          repeat: lit && !shouldReduceMotion ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute left-[6px] top-0 h-11 w-7 rounded-[85%_22%_72%_32%] bg-[radial-gradient(circle_at_48%_78%,#fff4b8_0%,#ffd166_24%,#ff7a28_55%,#9f2712_78%,transparent_100%)] blur-[0.2px] drop-shadow-[0_0_20px_rgba(255,120,35,0.95)]"
          animate={
            lit && !shouldReduceMotion
              ? {
                  x: [0, -3, 2, -1, 3, 0],
                  y: [0, -3, 1, -5, -1, 0],
                  rotate: [-8, 10, -5, 7, -10, -8],
                  scaleX: [0.9, 1.14, 0.78, 1.08, 0.95, 0.9],
                  scaleY: [0.95, 1.25, 0.9, 1.34, 1.05, 0.95],
                  opacity: [0.82, 1, 0.78, 1, 0.9, 0.82],
                }
              : undefined
          }
          transition={{ duration: 0.74, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: flameOpacity }}
        />

        <motion.div
          className="absolute left-[13px] top-2 h-9 w-4 rounded-[80%_28%_72%_36%] bg-[radial-gradient(circle_at_50%_80%,#fff9d7_0%,#ffd96f_38%,#ff9233_64%,transparent_100%)] drop-shadow-[0_0_12px_rgba(255,205,96,0.85)]"
          animate={
            lit && !shouldReduceMotion
              ? {
                  x: [0, 3, -2, 2, -1, 0],
                  y: [0, -2, 2, -4, 0],
                  rotate: [6, -11, 8, -6, 10, 6],
                  scaleY: [0.82, 1.26, 0.88, 1.18, 0.9, 0.82],
                  scaleX: [1.08, 0.75, 1.16, 0.82, 1, 1.08],
                  opacity: [0.92, 1, 0.82, 1, 0.9, 0.92],
                }
              : undefined
          }
          transition={{ duration: 0.48, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: flameOpacity }}
        />

        <motion.div
          className="absolute left-[16px] top-5 h-5 w-2.5 rounded-[80%_35%_75%_45%] bg-[radial-gradient(circle_at_50%_82%,#fffde8_0%,#ffe48a_48%,transparent_100%)]"
          animate={
            lit && !shouldReduceMotion
              ? {
                  x: [0, -2, 1, -1, 2, 0],
                  y: [0, -1, 1, -2, 0],
                  rotate: [-4, 8, -7, 5, -3, -4],
                  scaleY: [0.8, 1.2, 0.86, 1.1, 0.82, 0.8],
                  scaleX: [1, 0.82, 1.18, 0.9, 1, 1],
                }
              : undefined
          }
          transition={{ duration: 0.36, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: flameOpacity }}
        />
      </motion.div>

      {lit &&
        !shouldReduceMotion &&
        emberParticles.map((particle) => (
          <motion.span
            key={`${particle.x}-${particle.delay}`}
            className="absolute rounded-full bg-[#ffd08a] shadow-[0_0_8px_rgba(255,139,54,0.9)]"
            style={{
              left: particle.x,
              top: particle.y,
              height: particle.size,
              width: particle.size,
            }}
            animate={{
              x: [0, particle.drift * 0.35, particle.drift],
              y: [0, particle.rise * 0.45, particle.rise],
              opacity: [0, 1, 0.55, 0],
              scale: [0.45, 1.15, 0.7, 0.12],
            }}
            transition={{
              duration: particle.duration,
              delay: ignitionDelay + particle.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}

      <div className="absolute -left-[3px] -top-1 h-[4.6rem] w-2 origin-top rotate-[23deg] overflow-hidden rounded-full bg-[linear-gradient(90deg,#1f1008_0%,#633519_24%,#b86f35_43%,#4b2510_66%,#160b05_100%)] shadow-[0_0_8px_rgba(255,124,51,0.28)]">
        <div className="absolute left-[1px] top-2 h-12 w-px rotate-6 bg-[#f1a85d]/35" />
        <div className="absolute right-[1px] top-4 h-9 w-px -rotate-6 bg-black/28" />
        <div className="absolute left-0 top-5 h-px w-full bg-black/30" />
        <div className="absolute left-0 top-10 h-px w-full bg-[#e18b45]/24" />
        <div className="absolute left-0 top-14 h-px w-full bg-black/24" />
      </div>

      <div className="absolute -left-[7px] -top-2 h-2.5 w-4 rotate-[23deg] rounded-full bg-[linear-gradient(90deg,#170b05,#3a1b0b_35%,#c36f2f_54%,#271107)] shadow-[0_0_12px_rgba(255,116,44,0.55)]" />
    </div>
  );
}

export default function CursorGlow({ x, y, isInside }: CursorGlowProps) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-40 opacity-0"
      animate={{
        x,
        y,
        opacity: isInside ? 0.72 : 0,
      }}
      transition={{
        x: { type: "spring", stiffness: 95, damping: 28, mass: 0.35 },
        y: { type: "spring", stiffness: 95, damping: 28, mass: 0.35 },
        opacity: { duration: 0.55, ease: "easeOut" },
      }}
    >
      <TorchVisual />
    </motion.div>
  );
}
