import Image from 'next/image';
import phoneImg from '../public/mobile1.png';
import { Play } from 'lucide-react';

const CTABanner = () => {
  return (
    <section id="calltoaction" className="w-full bg-zinc-100 px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-14">
      <div className="relative bg-[#5A81FA] rounded-[4rem] max-w-6xl mx-auto min-h-[280px] sm:min-h-[320px] flex items-center overflow-hidden md:overflow-visible">

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
        <div className="relative z-10 flex flex-col gap-4 w-full px-8 py-12
                        items-center text-center
                        md:items-start md:text-left
                        md:pl-[300px] lg:pl-[340px] md:pr-12 lg:pr-20">

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
            Ready? Let's Start with{' '}
            <span className="font-semibold text-[#052999]">Riala Pay</span>
            <br />
            and Get{' '}
            <span className="font-semibold text-[#052999]">Awesome Experience!</span>
          </h2>

          <p className="text-sm text-white/75 leading-relaxed max-w-sm">
            Simplify you payments with Riala Pay, Simplify you payments with
            Riala Pay, Paying bills nad making transactions has never been
            easier. Paying bills nad making.
          </p>

          <button className="flex items-center gap-2 bg-[#43495B] hover:bg-[#43495B]/85 text-white text-sm font-medium px-5 h-[38px] rounded-xl transition-all mt-1">
            <Play size={14} fill="white" className="shrink-0" />
            <span className="leading-none">Watch Tizer</span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default CTABanner;