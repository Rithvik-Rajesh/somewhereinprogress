import { cn } from "@/lib/cn";
import { heroLayers } from "@/styles/layout";

export default function HeroOverlay() {
  return (
    <>
      <div className={cn(heroLayers.overlay)} aria-hidden>
        {/* Subtle film grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Global atmospheric haze */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-transparent to-[#0a0a0a]/10 mix-blend-multiply" />
        
        {/* Center lighting preservation */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.25)_100%)] mix-blend-multiply" />
        
        {/* Smooth cinematic darkness on the left side behind typography */}
        <div className="absolute inset-y-0 left-0 w-[60vw] bg-gradient-to-r from-[#050403]/90 via-[#050403]/60 to-transparent pointer-events-none" />
        
        {/* Additional localized deep radial shadow behind typography for extra contrast */}
        <div className="absolute -bottom-[20vh] -left-[20vw] w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,rgba(5,4,3,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-multiply" />
      </div>

      {/* Bottom fade out to background color */}
      <div
        className={cn(heroLayers.gradient, "h-48 sm:h-56 md:h-64")}
        aria-hidden
      >
        <div className="h-full bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      </div>
    </>
  );
}
