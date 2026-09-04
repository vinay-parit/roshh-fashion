import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-black">
      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <About />
      </main>
    </div>
  );
}
