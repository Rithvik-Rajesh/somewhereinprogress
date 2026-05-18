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
        <h1
          className={cn(
            heroTypography.heading,
            "flex flex-col relative z-10",
          )}
        >
          <span className="block text-[clamp(3.5rem,10vw,9rem)] leading-[0.95]">SOMEWHERE IN</span>
          <span className="block text-[clamp(4.5rem,13.5vw,12rem)] leading-[0.95]">PROGRESS</span>
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
