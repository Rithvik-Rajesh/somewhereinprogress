export type Project = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  reflection: string;
  accent: string;
  metadata: string[];
  process: {
    architecture: string;
    stack: string;
    failures: string;
    lessons: string;
  };
  visual: {
    tone: "ember" | "signal" | "nocturne";
    phrase: string;
  };
};

export const projects: Project[] = [
  {
    id: "recovery",
    eyebrow: "01 / care systems",
    title: "Helping recovery feel less lonely.",
    subtitle:
      "Gamified rehabilitation system using motion sensors and gesture tracking.",
    reflection:
      "I became obsessed with how encouragement changes consistency. I wanted recovery to feel less clinical and more human, like someone was quietly noticing the effort.",
    accent: "encouragement changes the body differently.",
    metadata: ["Motion sensors", "Gesture tracking", "Rehab UX", "Feedback loops"],
    process: {
      architecture:
        "Sensor input is translated into simple movement states, then scored through a gentle progression system built around consistency instead of perfection.",
      stack:
        "TypeScript, realtime gesture processing, lightweight state machines, motion-aware UI patterns.",
      failures:
        "The early versions felt too much like a game. The redesign softened the language, slowed the rewards, and made progress feel earned without pressure.",
      lessons:
        "People do not need technology to cheer loudly. Sometimes they just need it to stay present.",
    },
    visual: {
      tone: "ember",
      phrase: "keep going, softly.",
    },
  },
  {
    id: "city-memory",
    eyebrow: "02 / cinematic mapping",
    title: "Turning places into emotional coordinates.",
    subtitle:
      "A travel journal experiment for saving atmosphere, not just locations.",
    reflection:
      "Maps usually remember where you went. I kept wondering what it would look like if they remembered how a place held you for a moment.",
    accent: "some cities become weather inside you.",
    metadata: ["NYC", "Photography", "Spatial memory", "Personal archives"],
    process: {
      architecture:
        "Entries are organized around place, image, time, and feeling, allowing the same location to become different memories across visits.",
      stack:
        "Next.js, structured content, image metadata, atmospheric transitions, future sound-ready hooks.",
      failures:
        "The first direction over-explained every memory. The better version trusted silence, image pacing, and smaller fragments of language.",
      lessons:
        "A quiet interface can make memory feel more honest than a perfectly labeled archive.",
    },
    visual: {
      tone: "nocturne",
      phrase: "somewhere between streetlight and memory.",
    },
  },
  {
    id: "human-tools",
    eyebrow: "03 / calm technology",
    title: "Making interfaces that lower the temperature.",
    subtitle:
      "Interaction studies for tools that feel calm, elegant, and emotionally aware.",
    reflection:
      "I keep returning to the same design problem: how do you make technology useful without making people feel managed by it?",
    accent: "quiet systems can still be powerful.",
    metadata: ["Interaction design", "Motion language", "AI-ready systems", "Human tools"],
    process: {
      architecture:
        "Reusable motion primitives, content-first layouts, and low-friction interaction states designed to stay out of the user's way.",
      stack:
        "React, Framer Motion, Tailwind systems, component composition, accessibility-first interaction patterns.",
      failures:
        "A few prototypes became too futuristic. Pulling them back toward warmth, language, and restraint made them feel more alive.",
      lessons:
        "The best interface sometimes feels like a good room: calm enough for people to think clearly.",
    },
    visual: {
      tone: "signal",
      phrase: "technology should feel human.",
    },
  },
];
