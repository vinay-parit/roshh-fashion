"use client";

import { Anton, Inter } from "next/font/google";
import { motion } from "framer-motion";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Experience() {
  return (
    <section className={`w-full min-h-screen relative flex flex-col bg-[#111111] text-[#e6e4df] ${inter.className} z-10 px-4 pt-20 pb-0 md:px-8 lg:px-12 md:pt-32 md:pb-0`}>
      <div className="max-w-[1400px] w-full mx-auto flex flex-col gap-12 md:gap-24 relative">
        
        {/* Top Header */}
        <div className="flex flex-col border-b border-[#333] pb-12 md:pb-20">
          <h2 className={`${anton.className} text-[12vw] md:text-[7vw] lg:text-[6rem] leading-none tracking-tight uppercase`}>
            Professional Experience
          </h2>
          <p className="max-w-xl mx-auto mt-8 md:mt-16 text-gray-400 text-[20px] font-normal leading-relaxed text-left">
            Over the past 5+ years, I've built robust web applications for ambitious brands. I bridge the gap between design and engineering to deliver standout products.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col w-full relative">
          
          {/* Experience Item 1 */}
          <div className="sticky top-[10vh] md:top-[12vh] z-[1] bg-[#111111] border-b border-[#333] group -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 cursor-pointer shadow-[0_-10px_30px_rgba(17,17,17,1)] h-[112vh] md:h-[115vh]">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex pt-6 pb-24 md:pt-8 md:pb-32 items-start justify-center h-full"
            >
              {/* Number - Absolute Left */}
              <span className={`${anton.className} absolute left-4 md:left-12 top-6 md:top-8 text-4xl md:text-6xl text-gray-600 group-hover:text-[#F54B25] transition-colors`}>01.</span>
              
              {/* Centered Content Block */}
              <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto items-start text-left relative z-10 px-0 md:px-0">
                <div className="flex flex-col gap-2 md:gap-3">
                  <h3 className={`${anton.className} text-4xl md:text-6xl tracking-wide uppercase`}>1% Club</h3>
                  <h4 className="text-sm md:text-base tracking-widest text-[#F54B25] font-bold uppercase">LEAD VISUAL DESIGNER</h4>
                </div>
                <p className="w-full text-gray-400 text-[20px] font-normal leading-relaxed mt-4">
                  Designed intuitive web, mobile, and finance product experiences from wireframes to polished user interfaces. Built and maintained scalable Figma design systems while collaborating with cross-functional teams. Created high-impact marketing assets and landing pages that aligned user needs with business and brand goals.
                </p>
              </div>
              
              {/* Arrow - Absolute Right */}
              <div className="hidden md:flex absolute right-12 top-6 md:top-8 w-12 h-12 rounded-full border border-[#333] items-center justify-center group-hover:border-[#F54B25] group-hover:text-[#F54B25] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </div>
            </motion.div>
          </div>

          {/* Experience Item 2 */}
          <div className="sticky top-[19vh] md:top-[22vh] z-[2] bg-[#111111] border-b border-[#333] group -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 cursor-pointer shadow-[0_-10px_30px_rgba(17,17,17,1)] h-[103vh] md:h-[105vh]">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex pt-6 pb-24 md:pt-8 md:pb-32 items-start justify-center h-full"
            >
              {/* Number - Absolute Left */}
              <span className={`${anton.className} absolute left-4 md:left-12 top-6 md:top-8 text-4xl md:text-6xl text-gray-600 group-hover:text-[#F54B25] transition-colors`}>02.</span>
              
              {/* Centered Content Block */}
              <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto items-start text-left relative z-10 px-0 md:px-0">
                <div className="flex flex-col gap-2 md:gap-3">
                  <h3 className={`${anton.className} text-4xl md:text-6xl tracking-wide uppercase`}>Saleshandy</h3>
                  <h4 className="text-sm md:text-base tracking-widest text-[#F54B25] font-bold uppercase">DESIGN FREELANCER</h4>
                </div>
                <p className="w-full text-gray-400 text-[20px] font-normal leading-relaxed mt-4">
                  Created icons, banners, web graphics, and social media creatives aligned with the brand identity. Designed scalable UI elements and micro-illustrations for intuitive product experiences. Collaborated with cross-functional teams to deliver consistent designs across digital platforms.
                </p>
              </div>
              
              {/* Arrow - Absolute Right */}
              <div className="hidden md:flex absolute right-12 top-6 md:top-8 w-12 h-12 rounded-full border border-[#333] items-center justify-center group-hover:border-[#F54B25] group-hover:text-[#F54B25] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </div>
            </motion.div>
          </div>

          {/* Experience Item 3 */}
          <div className="sticky top-[28vh] md:top-[32vh] z-[3] bg-[#111111] border-b border-[#333] group -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 cursor-pointer shadow-[0_-10px_30px_rgba(17,17,17,1)] h-[94vh] md:h-[95vh]">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex pt-6 pb-24 md:pt-8 md:pb-32 items-start justify-center h-full"
            >
              {/* Number - Absolute Left */}
              <span className={`${anton.className} absolute left-4 md:left-12 top-6 md:top-8 text-4xl md:text-6xl text-gray-600 group-hover:text-[#F54B25] transition-colors`}>03.</span>
              
              {/* Centered Content Block */}
              <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto items-start text-left relative z-10 px-0 md:px-0">
                <div className="flex flex-col gap-2 md:gap-3">
                  <h3 className={`${anton.className} text-4xl md:text-6xl tracking-wide uppercase`}>Unacademy</h3>
                  <h4 className="text-sm md:text-base tracking-widest text-[#F54B25] font-bold uppercase">CREATIVE DESIGNER</h4>
                </div>
                <p className="w-full text-gray-400 text-[20px] font-normal leading-relaxed mt-4">
                  Designed marketing creatives, banners, thumbnails, illustrations, icons, and UI assets across digital platforms. Collaborated with cross-functional teams while ensuring consistency with Unacademy’s brand guidelines. Contributed to NextLevel by Unacademy, designing product UI, onboarding flows, and marketing visuals.
                </p>
              </div>
              
              {/* Arrow - Absolute Right */}
              <div className="hidden md:flex absolute right-12 top-6 md:top-8 w-12 h-12 rounded-full border border-[#333] items-center justify-center group-hover:border-[#F54B25] group-hover:text-[#F54B25] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </div>
            </motion.div>
          </div>

          {/* Experience Item 4 */}
          <div className="sticky top-[37vh] md:top-[42vh] z-[4] bg-[#111111] border-b border-[#333] group -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 cursor-pointer shadow-[0_-10px_30px_rgba(17,17,17,1)] h-[85vh]">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex pt-6 pb-24 md:pt-8 md:pb-32 items-start justify-center h-full"
            >
              {/* Number - Absolute Left */}
              <span className={`${anton.className} absolute left-4 md:left-12 top-6 md:top-8 text-4xl md:text-6xl text-gray-600 group-hover:text-[#F54B25] transition-colors`}>04.</span>
              
              {/* Centered Content Block */}
              <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto items-start text-left relative z-10 px-0 md:px-0">
                <div className="flex flex-col gap-2 md:gap-3">
                  <h3 className={`${anton.className} text-4xl md:text-6xl tracking-wide uppercase`}>Boult Audio</h3>
                  <h4 className="text-sm md:text-base tracking-widest text-[#F54B25] font-bold uppercase">DESIGN INTERN</h4>
                </div>
                <p className="w-full text-gray-400 text-[20px] font-normal leading-relaxed mt-4">
                  Collaborated with cross-functional teams to create campaigns aligned with brand and business goals. Designed visually engaging creatives while maintaining consistency across digital and marketing assets. Generated creative concepts and product advertisements that strengthened brand identity and supported sales.
                </p>
              </div>
              
              {/* Arrow - Absolute Right */}
              <div className="hidden md:flex absolute right-12 top-6 md:top-8 w-12 h-12 rounded-full border border-[#333] items-center justify-center group-hover:border-[#F54B25] group-hover:text-[#F54B25] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
