import Image from 'next/image';
import phoneImg from '@/assets/cta/mobile1.png';
import { Play } from 'lucide-react';

const CTABanner = () => {
  return (
    <section id="calltoaction" className="w-full bg-zinc-100 px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-14">
      <div className="relative bg-[#5A81FA] rounded-[4rem] max-w-6xl mx-auto min-h-[280px] sm:min-h-[320px] flex items-center overflow-hidden md:overflow-visible">

        {/* Phone — only on md+ */}
      {/* Phone — only on md+ */}
 <div className="hidden md:block absolute left-[60px] lg:left-[60px] top-1/2 -translate-y-1/2
                w-[160px] h-[160px] lg:w-[250px] lg:h-[250px]
                rounded-full bg-[#6B8FFB] opacity-60 z-0" />

  {/* Left glow effect */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2
                  w-[300px] h-[300px]
                  rounded-full bg-[#7B9BFF] opacity-30 blur-3xl z-0
                  pointer-events-none" />

  {/* Phone — only on md+ */}
  <div className="hidden md:block absolute -left-4 md:-top-10 lg:left-22 -bottom-0 z-10 h-full">
    <Image
      src={phoneImg}
      alt="Riala Pay App"
      width={280}
      height={560}
      className="h-[135%] w-auto object-contain -translate-y-[5%]"
      priority
    />
  </div>

        {/* Text content */}
      
    
    
      <div
  className="relative z-10 flex flex-col gap-4 w-full
  px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12
  items-center text-center
  md:items-start md:text-left
  md:pl-[300px] lg:pl-[340px] md:pr-12 lg:pr-20"
>
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
    Ready? Let's Start with{" "}
    <span className="font-semibold text-[#052999]">Riala Pay {" "}</span>
    <br className="hidden sm:block" />
    and Get{" "}
    <span className="font-semibold text-[#052999]">
      Awesome Experience!
    </span>
  </h2>

  <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-[280px] sm:max-w-sm">
    Simplify your payments with Riala Pay. Paying bills and making
    transactions has never been easier.
  </p>

  <button className="flex items-center gap-2 bg-[#43495B] hover:bg-[#43495B]/85 text-white text-sm font-medium px-5 h-[38px] rounded-xl transition-all mt-1">
    <Play size={14} fill="white" className="shrink-0" />
    <span className="leading-none">Watch Teaser</span>
  </button>
</div>
      </div>
    </section>
  );
};

export default CTABanner;