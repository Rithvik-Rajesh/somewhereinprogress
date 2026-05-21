"use client";

import { motion, useReducedMotion } from "framer-motion";

const phrases = [
  { text: "people remember feelings first.", className: "left-[7%] top-[18%]" },
  { text: "still redesigning.", className: "right-[11%] top-[28%]" },
  { text: "small details matter.", className: "left-[16%] bottom-[18%]" },
  { text: "quiet systems.", className: "right-[20%] bottom-[12%]" },
  { text: "technology should feel human.", className: "left-[48%] top-[54%] hidden lg:block" },
];

export default function AmbientPhraseLayer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {phrases.map((phrase, index) => (
        <motion.p
          key={phrase.text}
          className={`absolute font-serif text-[clamp(0.85rem,1vw,1.1rem)] italic tracking-normal text-[#d6b08a]/[0.16] ${phrase.className}`}
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, index % 2 === 0 ? -8 : 8, 0] }
          }
          transition={{
            duration: 9 + index,
            delay: index * 0.45,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          {phrase.text}
        </motion.p>
      ))}
    </div>
  );
}
