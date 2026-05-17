import { cn } from "@/lib/cn";
import { hero } from "@/styles/layout";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroOverlay from "./HeroOverlay";
import HeroDetails from "./HeroDetails";

export default function Hero() {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-[#0a0a0a] text-white",
        hero.height,
        hero.minHeight,
      )}
      aria-label="Somewhere In Progress"
    >
      <HeroBackground />
      <HeroOverlay />
      <HeroDetails />
      <HeroContent />
    </section>
  );
}
