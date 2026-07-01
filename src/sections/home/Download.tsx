import Image from 'next/image';
import React from 'react';
import Merged from "@/assets/download/Merged.png"
import { ArrowRight } from 'lucide-react';
import MobileView from "@/assets/download/Mobileview.png"

const DownloadSection = () => {
  return (
    <div id="download" className="w-full px-4 sm:px-6 md:px-22 py-4 bg-zinc-100">
      <div className="w-full rounded-3xl bg-white hi'] px-6 sm:px-8 md:px-28 py-8 md:py-2 border border-[#E0E2E8] overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-5 w-full md:max-w-[520px] z-10 items-center text-center md:items-start md:text-left">  {/* Achievement badge */}
            <div className="flex items-center gap-1 sm:gap-2 w-fit bg-[#F3F4F6] rounded-full px-2 sm:px-3 py-1 whitespace-nowrap">
              <span className="text-[#9DA3B7] rounded-full p-1 text-[12px] sm:text-[14px] bg-white font-medium">
                Achievement
              </span>

              <div className="w-px h-3 bg-zinc-200" />

              <span className="text-[#9DA3B7] text-[12px] sm:text-[14px] font-medium whitespace-nowrap">
                Rated No.1 App of 2025
              </span>

              <ArrowRight size={16} className="text-zinc-400 sm:w-5 sm:h-5" />
            </div>

            {/* Headline */}
            <div className="flex flex-col sm:flex-row md:flex-col sm:gap-2 w-full items-center md:items-start">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#43495B] leading-tight tracking-tight">
                Download Riala Pay
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#43495B] leading-tight tracking-tight">
                Just <span className="text-[#5A81FA]">Now..!</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-[#9DA3B7] text-sm leading-relaxed sm:max-w-2xl max-w-md">
              Simplify you payments with Riala Pay, Paying bills nad making
              transactions has never been easier.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-stretch gap-3 w-full md:w-auto">

              {/* IOS Button */}
              <button
                className="
      flex items-center justify-center
      gap-2 whitespace-nowrap
      bg-[#43495B]
      hover:bg-[#43495B]/85
      text-white text-sm font-medium
      px-3 py-2.5
      rounded-xl
      transition-all
      w-full md:w-auto
    "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>

                <span className="leading-none">
                  Download IOS
                </span>
              </button>

              {/* Android Button */}
              <button
                className="
      flex items-center justify-center
      gap-2 whitespace-nowrap
      border border-zinc-200
      bg-white
      hover:bg-zinc-100
      text-zinc-700 text-sm font-medium
      px-3 py-2.5
      rounded-xl
      hover:bg-zinc-50
      transition-colors
      w-full md:w-auto
    "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0"
                >
                  <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
                </svg>

                <span className="leading-none">
                  Download Android
                </span>
              </button>

            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
                ].map((src, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image src={src} alt="user" className="w-full h-full object-cover" width={100} height={100} />
                  </div>
                ))}
              </div>
              <span className="text-zinc-500 text-sm font-medium">200K+ Downloads</span>
            </div>
          </div>

          {/* RIGHT: Mobile image */}
          {/* RIGHT: Mobile image */}
          <div className="relative flex items-center mt-22 justify-center md:justify-end md:w-[45%] w-full h-[240px] sm:h-[300px] md:h-[300px] lg:h-[420px]">

            {/* Mobile only — MobileView image, bigger */}
            <Image
              src={MobileView}
              alt="mobile"
              className="md:hidden object-contain w-[260px] sm:w-[320px] h-auto"
              priority
            />

            {/* Desktop only — Merged image, bigger */}
            <Image
              src={Merged}
              alt="mobile"
              className="hidden md:block object-contain md:w-[320px] lg:w-[420px] h-auto lg:-translate-x-6"
              priority
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default DownloadSection;