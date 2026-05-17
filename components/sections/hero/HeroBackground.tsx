import Image from "next/image";

import { cn } from "@/lib/cn";
import { heroLayers } from "@/styles/layout";

export default function HeroBackground() {
  return (
    <div className={cn(heroLayers.background, "overflow-hidden")} aria-hidden>
      <Image
        src="/images/hero/nyc.jpg"
        alt=""
        fill
        priority
        quality={95}
        sizes="100vw"
        className="object-cover object-[center_40%] scale-[1.02] contrast-[1.05] saturate-[1.1]"
      />
      <div className="absolute inset-0 bg-[rgb(10_14_28/0.05)] mix-blend-multiply" />
    </div>
  );
}
