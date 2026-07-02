import { Info } from 'lucide-react';
import React from 'react';

const steps = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f6ef7" strokeWidth="1.5">
        <path d="M12 15V3m0 12l-4-4m4 4l4-4"/>
        <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"/>
      </svg>
    ),
    step: "Step 1",
    title: "Download App",
    desc: "Simplify you payments with Riala Pay, Paying bills nad making transactions has never been easier.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f6ef7" strokeWidth="1.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    step: "Step 2",
    title: "Install App",
    desc: "Simplify you payments with Riala Pay, Paying bills nad making transactions has never been easier.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f6ef7" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    step: "Step 3",
    title: "Create New Account",
    desc: "Simplify you payments with Riala Pay, Paying bills nad making transactions has never been easier.",
  },
];

const HowToStart = () => {
  return (
    <section id="howto" className="w-full font-['inter'] bg-zinc-100 px-4 sm:px-8 md:px-16 lg:px-24 py-14 sm:py-20">

      {/* Heading */}
      <div className="flex flex-col items-center text-center gap-2 mb-12 sm:mb-16">
        <span className="text-xs text-zinc-400 font-medium flex gap-2 items-center">Bonus  <Info size={8} /></span>
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#1a1f36] leading-tight">
          How To Start Using Riala Pay?
        </h2>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 md:gap-10 max-w-4xl mx-auto">
        {steps.map((s) => (
          <div key={s.step} className="flex flex-col items-center text-center gap-2">
            {/* Icon circle */}
            <div className="w-12 h-12 rounded-full bg-[#EBF0FE] flex items-center justify-center mb-2">
              {s.icon}
            </div>
            {/* Step label */}
            <p className="text-xs text-zinc-400 font-medium">{s.step}</p>
            {/* Title */}
            <h3 className="text-base font-bold text-[#1a1f36]">{s.title}</h3>
            {/* Desc */}
            <p className="text-sm text-zinc-400 leading-relaxed max-w-[220px]">{s.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default HowToStart;