"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import type { Project } from "./projectData";

type ExpandableProcessNotesProps = {
  process: Project["process"];
};

export default function ExpandableProcessNotes({
  process,
}: ExpandableProcessNotesProps) {
  const [isOpen, setIsOpen] = useState(false);

  const notes = [
    ["Architecture", process.architecture],
    ["Stack", process.stack],
    ["Failures", process.failures],
    ["Lesson", process.lessons],
  ];

  return (
    <div className="pt-3">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="group inline-flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.28em] text-[#e7b98b]/70 transition-colors duration-500 hover:text-[#f8d2aa]"
        aria-expanded={isOpen}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d9a982]/20 bg-black/20 text-[#f0c49d] transition-colors duration-500 group-hover:border-[#d9a982]/45">
          {isOpen ? <Minus size={13} /> : <Plus size={13} />}
        </span>
        Behind the build
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
            exit={{ opacity: 0, height: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <div className="mt-7 grid gap-5 border-l border-[#d9a982]/18 pl-5">
              {notes.map(([label, value]) => (
                <div key={label}>
                  <p className="mb-2 text-[0.62rem] uppercase tracking-[0.24em] text-white/26">
                    {label}
                  </p>
                  <p className="max-w-xl text-sm leading-7 text-white/48">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
