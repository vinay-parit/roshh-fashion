"use client";

import { Anton, Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const projects = [
  { year: "2026", category: "SHOPPING GUIDE", title: "GERMAN MUSEUMS ASSOCIATION", image: "/work-image/img_01.png" },
  { year: "2026", category: "PSYCHOLOGIST", title: "ALICE TOSCHI", image: "/work-image/img_02.png" },
  { year: "2026", category: "BIKES", title: "THÖMUS", image: "/work-image/img_03.jpeg" },
  { year: "2026", category: "RESTAURANT", title: "ANATOLYA FOOD", image: "/work-image/img_04.png" },
  { year: "2025", category: "LANDSCAPING", title: "SB SOLARTECH", image: "/work-image/img_05.jpeg" },
  { year: "2025", category: "FINANCES", title: "PETER BERATUNGEN", image: "/work-image/img_06.png" },
];

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <section className={`w-full relative flex flex-col bg-[#e6e4df] text-[#111111] ${inter.className} z-20 px-4 py-20 md:px-8 lg:px-12 md:py-32`}>
      <div className="max-w-[1400px] w-full mx-auto flex flex-col gap-12 md:gap-24">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-black/10 pb-8 md:pb-12 gap-8">
          <h2 className={`${anton.className} text-[96px] leading-none tracking-tight uppercase`}>
            Projects
          </h2>
          <div className="flex items-start gap-4 max-w-sm mb-2">
            <span className="bg-black/10 px-2 py-1 text-xs font-bold tracking-widest uppercase rounded-sm">Portfolio</span>
            <p className="text-sm font-medium leading-relaxed">
              I've already helped clients from various industries move their businesses forward.
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div className="flex flex-col border-t border-black/10 mt-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative cursor-pointer"
            >
              {/* === DESKTOP LAYOUT (Hidden on mobile) === */}
              <div className="hidden md:flex flex-row items-center justify-between border-b border-black/10 py-8 px-6 lg:px-10 transition-all duration-500 hover:bg-[#111111] hover:text-[#e6e4df] hover:border-transparent hover:rounded-2xl hover:shadow-2xl">
                {/* Left Text */}
                <div className="w-[20%] relative z-10">
                  <span className="font-mono text-sm tracking-widest uppercase text-gray-500 group-hover:text-gray-400 transition-colors">
                    {project.year}, {project.category}
                  </span>
                </div>

                {/* Hover Image Preview */}
                <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-36 h-20 lg:w-44 lg:h-24 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none z-10 shadow-lg">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>

                {/* Center Title */}
                <div className="w-[70%] relative z-10 flex items-center group-hover:pl-[240px] lg:group-hover:pl-[260px] transition-all duration-500">
                  <h3 className={`${anton.className} text-[60px] leading-none uppercase tracking-wide`}>
                    {project.title}
                  </h3>
                </div>

                {/* Right Arrow */}
                <div className="w-[10%] flex justify-end relative z-10">
                  <div className="text-black group-hover:text-white transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                  </div>
                </div>
              </div>

              {/* === MOBILE LAYOUT (Hidden on desktop) === */}
              <div className="flex md:hidden flex-col gap-6 py-8 border-b border-black/10">
                {/* Top Row: Title & Arrow */}
                <div className="flex justify-between items-start gap-4">
                  <h3 className={`${anton.className} text-[40px] leading-[0.9] uppercase tracking-wide text-[#111111]`}>
                    {project.title}
                  </h3>
                  <div className="text-black mt-2 shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                  </div>
                </div>
                
                {/* Middle: Always visible Image */}
                <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                  
                  {/* Live Website Button */}
                  <div className="absolute top-3 right-3 bg-[#e6e4df]/90 backdrop-blur-md px-3 py-1.5 rounded-sm flex items-center gap-1.5 shadow-md">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                    <span className="font-bold text-[10px] uppercase tracking-wider text-[#111111]">
                      Live Website
                    </span>
                  </div>
                </div>

                {/* Bottom: Year and Category */}
                <div className="font-mono text-sm tracking-widest uppercase text-gray-700 font-medium">
                  {project.year}, {project.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Cursor Tooltip */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="fixed top-0 left-0 pointer-events-none z-50 bg-[#e6e4df] text-black px-3 py-1.5 rounded-md flex items-center gap-2 shadow-lg"
            style={{
              x: mousePosition.x + 15,
              y: mousePosition.y + 15,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap">LIVE WEBSITE</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
