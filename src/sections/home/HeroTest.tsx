import Image from 'next/image';
import React from 'react'
import HandMobile from "@/assets/hero/HandMobile.png"
import mobile2 from "@/assets/hero/Mobile2.png"
import man from "@/assets/hero/man.png"
import girl from "@/assets/hero/girl.png"

import { Phone, Play } from "lucide-react"

const Herotest = () => {
  return (
    <div className="w-full font-inter mt-4 lg:min-h-[calc(100vh+4rem)] bg-zinc-100 overflow-hidden transition-all duration-300">

      {/* ── DESKTOP (lg+) ── */}
      <div className="hidden lg:block relative">

        {/* Background circles */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[55%] -translate-y-1/2 rounded-full border border-zinc-300/50 pointer-events-none"
          style={{ width: '1200px', height: '1200px' }} />
        <div className="absolute left-[48%] -translate-x-1/2 top-[55%] -translate-y-1/2 z-[-0] rounded-full border border-zinc-300/40 pointer-events-none"
          style={{ width: '685px', height: '685px' }} />
        <div className="absolute left-[47%] -translate-x-1/2 top-[62%] -translate-y-1/2 bg-zinc-50 rounded-full pointer-events-none"
          style={{ width: '430px', height: '430px' }} />

        {/* Title */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <h1 className="text-7xl xl:text-8xl 2xl:text-9xl mr-24 xl:mr-36 2xl:mr-56 tracking-tight text-[#43495B] transition-all duration-300">Welcome</h1>
          <div className="flex gap-4 mr-20 ml-20">
            <div className="relative mr-12 xl:mr-20 mt-10 xl:mt-14 z-10 transition-all duration-300">
              <div className="relative rounded-[1.5rem] xl:rounded-[2rem] shadow-xl shadow-zinc-300/60 overflow-visible bg-white w-[60px] h-[75px] xl:w-[80px] xl:h-[95px] transition-all duration-300">
                <Image src={man} alt="man" width={116} height={144}
                  className="absolute bottom-0 left-0 w-full object-cover object-top" />
              </div>
            </div>
            <h1 className="text-7xl xl:text-8xl 2xl:text-9xl ml-10 xl:ml-16 2xl:ml-22 z-2 tracking-tight text-[#43495B] transition-all duration-300">To Riala</h1>
          </div>
        </div>

        {/* Bottom row */}
        <div className="w-full flex items-center justify-between px-10 xl:px-34 py-10 mt-6 xl:mt-10 transition-all duration-300">
          <h1 className="font-semibold font-['inter'] left-0 xl:-left-14 top-10 xl:top-22 text-[#43495B] text-xl xl:text-2xl z-10 relative transition-all duration-300">
            The ultimate finance <br /> application is here...
          </h1>

          <Image
            className="absolute top-14 left-[47%] -translate-x-1/2 translate-y-36 xl:translate-y-44 z-10 w-[300px] lg:w-[360px] xl:w-[440px] 2xl:w-[480px] h-auto transition-all duration-300"
            src={HandMobile}
            alt="HandMobile"
            width={440}
            height={440}
          />

          <div className="flex flex-col gap-4 z-20 relative translate-y-16 xl:translate-y-22 translate-x-0 xl:translate-x-26 lg:translate-x-10 transition-all duration-300">
            <div className="relative w-[75px] h-[80px] xl:w-[95px] xl:h-[100px] -translate-x-12 xl:-translate-x-36 rounded-[18px] xl:rounded-[22px] bg-[#FAFAFA] shadow-lg overflow-visible transition-all duration-300">
              <Image src={girl} alt="girl" width={100} height={130}
                className="absolute -top-8 xl:-top-10 left-1/2 -translate-x-1/2 w-[80%] xl:w-full object-cover object-top drop-shadow-xl" />
            </div>
            <div className="font-medium text-zinc-400 -translate-x-12 xl:-translate-x-36 text-xs xl:text-sm transition-all duration-300">
              Simplify your payment with Riala Pay, Paying bills and <br className="hidden xl:inline" /> making transactions has never been easier.
            </div>
            <div className="flex items-center gap-2 -translate-x-12 xl:-translate-x-36 transition-all duration-300">
              <div className="px-4 xl:px-5 py-2 flex items-center justify-center gap-2 font-medium text-[10px] xl:text-xs rounded-xl bg-[#43495B] hover:bg-[#43495B]/85 text-white cursor-pointer">
                <Play size={13} /> Watch Tizer
              </div>
              <div className="px-4 xl:px-5 py-2 flex items-center justify-center gap-2 font-medium text-[10px] xl:text-xs rounded-xl text-zinc-800 bg-zinc-50 border hover:bg-zinc-100 border-zinc-300 cursor-pointer">
                <Phone size={13} /> Contact Us
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TABLET (md to lg) ── */}
      <div className="hidden md:flex lg:hidden flex-col w-full">

        <div className="relative w-full flex items-end justify-center" style={{ minHeight: '580px' }}>

          {/* Title — behind everything, large, centered at top */}
          <div className="absolute top-6 left-0 right-0 flex flex-col items-center z-0 pointer-events-none select-none">
            <h1
              className="tracking-tight text-[#43495B] leading-none text-center mr-52"
              style={{ fontSize: 'clamp(4rem, 12vw, 7rem)' }}
            >
              Welcome
            </h1>
            <h1
              className="tracking-tight text-[#43495B] leading-none text-center ml-22"
              style={{ fontSize: 'clamp(4rem, 12vw, 7rem)' }}
            >
              To Riala
            </h1>
          </div>

          {/* Circles — centred in the hero area */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-300/50 pointer-events-none z-10"
            style={{ width: '700px', height: '700px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-300/40 bg-zinc-50/20 pointer-events-none z-10"
            style={{ width: '460px', height: '460px' }} />
          <div className="absolute top-[68%] left-[47%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-50 pointer-events-none z-10"
            style={{ width: '400px', height: '400px' }} />

          {/* Main phone — front and center-right */}
          <div className="relative z-30 mb-0 transition-all duration-300" style={{ transform: 'translateX(-12%) translateY(5%)' }}>
            <Image
              src={mobile2}
              alt="Riala App"
              width={260}
              height={433}
              className="object-contain drop-shadow-2xl rounded-[2.5rem] w-[200px] sm:w-[240px] md:w-[260px] h-auto"
            />
          </div>
        </div>

        {/* Bottom text */}
        <div className="flex flex-col items-center gap-4 px-8 pb-12 mt-6 text-center">
          <p className="font-medium text-zinc-400 text-sm max-w-sm">
            Simplify your payments with Riala Pay, Paying bills and making transactions has never been easier.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-5 py-2.5 font-medium text-xs rounded-2xl bg-[#43495B] text-white cursor-pointer">
              ▶ Watch Tizer
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 font-medium text-xs rounded-2xl text-zinc-800 bg-zinc-50 border border-zinc-300 cursor-pointer">
              <Phone size={15} /> Contact Us
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE (below md) ── */}
      <div className="flex md:hidden flex-col w-full">

        <div className="relative w-full flex items-end justify-center" style={{ minHeight: '420px' }}>

          {/* Title — behind phone */}
          <div className="absolute -top-2 left-0 right-0 flex flex-col items-center z-0 pointer-events-none select-none">
            <h1 className="text-7xl tracking-tight text-[#43495B] mr-10 leading-none text-center">
              Welcome
            </h1>
            <h1 className="text-7xl tracking-tight text-[#43495B] leading-none text-center">
              To Riala
            </h1>
          </div>

          {/* Circles */}
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-300/50 pointer-events-none z-10"
            style={{ width: '500px', height: '500px' }} />
          <div className="absolute top-[82%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-zinc-100/10 border-zinc-300/40 pointer-events-none z-10"
            style={{ width: '480px', height: '480px' }} />
          <div className="absolute top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-50/60 pointer-events-none z-10"
            style={{ width: '300px', height: '300px' }} />

          {/* Main phone — front, shifted slightly right */}
          <div className="relative z-30 top-2 transition-all duration-300" style={{ transform: 'translateX(-8%)' }}>
            <Image
              src={mobile2}
              alt="Riala App"
              width={195}
              height={325}
              className="object-contain rounded-[2rem] w-[150px] sm:w-[195px] h-auto"
            />
          </div>
        </div>

        {/* Bottom text */}
        <div className="flex flex-col items-center gap-3 px-6 pb-10 mt-4 text-center">
          <p className="font-medium text-zinc-400 text-sm max-w-[260px]">
            Simplify your payments with Riala Pay, Paying bills and making transactions has never been easier.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <div className="flex items-center gap-2 px-4 py-2 font-medium text-xs rounded-2xl bg-[#43495B] text-white cursor-pointer">
              ▶ Watch Tizer
            </div>
            <div className="flex items-center gap-2 px-4 py-2 font-medium text-xs rounded-2xl text-zinc-800 bg-zinc-50 border border-zinc-300 cursor-pointer">
              <Phone size="15" /> Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herotest