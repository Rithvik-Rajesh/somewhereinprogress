export const hero = {
  height: "h-[95vh]",
  minHeight: "min-h-[32rem]",
  padding: "px-8 sm:px-12 md:px-20 lg:px-32",
  contentMaxWidth: "max-w-5xl",
} as const;

export const heroLayers = {
  background: "absolute inset-0 z-0",
  overlay: "absolute inset-0 z-10 pointer-events-none",
  gradient: "absolute inset-x-0 bottom-0 z-[15] pointer-events-none",
  content: "relative z-20",
} as const;
