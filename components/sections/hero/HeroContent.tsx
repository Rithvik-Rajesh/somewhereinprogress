import { cn } from "@/lib/cn";
import { hero, heroLayers } from "@/styles/layout";
import { heroTypography } from "@/styles/typography";

export default function HeroContent() {
  return (
    <div
      className={cn(
        heroLayers.content,
        "absolute inset-0 flex items-end",
      )}
    >
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
            heroTypography.headingSize,
            "drop-shadow-xl",
          )}
        >
          <span className="block">SOMEWHERE IN</span>
          <span className="block">PROGRESS</span>
        </h1>

        <div className={cn(heroTypography.accentGroup)}>
          <p className={cn(heroTypography.accent, "drop-shadow-md")}>
            dreaming louder every year.
          </p>
        </div>
      </div>
    </div>
  );
}
