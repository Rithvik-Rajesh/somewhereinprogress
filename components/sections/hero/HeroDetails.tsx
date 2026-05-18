import { cn } from "@/lib/cn";
import { hero, heroLayers } from "@/styles/layout";

export default function HeroDetails() {
  return (
    <div
      className={cn(
        heroLayers.content,
        "pointer-events-none absolute inset-0 flex flex-col justify-between",
        hero.padding,
        "py-8 sm:py-10 md:py-12"
      )}
      aria-hidden
    >
      {/* Top Section - Location & Year */}
      <div className="flex justify-end pt-[8vh] sm:pt-[10vh]">
        <div className="flex flex-col items-end gap-1.5 font-sans text-[9px] sm:text-[10px] font-medium tracking-[0.2em] uppercase text-[#d4bd9e]/90">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3.5 h-3.5 opacity-80" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span>NYC, {new Date().getFullYear()}</span>
          </div>
          <span className="opacity-90 pr-1">40.7128° N, 74.0060° W</span>
        </div>
      </div>

      {/* Bottom Section - Scroll Indicator & Accent */}
      <div className="flex w-full items-end justify-between pb-2 sm:pb-4">
        <div className="hidden sm:block font-sans text-[8px] font-medium tracking-[0.25em] uppercase leading-loose text-[#d4bd9e]/80 border-l-[2px] border-[#c47743] pl-3">
          <p>An Interactive</p>
          <p>Cinematic Journal</p>
        </div>

        <div className="flex flex-col items-center gap-2 pr-0">
          <span className="font-sans text-[12px] font-bold tracking-[0.3em] uppercase opacity-60 text-bg-[#fdfbf7]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            Scroll To Explore
          </span>
          <div className="flex flex-col items-center">
            <div className="h-13 w-[1.5px] bg-[#d4bd9e]" />
            <div className="w-[7px] h-[7px] rounded-full bg-[#f7b77e] shadow-[0_0_8px_4px_rgba(196,119,67,0.6)]" />
          </div>        
        </div>
      </div>
    </div>
  );
}
