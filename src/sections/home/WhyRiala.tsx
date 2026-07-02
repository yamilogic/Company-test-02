import Image from "next/image"
import qr from "@/assets/why/qr.png"
import account from "@/assets/why/account.png"
import stats from "@/assets/why/Stats.png"

const Circles = ({ top = "60%", translateY = true }: { top?: string; translateY?: boolean }) => {
  const topClasses: Record<string, string> = {
    "60%": "top-[60%]",
    "95%": "top-[95%]",
  };
  const sizeClasses: Record<number, string> = {
    300: "w-[300px] h-[300px]",
    340: "w-[340px] h-[340px]",
    380: "w-[380px] h-[380px]",
  };

  return (
    <div className={`absolute left-1/2 -translate-x-1/2 pointer-events-none ${translateY ? '-translate-y-1/2' : ''} ${topClasses[top] || 'top-[60%]'}`}>
      {[300, 340, 380].map((size) => (
        <div
          key={size}
          className={`absolute rounded-full border border-[#E3E3E3] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${sizeClasses[size]}`}
        />
      ))}
    </div>
  );
};

const cardCls = "bg-white border border-zinc-200/50 shadow-sm h-100 lg:h-[500px] xl:h-[560px] rounded-2xl overflow-hidden flex flex-col px-16 lg:px-6 xl:px-8 transition-all duration-300";
const imgCls = "object-cover mt-2 w-[200px] lg:w-[260px] xl:w-[300px] h-auto transition-all duration-300";
const imgContainerCls = "flex justify-center overflow-hidden h-[220px] sm:h-[300px] lg:h-[360px] xl:h-[400px] relative z-10";

const WhyRiala = () => {
  return (
    <section id="whyrelay" className="w-full bg-[#F3F4F6] md:mt-36 mt-28 px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
      <div className="max-w-6xl xl:max-w-7xl mx-auto w-full transition-all duration-300">

        {/* Dark Banner */}
        <div className="relative w-full h-100 lg:h-[450px] xl:h-[500px] bg-zinc-800 rounded-[1.5rem] pt-8 pb-24 overflow-hidden">
          {/* Arc rings */}
          {[120, 180, 240, 300, 360].map((r, i) => {
            const arcClasses: Record<number, string> = {
              120: "w-[240px] h-[120px]",
              180: "w-[360px] h-[180px]",
              240: "w-[480px] h-[240px]",
              300: "w-[600px] h-[300px]",
              360: "w-[720px] h-[360px]",
            };
            return (
              <div
                key={i}
                className={`absolute bottom-0 border border-white/[0.07] rounded-t-full left-1/2 -translate-x-1/2 ${arcClasses[r]}`}
              />
            );
          })}

          <div className="relative z-10 flex flex-col items-center text-center gap-1 px-4">
            <p className="font-medium text-zinc-500 text-xs tracking-widest">
              Why Riala?
            </p>
            <h2 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
              We Made Banking{" "}
              <span className="text-blue-500">Easier!</span>
            </h2>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative -mt-56 lg:-mt-64 xl:-mt-72 z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-4 lg:px-10 gap-8 lg:gap-10 xl:gap-12">

          {/* Card 1 — text top, image bottom */}
          <div className={`relative ${cardCls}`}>
            <Circles />
            <div className="pt-6 pb-3 px-5 relative z-10">
              <h3 className="font-bold text-xl text-center text-gray-900 leading-snug xl:text-2xl">
                QR scanner;<br />
                a piece of cake
              </h3>
            </div>
            <div className={imgContainerCls}>
              <Image src={qr} alt="QR Scanner Phone" width={320} height={640} className={`object-top ${imgCls}`} />
            </div>
          </div>

          {/* Card 2 — image top, text bottom */}
          <div className={cardCls}>
            <div className="relative flex justify-center overflow-hidden h-[220px] sm:h-[300px] lg:h-[360px] xl:h-[400px]">
              <Circles top="95%" translateY={false} />
              <Image src={stats} alt="Filter Phone" width={320} height={640} className={`object-bottom relative z-10 ${imgCls}`} />
            </div>
            <div className="pt-3 pb-6 px-5 lg:mt-auto lg:mb-6">
              <h3 className="font-bold text-lg text-center sm:text-xl xl:text-2xl text-gray-900 leading-snug">
                Control card spend,<br />
                before it happens.
              </h3>
            </div>
          </div>

          {/* Card 3 — text top, image bottom */}
          <div className={`relative md:col-span-2 md:w-[calc(50%-16px)] md:mx-auto lg:col-span-1 lg:w-full ${cardCls}`}>
            <Circles />
            <div className="pt-6 pb-3 px-5 relative z-10">
              <h3 className="font-bold text-lg sm:text-xl xl:text-2xl text-center text-gray-900 leading-snug">
                Control card spend,<br />before it happens.
              </h3>
            </div>
            <div className={imgContainerCls}>
              <Image src={account} alt="Credit Card Phone" width={320} height={640} className={`object-top ${imgCls}`} />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default WhyRiala