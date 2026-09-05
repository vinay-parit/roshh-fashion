"use client";

import { Anton, Inter } from "next/font/google";
import Image from "next/image";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Cta() {
  return (
    <section className="w-full bg-[#e6e4df] pt-12 md:pt-20 pb-0 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto bg-[#111111] rounded-[24px] md:rounded-[32px] flex flex-col items-center justify-center py-16 md:py-24 px-6 text-center shadow-xl relative overflow-hidden">
        
        {/* Subtle noise texture could go here if needed, keeping it solid #111111 for now to match exactly */}
        
        <p className={`${inter.className} text-gray-400 text-lg md:text-xl mb-6 md:mb-8 tracking-wide`}>
          Let's talk!
        </p>
        
        {/* Title: 4 lines on mobile, 2 lines on desktop */}
        <h2 className={`${anton.className} text-[60px] md:text-[96px] leading-[0.9] uppercase text-[#e6e4df] tracking-wide mb-10 md:mb-12 max-w-[90%] md:max-w-4xl`}>
          READY FOR <br className="md:hidden" />YOUR <br className="md:hidden" />NEW <br className="md:hidden" /><span className="hidden md:inline"></span>WEBSITE?
        </h2>
        
        <button className="flex items-center gap-3 md:gap-4 bg-[#e6e4df] text-[#111111] rounded-[30px] md:rounded-[28px] pl-2 pr-6 md:pr-8 py-2 hover:scale-105 transition-transform duration-300">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden relative">
            <Image src="/hero-final.jpg" alt="Vinay" fill className="object-cover grayscale" />
          </div>
          <span className={`${anton.className} text-xl md:text-2xl tracking-wider uppercase pt-1`}>
            BOOK A CALL
          </span>
        </button>
        
      </div>
    </section>
  );
}
