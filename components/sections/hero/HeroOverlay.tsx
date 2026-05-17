import { cn } from "@/lib/cn";
import { heroLayers } from "@/styles/layout";

export default function HeroOverlay() {
  return (
    <>
      <div className={cn(heroLayers.overlay)} aria-hidden>
        {/* Subtle film grain */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Global vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(0_0_0/0.2)] via-transparent to-[rgb(0_0_0/0.1)]" />
        
        {/* Center lighting preservation */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgb(0_0_0/0.2)_100%)]" />
        
        {/* Localized radial shadow behind typography (bottom left) */}
        <div className="absolute -bottom-32 -left-32 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_center,rgb(0_0_0/0.6)_0%,transparent_70%)]" />
      </div>

      {/* Bottom fade out to background color */}
      <div className={cn(heroLayers.gradient, "h-48 sm:h-56 md:h-64")} aria-hidden>
        <div className="h-full bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      </div>
    </>
  );
}
