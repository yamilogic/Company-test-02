import Image from "next/image"
import qr from "../public/qr.png"
import account from "../public/account.png"
import stats from "../public/Stats.png"

const Why = () => {
  return (
    <section id="whyrelay" className="w-full bg-[#F3F4F6] md:mt-36 mt-28 px-4 sm:px-6 lg:px-22 py-6">

      <div className="relative w-full h-100 bg-zinc-800 rounded-[1.5rem] pt-8 pb-24 overflow-hidden">

        {/* Arc rings */}
        {[120, 180, 240, 300, 360].map((r, i) => (
          <div
            key={i}
            className="absolute bottom-0 border border-white/[0.07] rounded-t-full"
            style={{ width: r * 2, height: r, left: "50%", transform: "translateX(-50%)" }}
          />
        ))}

        <div className="relative z-10 flex flex-col items-center text-center gap-1 px-4">
          <p className="font-medium text-zinc-500 text-xs tracking-widest">
            Why Riala?
          </p>
          <h2 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
            We Made Banking{" "}
            <span className="text-blue-500">Easier!</span>
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="relative lg:ml-14 -mt-56 z-10 flex flex-col lg:flex-row items-stretch px-2 sm:px-4 lg:px-10 gap-8">

        {/* Card 1 — text top, image bottom */}
        <div className="bg-[#f2f2f4] h-100 rounded-2xl overflow-hidden flex flex-col px-16">
        
          <div className="pt-6 pb-3 px-5">
            <h3 className="font-bold text-xl text-center text-gray-900 leading-snug">
              QR scanner;<br />a piece of cake
            </h3>
          </div>
          <div className="flex justify-center overflow-hidden h-[220px] sm:h-[300px]">
            <Image
              src={qr}
              alt="QR Scanner Phone"
              width={200}
              height={500}
              className="object-top object-cover mt-2"
            />
          </div>
        </div>

        {/* Card 2 — image top, text bottom, slightly raised */}
        <div className="bg-[#f2f2f4] rounded-2xl overflow-hidden flex flex-col px-16">
          <div className="flex justify-center overflow-hidden h-[220px] sm:h-[300px]">
            <Image
              src={stats}
              alt="Filter Phone"
              width={200}
              height={500}
              className="object-bottom object-cover"
            />
          </div>
          <div className="pt-3 pb-6 px-5">
            <h3 className="font-bold text-lg text-center sm:text-xl text-gray-900 leading-snug">
              Control card spend,<br />before it happens.
            </h3>
          </div>
        </div>

        {/* Card 3 — text top, image bottom */}
        <div className="bg-[#f2f2f4] rounded-2xl overflow-hidden flex flex-col px-16">
          <div className="pt-6 pb-3 px-5">
            <h3 className="font-bold text-lg sm:text-xl text-center text-gray-900 leading-snug">
              Control card spend,<br />before it happens.
            </h3>
          </div>
          <div className="flex justify-center overflow-hidden h-[220px] sm:h-[300px]">
            <Image
              src={account}
              alt="Credit Card Phone"
              width={200}
              height={500}
              className="object-top object-cover mt-2"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Why