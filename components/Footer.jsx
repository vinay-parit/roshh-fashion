import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="w-full bg-[#e6e4df] px-6 md:px-12 pt-8 md:pt-12 pb-12 md:pb-20 text-[#111111]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Border Line */}
        <div className="w-full h-[1px] bg-black/10 mb-12"></div>

        {/* Main Grid Content (6-3-3 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 pb-12">
          
          {/* Column 1: Logo (Takes 50% on desktop) */}
          <div className="md:col-span-6">
            {/* Logo */}
            <div className="w-10 h-10 flex flex-wrap gap-[2px]">
              <div className="w-[48%] h-[48%] bg-[#111111] rounded-tl-[10px]"></div>
              <div className="w-[48%] h-[48%] bg-[#111111] rounded-tr-[10px]"></div>
              <div className="w-[48%] h-[48%] bg-[#111111]"></div>
              <div className="w-[48%] h-[48%] bg-[#111111] rounded-br-[10px]"></div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Takes 25% on desktop) */}
          <div className="md:col-span-3">
            <ul className={`${inter.className} flex flex-col gap-3 text-[15px] text-gray-700`}>
              <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-black transition-colors">About me</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Socials (Takes 25% on desktop) */}
          <div className="md:col-span-3">
            <ul className={`${inter.className} flex flex-col gap-3 text-[15px] text-gray-700`}>
              <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Awwwards</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Border Line */}
        <div className="w-full h-[1px] bg-black/10 mb-6"></div>

        {/* Bottom Grid Content (6-3-3 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4">
          
          {/* Copyright */}
          <div className="md:col-span-6">
            <p className={`${inter.className} text-[13px] md:text-[14px] text-gray-600`}>
              © 2026 | <span className="text-[#f15a29] font-medium">Vinay Parit</span>
            </p>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3">
            <p className={`${inter.className} text-[13px] md:text-[14px] text-gray-600`}>
              <a href="#" className="hover:text-black">Legal Notice</a> | <a href="#" className="hover:text-black">Privacy Policy</a> | <a href="#" className="hover:text-black">Cookies</a>
            </p>
          </div>

          {/* Language */}
          <div className="md:col-span-3">
            <p className={`${inter.className} text-[13px] md:text-[14px] text-gray-600`}>
              <a href="#" className="text-black font-medium">DE</a> | <a href="#" className="hover:text-black">EN</a>
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
