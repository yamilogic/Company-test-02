import Image from 'next/image';
import HandMobile from "@/assets/hero/HandMobile.png"
import mobile2 from "@/assets/hero/Mobile2.png"
import man from "@/assets/hero/man.png"
import girl from "@/assets/hero/girl.png"
import { Phone, Play } from "lucide-react"

const WatchBtn = ({ cls = "" }: { cls?: string }) => (
  <div className={`flex items-center gap-2 font-medium text-xs rounded-2xl bg-[#43495B] text-white cursor-pointer ${cls}`}>
    <Play size={15} /> Watch Tizer
  </div>
);

const ContactBtn = ({ cls = "" }: { cls?: string }) => (
  <div className={`flex items-center gap-2 font-medium text-xs rounded-2xl text-zinc-800 bg-zinc-50 border border-zinc-300 cursor-pointer ${cls}`}>
    <Phone size={15} /> Contact Us
  </div>
);

const Circle = ({ size, cls = "", style = {} }: { size: number; cls?: string; style?: React.CSSProperties }) => (
  <div className={`absolute rounded-full pointer-events-none ${cls}`} style={{ width: `${size}px`, height: `${size}px`, ...style }} />
);

const Hero = () => {
  return (
    <div className="w-full font-inter mt-4 lg:lg:min-h-[calc(100vh+4rem)] bg-zinc-100 overflow-hidden">

      {/* ── DESKTOP (lg+) ── */}
      <div className="hidden lg:block relative">

        {/* Background circles */}
        <Circle size={1200} cls="left-1/2 -translate-x-1/2 top-[55%] -translate-y-1/2 border border-zinc-300/50" />
        <Circle size={685} cls="left-[48%] -translate-x-1/2 top-[55%] -translate-y-1/2 z-[-0] border border-zinc-300/40" />
        <Circle size={430} cls="left-[47%] -translate-x-1/2 top-[62%] -translate-y-1/2 bg-zinc-50" />

        {/* Title */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <h1 className="text-9xl mr-56 tracking-tight text-[#43495B]">Welcome</h1>
          <div className="flex gap-4 mr-20 ml-20">
            <div className="relative mr-16 xl:mr-24 2xl:mr-28 mt-10 xl:mt-14 z-10">
              <div className="relative rounded-[2rem] shadow-xl shadow-zinc-300/60 overflow-visible bg-white w-[90px] h-[105px] xl:w-[115px] xl:h-[135px] 2xl:w-[135px] 2xl:h-[160px]">
                <Image src={man} alt="man" width={160} height={200}
                  className="absolute bottom-0 left-0 w-full object-cover object-top" />
              </div>
            </div>
            <h1 className="text-9xl ml-22 z-2 tracking-tight text-[#43495B]">To Riala</h1>
          </div>
        </div>

        {/* Bottom row */}
        <div className="w-full flex items-center justify-between px-34 py-10 mt-10">
          <h1 className="font-semibold font-['inter'] -left-14 top-22 text-[#43495B] text-2xl z-10 relative">
            The ultimate finance <br /> application is here...
          </h1>
          <Image
            className="absolute top-14 left-[47%] -translate-x-1/2 translate-y-44 z-10"
            src={HandMobile}
            alt="HandMobile"
            width={440}
            height={440} />

          <div className="flex flex-col gap-4 z-20 relative xl:translate-y-22 lg:translate-y-22 xl:translate-x-26 lg:translate-x-52 md:lg:translate-x-72">            <div className="relative w-[95px] h-[100px] xl:w-[115px] xl:h-[120px] 2xl:w-[135px] 2xl:h-[140px] -translate-x-36 rounded-[22px] bg-[#FAFAFA] shadow-lg overflow-visible">
            <Image src={girl} alt="girl" width={150} height={180}
              className="absolute -top-10 left-1/2 -translate-x-1/2 object-cover object-top drop-shadow-xl" />
          </div>
            <div className="font-medium text-zinc-400 -translate-x-36 text-sm">
              Simplify your payment with Riala Pay, Paying bills and <br /> making transactions has never been easier.
            </div>
            <div className="flex items-center gap-2 -translate-x-36">
              <WatchBtn cls="px-5 py-2 rounded-xl" />
              <ContactBtn cls="px-5 py-2 rounded-xl hover:bg-zinc-100" />
            </div>
          </div>
        </div>
      </div>

      {/* ── TABLET (md to lg) ── */}
      <div className="hidden md:flex lg:hidden flex-col w-full">

        <div className="relative w-full flex items-end justify-center" style={{ minHeight: '580px' }}>

          {/* Title */}
          <div className="absolute top-6 left-0 right-0 flex flex-col items-center z-0 pointer-events-none select-none">
            <h1 className=" tracking-tight text-[#43495B] leading-none text-center mr-52" style={{ fontSize: 'clamp(4rem, 12vw, 7rem)' }}>Welcome</h1>
            <h1 className=" tracking-tight text-[#43495B] leading-none text-center ml-22" style={{ fontSize: 'clamp(4rem, 12vw, 7rem)' }}>To Riala</h1>
          </div>

          {/* Circles */}
          <Circle size={700} cls="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-zinc-300/50 z-10" />
          <Circle size={460} cls="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-zinc-300/40 bg-zinc-50/20 z-10" />
          <Circle size={400} cls="top-[68%] left-[47%] -translate-x-1/2 -translate-y-1/2 bg-zinc-50 z-10" />

          {/* Main phone */}
          <div className="relative z-30 mb-0" style={{ transform: 'translateX(-12%) translateY(5%)' }}>
            <Image src={mobile2} alt="Riala App" width={260} height={433} className="object-contain drop-shadow-2xl rounded-[2.5rem]" />
          </div>
        </div>

        {/* Bottom text */}
        <div className="flex flex-col items-center gap-4 px-8 pb-12 mt-6 text-center">
          <p className="font-medium text-zinc-400 text-sm max-w-sm">
            Simplify your payments with Riala Pay, Paying bills and making transactions has never been easier.
          </p>
          <div className="flex items-center gap-3">
            <WatchBtn cls="px-5 py-2.5" />
            <ContactBtn cls="px-5 py-2.5" />
          </div>
        </div>
      </div>

      {/* ── MOBILE (below md) ── */}
      <div className="flex md:hidden flex-col w-full">

        <div className="relative w-full flex items-end justify-center" style={{ minHeight: '420px' }}>

          {/* Title */}
          <div className="absolute -top-2 left-0 right-0 flex flex-col items-center z-0 pointer-events-none select-none">
            <h1 className="text-7xl tracking-tight text-[#43495B] mr-10 leading-none text-center">Welcome</h1>
            <h1 className="text-7xl tracking-tight text-[#43495B] leading-none text-center">To Riala</h1>
          </div>

          {/* Circles */}
          <Circle size={500} cls="top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 border border-zinc-300/50 z-10" />
          <Circle size={480} cls="top-[82%] left-1/2 -translate-x-1/2 -translate-y-1/2 border bg-zinc-100/10 border-zinc-300/40 z-10" />
          <Circle size={300} cls="top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-50/60 z-10" />

          {/* Main phone */}
          <div className="relative z-30 top-2" style={{ transform: 'translateX(-8%)' }}>
            <Image src={mobile2} alt="Riala App" width={195} height={325} className="object-contain rounded-[2rem]" />
          </div>
        </div>

        {/* Bottom text */}
        <div className="flex flex-col items-center gap-3 px-6 pb-10 mt-4 text-center">
          <p className="font-medium text-zinc-400 text-sm max-w-[260px]">
            Simplify your payments with Riala Pay, Paying bills and making transactions has never been easier.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <WatchBtn cls="px-4 py-2" />
            <ContactBtn cls="px-4 py-2" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero