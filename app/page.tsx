import Hero from "@/components/sections/hero";
import About from "@/src/components/sections/about";
import Projects from "@/src/components/sections/projects";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
