import { cn } from "@/lib/cn";
import { hero, heroLayers } from "@/styles/layout";
import { heroTypography } from "@/styles/typography";

export default function HeroContent() {
  return (
    <div className={cn(heroLayers.content, "absolute inset-0 flex items-end")}>
      <div
        className={cn(
          hero.padding,
          hero.contentMaxWidth,
          "w-full pb-20 sm:pb-32 md:pb-40 lg:pb-48",
        )}
      >
        <h1 className="font-['Bebas Neue'] relative z-10 flex w-full max-w-none flex-col leading-[0.82] uppercase">
          <span className="origin-left scale-y-[0.95] text-[clamp(2.5rem,6vw,6rem)] font-normal tracking-[-0.02em] text-white/55">
            SOMEWHERE IN
          </span>

          <span className="origin-left scale-x-[1.03] bg-gradient-to-b from-[#dbeafecc] via-[#f8fafccc] to-[#ff9155cc] bg-clip-text text-[clamp(6rem,16vw,15rem)] font-normal tracking-[0.015em] text-transparent drop-shadow-[0_0_25px_rgba(255,180,120,0.08)]">
            PROGRESS
          </span>
        </h1>

        <div className={cn(heroTypography.accentGroup, "border-l-[1px]")}>
          <p className={cn(heroTypography.accent, "opacity-75")}>
            dreaming louder every year.
          </p>
        </div>
      </div>
    </div>
  );
}
