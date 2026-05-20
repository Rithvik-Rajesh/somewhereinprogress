"use client";

import { motion, useReducedMotion } from "framer-motion";

import { TorchVisual } from "@/src/components/effects/CursorGlow";

type TorchGuideProps = {
  isDismissed?: boolean;
};

export default function TorchGuide({ isDismissed = false }: TorchGuideProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden={isDismissed}
      className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#050403]/58 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: isDismissed ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.36)_52%,rgba(0,0,0,0.72)_100%)]" />

      <div className="relative flex h-[21rem] w-[min(88vw,34rem)] items-center justify-center">
        <motion.div
          className="absolute left-1/2 top-1/2"
          initial={{ opacity: 0, scale: 0.88, x: "-50%", y: "-50%" }}
          animate={
            shouldReduceMotion
              ? { opacity: 1, scale: 1, x: "-50%", y: "-50%" }
              : {
                  opacity: 1,
                  scale: [0.92, 1, 1, 1],
                  x: [
                    "calc(-50% + 0px)",
                    "calc(-50% + 92px)",
                    "calc(-50% + 0px)",
                    "calc(-50% - 92px)",
                    "calc(-50% + 0px)",
                    "calc(-50% + 92px)",
                    "calc(-50% + 0px)",
                    "calc(-50% - 92px)",
                    "calc(-50% + 0px)",
                  ],
                  y: [
                    "calc(-50% + 0px)",
                    "calc(-50% + 0px)",
                    "calc(-50% + 42px)",
                    "calc(-50% + 0px)",
                    "calc(-50% - 42px)",
                    "calc(-50% + 0px)",
                    "calc(-50% + 42px)",
                    "calc(-50% + 0px)",
                    "calc(-50% - 42px)",
                  ],
                }
          }
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 1.2, ease: "easeOut" },
            x: {
              delay: 1.25,
              duration: 5.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              delay: 1.25,
              duration: 5.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <TorchVisual ignitionDelay={0.75} scale={1.28} />
        </motion.div>

        <motion.div
          className="absolute bottom-2 left-1/2 w-full max-w-md -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.25, duration: 1.1, ease: "easeOut" }}
        >
          <p className="font-serif text-2xl italic text-[#f7d6b5] sm:text-3xl">
            Move the torch and discover the unsaid.
          </p>
          <p className="mt-4 text-[0.65rem] uppercase tracking-[0.32em] text-white/38">
            the dark remembers small things
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
