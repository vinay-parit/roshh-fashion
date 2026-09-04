"use client";

import { useRef, useEffect, useState } from "react";
import { Anton, Inter } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function About() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Dynamic box sizes based on screen width
  const startWidth = isMobile ? "90vw" : "50vw";
  const startHeight = isMobile ? "40vh" : "50vh";

  const width = useTransform(scrollYProgress, [0, 0.4], [startWidth, "100vw"]);
  const height = useTransform(scrollYProgress, [0, 0.4], [startHeight, "100vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["12px", "0px"]);

  // Content fade-in animations
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.6], [40, 0]);

  return (
    <section ref={containerRef} className="h-[300vh] relative bg-[#e6e4df] z-30">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* The Expanding Black Box */}
        <motion.div 
          className="bg-[#111111] flex items-center justify-center relative"
          style={{ width, height, borderRadius }}
        >
          {/* Fading Content Container */}
          <motion.div 
            className="w-full max-w-[1200px] px-6 md:px-12"
            style={{ opacity: contentOpacity, y: contentY }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-12 lg:gap-x-20 gap-y-10 items-center justify-items-center md:justify-items-start">
              
              {/* Row 1, Col 1: Profile Image */}
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-3xl overflow-hidden relative shadow-xl">
                <Image src="/hero-final.jpg" alt="Profile" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              
              {/* Row 1, Col 2: Title */}
              <div>
                <h2 className={`${anton.className} text-[60px] md:text-[90px] lg:text-[120px] leading-[0.9] uppercase text-[#e6e4df] tracking-wide text-center md:text-left`}>
                  HEY — I'M<br/>VINAY
                </h2>
              </div>

              {/* Row 2, Col 1: Pill */}
              <div className="md:justify-self-center self-start pt-2 hidden md:block">
                <div className="px-4 py-2 border border-white/20 rounded-md text-white text-xs font-bold tracking-widest uppercase">
                  About Me
                </div>
              </div>

              {/* Row 2, Col 2: Description */}
              <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                {/* Mobile Pill (shown only on mobile) */}
                <div className="md:hidden px-4 py-2 border border-white/20 rounded-md text-white text-xs font-bold tracking-widest uppercase">
                  About Me
                </div>
                <p className="text-gray-400 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl font-light">
                  A good website is more than a pretty appearance. It creates clarity, builds trust, and attracts new customers. That's exactly my goal in every project.
                </p>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
