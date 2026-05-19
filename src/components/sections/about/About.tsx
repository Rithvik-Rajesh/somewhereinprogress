"use client"
import React from 'react'
import Section from '../../layout/Section'
import Container from '../../layout/Container'
import AboutBackground from './AboutBackground'
import AboutQuote from './AboutQuote'
import AboutContent from './AboutContent'

export default function About() {
  return (
    <Section id="about" className="min-h-screen flex items-center py-32 md:py-48 relative overflow-hidden">
      <AboutBackground />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="md:col-span-7 lg:col-span-6">
            <AboutQuote>
              <div className="space-y-6 sm:space-y-8">
                <p>
                  I love building things, but my curiosity usually points to how they make us{' '}
                  <span className="italic text-white/50" style={{ fontFamily: 'Georgia, serif' }}>feel.</span>
                </p>
                <p className="text-xl sm:text-2xl lg:text-3xl text-white/50 font-light">
                  The quiet pauses. The small details. The way a good tool just gets out of your way.
                </p>
              </div>
            </AboutQuote>
          </div>

          <div className="md:col-span-5 lg:col-span-4 lg:col-start-9 relative">
            {/* Subtle decorative line for hierarchy */}
            <div className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent -ml-8 lg:-ml-12" />
            
            <AboutContent>
              <p>
                I'm fascinated by the stories we tell through interfaces. 
                How a subtle shift in pacing or a gentle interaction can completely 
                change the mood of someone sitting on the other side of a screen.
              </p>

              <p>
                My goal is never just to ship features. It's to create spaces that feel 
                lighter, calmer, and more human—where ambition is balanced with a deep 
                empathy for the people using them.
              </p>
            </AboutContent>
          </div>

        </div>
      </Container>
    </Section>
  )
}

