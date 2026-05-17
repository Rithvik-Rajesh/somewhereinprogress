import { cn } from "@/lib/cn";
import { heroLayers } from "@/styles/layout";

export default function HeroOverlay() {
  return (
    <>
      <div className={cn(heroLayers.overlay)} aria-hidden>
        {/* Subtle top/global vignette to draw eye to center */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(0_0_0/0.4)] via-transparent to-[rgb(0_0_0/0.5)]" />
        
        {/* Soft radial to preserve the center city lights */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgb(0_0_0/0.25)_100%)]" />
        
        {/* Left side soft gradient to provide a bit of backing for left-aligned typography */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[rgb(0_0_0/0.5)] via-[rgb(0_0_0/0.2)] to-transparent" />
      </div>

      {/* Bottom fade out to background color */}
      <div className={cn(heroLayers.gradient, "h-48 sm:h-56 md:h-64")} aria-hidden>
        <div className="h-full bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
      </div>
    </>
  );
}
