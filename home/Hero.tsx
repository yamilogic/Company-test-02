import Image from 'next/image';
import React from 'react'
import HandMobile from "../public/HandMobile.png"
import mobile2 from "../public/Mobile2.png"
import man from "../public/man.png"
import girl from "../public/girl.png"

const Hero = () => {
  return (
    <div className="w-full font-inter mt-4 lg:min-h-screen bg-zinc-100 overflow-hidden">

      {/* ── DESKTOP (lg+) ── */}
      <div className="hidden lg:block relative">

        {/* Background circles */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2 rounded-full border border-zinc-300/50 bg-transparent pointer-events-none"
          style={{ width: '680px', height: '680px' }} />
        <div className="absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2 rounded-full border border-zinc-300/40 bg-zinc-50/30 pointer-events-none"
          style={{ width: '520px', height: '520px' }} />
        <div className="absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2 rounded-full bg-zinc-50/60 pointer-events-none"
          style={{ width: '370px', height: '370px' }} />

        {/* Title */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <h1 className="text-8xl font-['satoshi'] mr-56 tracking-tight text-[#43495B]">Welcome</h1>
          <div className="flex gap-4 mr-20">
            <div className="relative mr-28 mt-14 z-10">
              <div className="relative rounded-[2rem] shadow-xl shadow-zinc-300/60 overflow-visible bg-white w-[80px] h-[95px]">
                <Image src={man} alt="man" width={80} height={95}
                  className="absolute -top-3 left-0 w-full object-cover object-top" />
              </div>
            </div>
            <h1 className="text-8xl ml-10 font-['satoshi'] z-2 tracking-tight text-[#43495B]">To Riala</h1>
          </div>
        </div>

        {/* Bottom row */}
        <div className="w-full flex items-center justify-between px-34 py-10 mt-10">
          <h1 className="font-semibold font-['inter'] text-[#43495B] text-2xl z-10 relative">
            The ultimate finance <br /> application is here...
          </h1>
          <Image className="absolute top-0 left-0 translate-x-115 translate-y-44 z-10"
            src={HandMobile} alt="HandMobile" width={440} height={440} />
          <div className="flex flex-col gap-4 z-10 relative">
            <div className="relative w-[95px] h-[100px] -translate-x-36 rounded-[22px] bg-[#FAFAFA] shadow-lg overflow-visible">
              <Image src={girl} alt="girl" width={100} height={130}
                className="absolute -top-10 left-1/2 -translate-x-1/2 object-cover object-top drop-shadow-xl" />
            </div>
            <div className="font-medium text-zinc-400 -translate-x-36 text-sm">
              Simplify your payment with Riala Pay, Paying bills and <br /> making transactions has never been easier.
            </div>
            <div className="flex items-center gap-2 -translate-x-36">
              <div className="px-3 py-1 w-fit h-fit font-medium text-xs rounded-2xl bg-[#43495B] text-white cursor-pointer">Watch Tizer</div>
              <div className="px-3 py-1 w-fit h-fit font-medium text-xs rounded-2xl text-zinc-800 bg-zinc-50 border border-zinc-300 cursor-pointer">Contact Us</div>
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
              className="font-['satoshi'] tracking-tight text-[#43495B] leading-none text-center"
              style={{ fontSize: 'clamp(4rem, 12vw, 7rem)' }}
            >
              Welcome
            </h1>
            <h1
              className="font-['satoshi'] tracking-tight text-[#43495B] leading-none text-center"
              style={{ fontSize: 'clamp(4rem, 12vw, 7rem)' }}
            >
              To Riala
            </h1>
          </div>

          {/* Circles — centred in the hero area */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-300/50 pointer-events-none z-10"
            style={{ width: '460px', height: '460px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-300/40 bg-zinc-50/20 pointer-events-none z-10"
            style={{ width: '340px', height: '340px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-50/60 pointer-events-none z-10"
            style={{ width: '230px', height: '230px' }} />

          {/* Main phone — front and center-right */}
<div className="relative z-30 mb-0" style={{ transform: 'translateX(-12%)' }}>            <Image
              src={mobile2}
              alt="Riala App"
              width={260}
              height={433}
              className="object-contain drop-shadow-2xl rounded-[2.5rem]"
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
              📞 Contact Us
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE (below md) ── */}
      <div className="flex md:hidden flex-col w-full">

        <div className="relative w-full flex items-end justify-center" style={{ minHeight: '420px' }}>

          {/* Title — behind phone */}
          <div className="absolute top-4 left-0 right-0 flex flex-col items-center z-0 pointer-events-none select-none">
            <h1
              className="font-['satoshi'] tracking-tight text-[#43495B] leading-none text-center"
              style={{ fontSize: 'clamp(3rem, 13vw, 4.5rem)' }}
            >
              Welcome
            </h1>
            <h1
              className="font-['satoshi'] tracking-tight text-[#43495B] leading-none text-center"
              style={{ fontSize: 'clamp(3rem, 13vw, 4.5rem)' }}
            >
              To Riala
            </h1>
          </div>

          {/* Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-300/50 pointer-events-none z-10"
            style={{ width: '310px', height: '310px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-300/40 bg-zinc-50/20 pointer-events-none z-10"
            style={{ width: '230px', height: '230px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-50/60 pointer-events-none z-10"
            style={{ width: '155px', height: '155px' }} />

          {/* Main phone — front, shifted slightly right */}
          <div className="relative z-30" style={{ transform: 'translateX(-8%)' }}>
            <Image
              src={mobile2}
              alt="Riala App"
              width={195}
              height={325}
              className="object-contain rounded-[2rem]"
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
              📞 Contact Us
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero