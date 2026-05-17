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
      <div className="flex justify-end pt-20">
        <div className="flex flex-col items-end gap-1 font-sans text-[10px] sm:text-xs font-medium tracking-widest uppercase text-white/50">
          <span>NYC, {new Date().getFullYear()}</span>
          <span>40.7128° N, 74.0060° W</span>
        </div>
      </div>

      {/* Bottom Section - Scroll Indicator & Accent */}
      <div className="flex w-full items-end justify-between pb-4 sm:pb-8">
        <div className="hidden sm:block max-w-[150px] font-sans text-[10px] font-medium tracking-widest uppercase leading-loose text-white/40">
          <p>An Interactive</p>
          <p>Cinematic Journal</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="font-sans text-[9px] font-semibold tracking-[0.2em] uppercase text-white/40" style={{ writingMode: 'vertical-rl' }}>
            Scroll
          </span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </div>
  );
}
