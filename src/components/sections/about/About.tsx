"use client";

import { useRef } from "react";

import Container from "../../layout/Container";
import Section from "../../layout/Section";
import AboutBackground from "./AboutBackground";
import AboutContent from "./AboutContent";
import AboutQuote from "./AboutQuote";
import HiddenFragmentsLayer from "./HiddenFragmentsLayer";

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <Section
      ref={sectionRef}
      id="about"
      className="relative flex min-h-[115vh] cursor-none items-center overflow-hidden py-32 text-white md:min-h-[125vh] md:py-48"
    >
      <AboutBackground />
      <HiddenFragmentsLayer containerRef={sectionRef} />

      <Container className="relative z-20">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-10 lg:gap-8">
          <div className="md:col-span-7 lg:col-span-6">
            <div className="mb-8 flex items-center gap-4 text-[0.68rem] uppercase tracking-[0.28em] text-[#d9a982]/55">
              <span className="h-px w-10 bg-[#d9a982]/28" />
              <span>closer now</span>
            </div>

            <AboutQuote>
              <div className="space-y-6 sm:space-y-8">
                <p>
                  I keep coming back to the same quiet question:
                  <span className="font-serif italic text-[#f4d1ae]">
                    {" "}
                    what does this make someone feel?
                  </span>
                </p>

                <p className="max-w-2xl text-xl font-light text-white/50 sm:text-2xl lg:text-3xl">
                  Not as a slogan. More like a habit. The thing I notice
                  after the first impression has gone quiet.
                </p>
              </div>
            </AboutQuote>
          </div>

          <div className="relative md:col-span-5 lg:col-span-4 lg:col-start-9">
            <div className="absolute -left-8 top-2 hidden h-[82%] w-px bg-gradient-to-b from-[#f0b27a]/22 via-white/8 to-transparent md:block lg:-left-12" />

            <AboutContent>
              <p>
                I like people who pay attention. To tone. To timing. To the
                little shift in someone&apos;s face when a room finally feels safe
                enough to be honest.
              </p>

              <p>
                That is the kind of technology I want to make too. Calm when
                the world is loud. Elegant without performing. Human enough to
                leave space for whoever arrives here next.
              </p>
            </AboutContent>
          </div>
        </div>
      </Container>
    </Section>
  );
}
