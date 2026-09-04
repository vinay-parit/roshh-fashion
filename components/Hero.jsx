import Image from "next/image";
import { Anton, Inter } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className={`w-full h-[100dvh] relative flex flex-col bg-[#e6e4df] text-[#111111] ${inter.className} overflow-hidden`}>
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-4 py-4 md:px-8 lg:px-12 md:py-6 shrink-0">
        {/* Logo Icon */}
        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#111111] grid grid-cols-2 gap-[2px] p-[2px] rounded-sm">
          <div className="bg-[#e6e4df] rounded-tl-sm"></div>
          <div className="bg-[#e6e4df] rounded-tr-sm"></div>
          <div className="bg-[#e6e4df] rounded-bl-sm"></div>
          <div className="bg-[#111111]"></div>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-2">
          <button className="px-4 py-1.5 border border-[#111111] text-sm font-bold uppercase hover:bg-[#111111] hover:text-[#e6e4df] transition-colors rounded-sm flex items-center gap-2">
            Services
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <button className="px-4 py-1.5 border border-[#111111] text-sm font-bold uppercase hover:bg-[#111111] hover:text-[#e6e4df] transition-colors rounded-sm">
            Projects
          </button>
          <button className="px-4 py-1.5 border border-[#111111] text-sm font-bold uppercase hover:bg-[#111111] hover:text-[#e6e4df] transition-colors rounded-sm">
            About Me
          </button>
        </div>

        {/* Contact Button */}
        <button className="flex items-center gap-2 md:gap-3 bg-[#111111] text-white px-2 py-1 md:px-3 md:py-1.5 rounded-sm hover:bg-black transition-colors">
          <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-300 rounded-sm overflow-hidden relative">
            <Image src="/hero-final.jpg" alt="Avatar" fill className="object-cover" />
          </div>
          <span className="text-xs md:text-sm font-bold uppercase pr-1 md:pr-2">Contact</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col px-4 md:px-8 lg:px-12 pt-4 md:pt-8 min-h-0">
        
        {/* Huge Heading & Subheading */}
        <div className="max-w-[1400px] shrink-0 flex flex-col gap-4 md:gap-6 lg:gap-8">
          <h1 className={`${anton.className} text-[14vw] md:text-[10vw] lg:text-[8rem] xl:text-[9rem] leading-[0.9] tracking-tight uppercase text-[#111111]`}>
            Developer.<br />
            Designer. who<br />
            crafts <span className="bg-[#fcd34d] px-4 pb-2 -ml-2 inline-block">magic.</span>
          </h1>
          <p className="text-[#555555] font-mono text-[10px] md:text-xs lg:text-sm tracking-tight">
            Web Developer &nbsp;&middot;&nbsp; 5+ years &nbsp;&middot;&nbsp; React & Next.js &nbsp;&middot;&nbsp; UI / UX Design
          </p>
        </div>

        {/* Portfolio Mockup Cards - Absolute positioned to maintain large size without breaking 100vh */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 lg:right-12 w-full max-w-[800px] h-[200px] md:h-[350px] pointer-events-none flex justify-end items-end">
          <div className="relative w-full h-full flex justify-end items-end">
            {/* Back Card */}
            <div className="absolute right-12 md:right-32 bottom-4 md:bottom-12 w-64 md:w-[500px] h-36 md:h-[300px] border-[3px] border-[#111111] rounded-t-lg md:rounded-lg overflow-hidden bg-white shadow-2xl rotate-2 transition-transform hover:rotate-0 hover:z-20 pointer-events-auto">
              <div className="w-full h-5 md:h-8 border-b-[2px] md:border-b-[3px] border-[#111111] flex items-center px-2 md:px-3 bg-gray-50">
                <div className="flex gap-1 md:gap-1.5">
                  <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="relative w-full h-[calc(100%-1.25rem)] md:h-[calc(100%-2rem)]">
                <Image src="/hero-landscape.jpg" alt="Project 1" fill className="object-cover" />
              </div>
            </div>

            {/* Front Card */}
            <div className="absolute right-0 bottom-0 w-64 md:w-[500px] h-36 md:h-[300px] border-[3px] border-[#111111] rounded-t-lg md:rounded-lg overflow-hidden bg-white shadow-2xl -rotate-2 z-10 transition-transform hover:rotate-0 pointer-events-auto">
              <div className="w-full h-5 md:h-8 border-b-[2px] md:border-b-[3px] border-[#111111] flex items-center px-2 md:px-3 bg-gray-50">
                <div className="flex gap-1 md:gap-1.5">
                  <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="relative w-full h-[calc(100%-1.25rem)] md:h-[calc(100%-2rem)]">
                <Image src="/hero-final.jpg" alt="Project 2" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
