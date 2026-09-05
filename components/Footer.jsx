import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="w-full bg-[#F54B25] px-6 md:px-12 pt-8 md:pt-14 pb-4 md:pb-6 text-[#111111] relative z-20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Grid Content (6-3-3 layout) with segmented top borders */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 lg:gap-x-16 gap-y-8 pb-6 md:pb-8">
          
          {/* Column 1: Logo (Takes 50% on desktop) */}
          <div className="md:col-span-6 border-t border-black/15 pt-8">
            {/* 2x2 Logo shape forming the stylized mark */}
            <div className="w-12 h-12 grid grid-cols-2 gap-[3px]">
              <div className="bg-[#111111] rounded-tl-[10px]"></div>
              <div className="bg-[#111111] rounded-tr-[16px]"></div>
              <div className="bg-[#111111]"></div>
              <div className="bg-[#111111] rounded-br-[16px]"></div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Takes 25% on desktop) */}
          <div className="md:col-span-3 border-t border-black/15 pt-8">
            <ul className={`${inter.className} flex flex-col gap-3 text-[15px] text-gray-800 font-medium`}>
              <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-black transition-colors">About me</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Socials (Takes 25% on desktop) */}
          <div className="md:col-span-3 border-t border-black/15 pt-8">
            <ul className={`${inter.className} flex flex-col gap-3 text-[15px] text-gray-800 font-medium`}>
              <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Awwwards</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Border Line */}
        <div className="w-full h-[1px] bg-black/15 mb-6"></div>

        {/* Bottom Grid Content (6-3-3 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 lg:gap-x-16 gap-y-4 items-center">
          
          {/* Copyright */}
          <div className="md:col-span-6">
            <p className={`${inter.className} text-[13px] md:text-[14px] text-black/70`}>
              © 2026 | <span className="text-black font-semibold">Vinay Parit</span>
            </p>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3">
            <p className={`${inter.className} text-[13px] md:text-[14px] text-gray-600`}>
              <a href="#" className="hover:text-black transition-colors">Legal Notice</a> | <a href="#" className="hover:text-black transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-black transition-colors">Cookies</a>
            </p>
          </div>

          {/* Language */}
          <div className="md:col-span-3">
            <p className={`${inter.className} text-[13px] md:text-[14px] text-gray-600`}>
              <a href="#" className="text-black font-semibold">DE</a> | <a href="#" className="hover:text-black transition-colors">EN</a>
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
