import React from 'react';

const partners = [
  { name: "Uber" },
  { name: "Snapp!" },
  { name: "Pinterest", hasIcon: true },
  { name: "freepik", hasIcon: true },
  { name: "Bēhance" },
  { name: "Apple", iconOnly: true },
];

const Logo = ({ p }: { p: typeof partners[0] }) => {
  const base = "flex items-center gap-2 text-[#8B90A7] font-medium shrink-0";
  if (p.name === "Apple") return (
    <span className={base}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
    </span>
  );
  if (p.name === "Pinterest") return (
    <span className={`${base} text-base md:text-lg`}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.87 3.51-.25 1.05.52 1.9 1.55 1.9 1.85 0 3.28-1.95 3.28-4.77 0-2.49-1.79-4.23-4.35-4.23-2.96 0-4.7 2.22-4.7 4.52 0 .9.35 1.85.78 2.37.09.1.1.19.07.3-.08.32-.25 1.05-.29 1.19-.04.19-.14.23-.32.14-1.25-.58-2.03-2.42-2.03-3.9 0-3.15 2.29-6.05 6.61-6.05 3.47 0 6.16 2.47 6.16 5.77 0 3.45-2.17 6.22-5.19 6.22-1.01 0-1.97-.53-2.3-1.15l-.62 2.33c-.23.87-.84 1.95-1.25 2.61.94.29 1.94.45 2.97.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" /></svg>
      Pinterest
    </span>
  );
  if (p.name === "freepik") return (
    <span className={`${base} text-base md:text-lg`}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" /><path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" /></svg>
      freepik
    </span>
  );
  if (p.name === "Snapp!") return <span className={`${base} font-extrabold text-xl md:text-2xl`}>Snapp!</span>;
  if (p.name === "Uber") return <span className={`${base} font-bold text-2xl md:text-3xl`}>Uber</span>;
  return <span className={`${base} text-base md:text-lg font-semibold`}>{p.name}</span>;
};

const MarqueeTrack = ({ gap = "gap-10" }: { gap?: string }) => {
  const all = [...partners, ...partners, ...partners];
  return (
    <div className="overflow-hidden flex-1">
      <div className={`flex items-center ${gap} animate-marquee w-max whitespace-nowrap`}>
        {all.map((p, i) => <Logo key={i} p={p} />)}
      </div>
    </div>
  );
};

const Partners = () => (
  <div className="w-full bg-zinc-100 border-t border-zinc-200 overflow-hidden">
    {/* ── DESKTOP (lg+): text LEFT fixed, logos marquee RIGHT ── */}
    <div className="hidden lg:flex items-center gap-8 p-22">
      <p className="text-[#8B90A7] text-md md:text-md font-medium leading-relaxed shrink-0">
        WE ARE PARTENDED WITH MORE THAN 50+ <br /> COMPANIES AROUND THE GLOBE.
      </p>
      <div className="w-px h-8 bg-zinc-300 shrink-0" />
      <MarqueeTrack />
    </div>

    {/* ── MOBILE + TABLET (below lg): text top, logos below ── */}
    <div className="flex lg:hidden flex-col gap-3 px-4 py-4">
      <p className="text-[#8B90A7] text-sm font-medium leading-relaxed text-center">
        WE ARE PARTENDED WITH MORE THAN 50+ COMPANIES AROUND THE GLOBE.
      </p>
      <div className="w-full h-px bg-zinc-200" />
      <MarqueeTrack gap="gap-6 md:gap-8" />
    </div>
  </div>
);

export default Partners;