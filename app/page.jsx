import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-black">
      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Cta />
        <Footer />
      </main>
    </div>
  );
}
