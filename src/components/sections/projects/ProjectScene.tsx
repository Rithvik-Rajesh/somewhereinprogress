"use client";

import ProjectMedia from "./ProjectMedia";
import ProjectReflection from "./ProjectReflection";
import type { Project } from "./projectData";

type ProjectSceneProps = {
  project: Project;
  index: number;
};

export default function ProjectScene({ project, index }: ProjectSceneProps) {
  const mediaAlign = index % 2 === 0 ? "left" : "right";

  return (
    <article className="relative grid min-h-screen items-center gap-14 py-28 md:grid-cols-12 md:gap-10 md:py-36">
      <div className="absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div
        className={`md:col-span-6 lg:col-span-7 ${
          mediaAlign === "right" ? "md:order-2" : ""
        }`}
      >
        <ProjectMedia project={project} align={mediaAlign} />
      </div>

      <div
        className={`md:col-span-6 lg:col-span-5 ${
          mediaAlign === "right" ? "md:order-1 md:pl-4 lg:pl-10" : "md:pr-4 lg:pr-10"
        }`}
      >
        <ProjectReflection project={project} />
      </div>
    </article>
  );
}
