import Image from 'next/image';
import React from 'react';
import Merged from "../public/Merged.png"

const DownloadSection = () => {
  return (
    <div id="download" className="w-full px-4 sm:px-6 md:px-22 py-6 bg-zinc-100">
      <div className="w-full rounded-3xl bg-white font-['satoshi'] px-6 sm:px-8 md:px-28 py-8 md:py-10 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-6">

         {/* LEFT CONTENT */}
<div className="flex flex-col gap-5 w-full md:max-w-xs z-10 items-center text-center md:items-start md:text-left">

  {/* Achievement badge */}
  <div className="flex items-center gap-2 w-fit bg-[#F3F4F6] rounded-full px-3 py-1">
    <span className="text-[#9DA3B7] rounded-full p-1 text-[11px] bg-white font-medium">Achievement</span>
    <div className="w-px h-3 bg-zinc-200" />
    <span className="text-[#9DA3B7] text-[11px] font-medium">Rated No.1 App of 2025</span>
    <span className="text-zinc-400 text-[11px]">→</span>
  </div>

  {/* Headline */}
  <div className="flex flex-col w-full md:w-100 gap-0">
    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#43495B] leading-tight tracking-tight">
      Download Riala Pay
    </h1>
    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#43495B] leading-tight tracking-tight">
      Just <span className="text-[#5A81FA]">Now..!</span>
    </h1>
  </div>

  {/* Description */}
  <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
    Simplify you payments with Riala Pay, Paying bills nad making
    transactions has never been easier.
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch gap-3 w-full md:w-auto">
    <button className="flex items-center justify-center gap-2 bg-[#43495B] text-white text-xs font-medium px-3 py-2.5 rounded-xl transition-all w-full md:w-auto">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      Download IOS
    </button>
    <button className="flex items-center justify-center gap-2 border border-zinc-200 bg-white text-zinc-700 text-xs font-medium px-3 py-2.5 rounded-xl hover:bg-zinc-50 transition-colors w-full md:w-auto">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
      </svg>
      Download Android
    </button>
  </div>

  {/* Social proof */}
  <div className="flex items-center gap-3">
    <div className="flex -space-x-2">
      {[
  'https://images.unsplash.com/photo-1500648767791-dc71a4c0a6f3?w=40&h=40&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face',
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
<div className="relative flex items-center justify-center md:justify-end flex-1 w-full h-80 sm:h-96 md:h-80 lg:h-[420px] md:pr-6 lg:-ml-10"> 
  
  <Image
  className="h-full w-full sm:w-auto object-contain lg:-translate-x-8"
    src={Merged}
    alt="mobile"
    width={150}
    height={150}
  />
</div>

        </div>
      </div>
    </div>
  );
};

export default DownloadSection;