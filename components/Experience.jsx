import { Anton, Inter } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Experience() {
  return (
    <section className={`w-full min-h-screen relative flex flex-col bg-[#111111] text-[#e6e4df] ${inter.className} z-10 px-4 py-20 md:px-8 lg:px-12 md:py-32`}>
      <div className="max-w-[1400px] w-full mx-auto flex flex-col gap-12 md:gap-24">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-[#333] pb-12">
          <h2 className={`${anton.className} text-[10vw] md:text-[6rem] lg:text-[7rem] leading-none tracking-tight uppercase`}>
            Professional <br className="hidden md:block" /> Experience
          </h2>
          
          <div className="max-w-md flex flex-col gap-6 md:pt-4">
            <div className="flex items-start gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest border border-[#333] px-2 py-1 rounded-sm shrink-0">Experience</span>
              <p className="text-sm md:text-base text-gray-400">
                Frustrated because your website neither reflects your brand nor drives growth?
              </p>
            </div>
            <p className="text-sm md:text-base text-gray-300 ml-[68px]">
              I create high-quality web experiences that inspire and bring you new customers in the long run.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="flex flex-col w-full">
          {/* Service Item 1 */}
          <div className="flex flex-col md:flex-row gap-8 py-10 md:py-16 border-b border-[#333] group hover:bg-[#1a1a1a] transition-colors -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 cursor-pointer">
            <span className={`${anton.className} text-4xl md:text-6xl text-gray-600 group-hover:text-[#fcd34d] transition-colors w-24 md:w-48 shrink-0`}>01.</span>
            <div className="flex flex-col md:flex-row gap-6 md:gap-16 w-full items-start md:items-center justify-between">
              <h3 className={`${anton.className} text-4xl md:text-6xl tracking-wide uppercase`}>Design</h3>
              <p className="max-w-sm text-sm text-gray-400 leading-relaxed">
                Every successful website starts with a clear plan. Guided by this plan, I design websites that evoke emotions, build trust, and strategically turn visitors into customers.
              </p>
              <div className="hidden md:block w-12 h-12 rounded-full border border-[#333] flex items-center justify-center group-hover:border-[#fcd34d] group-hover:text-[#fcd34d] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </div>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="flex flex-col md:flex-row gap-8 py-10 md:py-16 border-b border-[#333] group hover:bg-[#1a1a1a] transition-colors -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 cursor-pointer">
            <span className={`${anton.className} text-4xl md:text-6xl text-gray-600 group-hover:text-[#fcd34d] transition-colors w-24 md:w-48 shrink-0`}>02.</span>
            <div className="flex flex-col md:flex-row gap-6 md:gap-16 w-full items-start md:items-center justify-between">
              <h3 className={`${anton.className} text-4xl md:text-6xl tracking-wide uppercase`}>Development</h3>
              <p className="max-w-sm text-sm text-gray-400 leading-relaxed">
                Using modern frameworks like React and Next.js, I build blazing-fast, accessible, and scalable web applications that perform flawlessly across all devices.
              </p>
              <div className="hidden md:block w-12 h-12 rounded-full border border-[#333] flex items-center justify-center group-hover:border-[#fcd34d] group-hover:text-[#fcd34d] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
