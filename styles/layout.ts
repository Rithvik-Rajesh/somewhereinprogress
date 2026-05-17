export const hero = {
  height: "h-[95vh]",
  minHeight: "min-h-[32rem]",
  padding: "px-6 sm:px-10 md:px-14 lg:px-20",
  contentMaxWidth: "max-w-4xl",
} as const;

export const heroLayers = {
  background: "absolute inset-0 z-0",
  overlay: "absolute inset-0 z-10 pointer-events-none",
  gradient: "absolute inset-x-0 bottom-0 z-[15] pointer-events-none",
  content: "relative z-20",
} as const;
