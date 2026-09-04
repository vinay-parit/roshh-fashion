import Hero from "@/components/Hero";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-black">
      <main className="relative">
        <Hero />
        <Experience />
      </main>
    </div>
  );
}
