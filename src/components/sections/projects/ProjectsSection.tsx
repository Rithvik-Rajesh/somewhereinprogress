"use client";

import Container from "@/src/components/layout/Container";
import Section from "@/src/components/layout/Section";

import AmbientPhraseLayer from "./AmbientPhraseLayer";
import ProjectScene from "./ProjectScene";
import { projects } from "./projectData";

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,#0d0c0b_18%,#070707_46%,#050505_100%)]" />
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#080807] via-[#0a0807]/85 to-transparent" />
      <div className="absolute -left-[20vw] top-[18vh] h-[80vh] w-[55vw] bg-[radial-gradient(ellipse_at_center,rgba(181,113,68,0.1)_0%,rgba(181,113,68,0.028)_42%,transparent_72%)] blur-3xl" />
      <div className="absolute right-[-18vw] top-[120vh] h-[90vh] w-[48vw] bg-[radial-gradient(ellipse_at_center,rgba(181,149,108,0.08)_0%,rgba(181,149,108,0.026)_44%,transparent_76%)] blur-3xl" />

      <AmbientPhraseLayer />

      <Container className="relative z-10">
        <div className="flex min-h-[72vh] items-end pb-20 pt-36 md:pt-44">
          <div>
            <p className="mb-8 flex items-center gap-4 text-[0.68rem] uppercase tracking-[0.32em] text-[#d9a982]/52">
              <span className="h-px w-12 bg-[#d9a982]/26" />
              Projects
            </p>
            <h2 className="max-w-5xl font-serif text-[clamp(3.8rem,8vw,9rem)] font-normal leading-[0.88] tracking-normal text-white/90">
              Things I kept thinking about.
            </h2>
            <p className="mt-9 max-w-2xl text-xl font-light leading-9 text-white/48">
              Not a gallery of outcomes. More like rooms left open: places
              where care, curiosity, failure, and technology kept circling the
              same human questions.
            </p>
          </div>
        </div>

        <div>
          {projects.map((project, index) => (
            <ProjectScene key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
