import Image from 'next/image';
import React from 'react'
import HandMobile from "../public/HandMobile.png"
import mobile2 from "../public/Mobile2.png"
import man from "../public/man.png"
import girl from "../public/girl.png"

const Hero = () => {
  return (
    <div className="w-full font-inter mt-4 min-h-screen bg-zinc-100 overflow-hidden">

      {/* ── DESKTOP (lg+): original untouched ── */}
      <div className="hidden lg:block">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-8xl font-['satoshi'] mr-56 tracking-tight text-[#43495B]">Welcome</h1>
          <div className="flex gap-4 mr-20">
            <div className="relative mr-28 mt-14">
              <div className="relative rounded-[2rem] shadow-xl shadow-zinc-300/60 overflow-visible bg-white w-[80px] h-[95px]">
                <Image
                  src={man}
                  alt="man"
                  width={80}
                  height={95}
                  className="absolute -top-3 left-0 w-full object-cover object-top"
                />
              </div>
            </div>
            <h1 className="text-8xl ml-10 font-['satoshi'] z-2 tracking-tight text-[#43495B]">To Riala</h1>
          </div>
        </div>
        <div className="w-full flex items-center justify-between px-34 py-10 mt-10">
          <h1 className="font-semibold font-['inter'] text-[#43495B] text-2xl">The ultimate finance <br /> application is here...</h1>
          <div className="w-96 h-96 border relative top-0 left-0 translate-x-5 z-1 -translate-y-1/2 bg-zinc-50 rounded-full" />
          <Image className="absolute top-0 left-0 translate-x-115 translate-y-62 z-3" src={HandMobile} alt="HandMobile" width={440} height={440} />
          <div className="flex flex-col gap-4">
            <div className="relative w-[95px] h-[100px] -translate-x-36 rounded-[22px] bg-[#FAFAFA] shadow-lg overflow-visible">
              <Image
                src={girl}
                alt="girl"
                width={100}
                height={130}
                className="absolute -top-10 left-1/2 -translate-x-1/2 object-cover object-top drop-shadow-xl"
              />
            </div>
            <div className="font-medium text-zinc-400 -translate-x-36 text-sm">Simplify your payment with Riala Pay, Paying bills and <br /> making transactions has never been easier.</div>
            <div className="flex items-center gap-2 -translate-x-36">
              <div className="px-3 py-1 w-fit h-fit font-medium text-xs rounded-2xl bg-[#43495B] text-white">Watch Tizer</div>
              <div className="px-3 py-1 w-fit h-fit font-medium text-xs rounded-2xl text-zinc-800 bg-zinc-50 border border-zinc-300">Contact Us</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TABLET + MOBILE (below lg) ── */}
      <div className="lg:hidden flex flex-col w-full">

        {/* Title */}
        <div className="flex flex-col items-center pt-10 px-6">
          <h1 className="text-[clamp(3rem,12vw,6rem)] font-['satoshi'] tracking-tight text-[#43495B] text-center leading-tight">
            Welcome
          </h1>
          <h1 className="text-[clamp(3rem,12vw,6rem)] font-['satoshi'] tracking-tight text-[#43495B] text-center leading-tight">
            To Riala
          </h1>
        </div>

        {/* Phone + Circles + Avatars */}
        <div className="relative flex items-center justify-center mt-6 mx-auto w-full" style={{ minHeight: '420px' }}>

          {/* Background circles */}
          <div className="absolute rounded-full border border-zinc-200/70 bg-transparent"
            style={{ width: 'clamp(320px, 75vw, 480px)', height: 'clamp(320px, 75vw, 480px)' }}
          />
          <div className="absolute rounded-full border border-zinc-200/60 bg-zinc-50/40"
            style={{ width: 'clamp(240px, 58vw, 360px)', height: 'clamp(240px, 58vw, 360px)' }}
          />
          <div className="absolute rounded-full bg-zinc-50"
            style={{ width: 'clamp(170px, 42vw, 260px)', height: 'clamp(170px, 42vw, 260px)' }}
          />

          {/* Man avatar — left */}
          <div className="absolute left-[5%] sm:left-[8%] top-1/2 -translate-y-[60%] z-10">
            <div className="relative rounded-[1.2rem] shadow-xl shadow-zinc-300/60 bg-white"
              style={{ width: 'clamp(56px, 12vw, 80px)', height: 'clamp(66px, 14vw, 95px)' }}
            >
              <Image
                src={man}
                alt="man"
                width={80}
                height={95}
                className="absolute -top-3 left-0 w-full object-cover object-top"
              />
            </div>
          </div>

          {/* mobile2.png — center, replaces HandMobile on tablet/mobile */}
          <div className="relative z-20">
            <Image
              src={mobile2}
              alt="Riala App"
              width={260}
              height={520}
              className="object-contain drop-shadow-2xl rounded-[2rem]"
              style={{ width: 'clamp(160px, 38vw, 260px)', height: 'auto' }}
            />
          </div>

          {/* Girl avatar — right */}
          <div className="absolute right-[5%] sm:right-[8%] top-1/2 -translate-y-[60%] z-10">
            <div className="relative rounded-[1.2rem] shadow-lg bg-[#FAFAFA]"
              style={{ width: 'clamp(56px, 12vw, 80px)', height: 'clamp(66px, 14vw, 95px)' }}
            >
              <Image
                src={girl}
                alt="girl"
                width={80}
                height={110}
                className="absolute -top-6 left-1/2 -translate-x-1/2 object-cover object-top drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Bottom text block */}
        <div className="flex flex-col items-start gap-4 px-6 sm:px-10 pb-12 mt-2">
          <h2 className="font-semibold font-['inter'] text-[#43495B] text-lg sm:text-2xl">
            The ultimate finance <br /> application is here...
          </h2>
          <p className="font-medium text-zinc-400 text-sm max-w-xs sm:max-w-sm">
            Simplify your payment with Riala Pay, Paying bills and making transactions has never been easier.
          </p>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 font-medium text-xs rounded-2xl bg-[#43495B] text-white cursor-pointer">
              ▶ Watch Tizer
            </div>
            <div className="px-4 py-2 font-medium text-xs rounded-2xl text-zinc-800 bg-zinc-50 border border-zinc-300 cursor-pointer">
              📞 Contact Us
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero