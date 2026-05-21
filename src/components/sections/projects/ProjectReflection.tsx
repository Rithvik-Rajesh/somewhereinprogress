"use client";

import { motion } from "framer-motion";

import ExpandableProcessNotes from "./ExpandableProcessNotes";
import type { Project } from "./projectData";

type ProjectReflectionProps = {
  project: Project;
};

export default function ProjectReflection({ project }: ProjectReflectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1.1, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative z-10 flex h-full flex-col justify-center py-10"
    >
      <p className="mb-8 text-[0.68rem] uppercase tracking-[0.32em] text-[#d9a982]/52">
        {project.eyebrow}
      </p>

      <h3 className="max-w-3xl font-serif text-[clamp(2.7rem,5.5vw,6.6rem)] font-normal leading-[0.92] tracking-normal text-white/90">
        {project.title}
      </h3>

      <p className="mt-8 max-w-xl text-sm uppercase tracking-[0.2em] text-white/34">
        {project.subtitle}
      </p>

      <p className="mt-10 max-w-xl text-lg font-light leading-9 text-white/58 sm:text-xl">
        {project.reflection}
      </p>

      <p className="mt-7 max-w-md font-serif text-2xl italic leading-tight text-[#f2c49c]/68">
        {project.accent}
      </p>

      <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3">
        {project.metadata.map((item) => (
          <span
            key={item}
            className="text-[0.62rem] uppercase tracking-[0.22em] text-white/32"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <ExpandableProcessNotes process={project.process} />
      </div>
    </motion.div>
  );
}
