import Image from "next/image"
import qr from "@/assets/why/qr.png"
import account from "@/assets/why/account.png"
import stats from "@/assets/why/Stats.png"

const WhyRiala = () => {
  return (
    <section id="whyrelay" className="w-full bg-[#F3F4F6] md:mt-36 mt-28 px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
      <div className="max-w-6xl xl:max-w-7xl mx-auto w-full transition-all duration-300">

        {/* Dark Banner */}
        <div className="relative w-full h-100 lg:h-[450px] xl:h-[500px] bg-zinc-800 rounded-[1.5rem] pt-8 pb-24 overflow-hidden">
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
            <h2 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
              We Made Banking{" "}
              <span className="text-blue-500">Easier!</span>
            </h2>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative -mt-56 lg:-mt-64 xl:-mt-72 z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-4 lg:px-10 gap-8 lg:gap-10 xl:gap-12">

          {/* Card 1 — text top, image bottom */}
          <div className="relative bg-white border border-zinc-200/50 shadow-sm h-100 lg:h-[500px] xl:h-[560px] rounded-2xl overflow-hidden flex flex-col px-16 lg:px-6 xl:px-8 transition-all duration-300">
            {/* Concentric Circles */}
            <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              {[300, 340, 380].map((size) => (
                <div
                  key={size}
                  className="absolute rounded-full border border-[#E3E3E3]"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>

            <div className="pt-6 pb-3 px-5 relative z-10">
              <h3 className="font-bold text-xl text-center text-gray-900 leading-snug xl:text-2xl">
                QR scanner;<br />
                a piece of cake
              </h3>
            </div>

            <div className="flex justify-center overflow-hidden h-[220px] sm:h-[300px] lg:h-[360px] xl:h-[400px] relative z-10">
              <Image
                src={qr}
                alt="QR Scanner Phone"
                width={320}
                height={640}
                className="object-top object-cover mt-2 w-[200px] lg:w-[260px] xl:w-[300px] h-auto transition-all duration-300"
              />
            </div>
          </div>

          {/* Card 2 — image top, text bottom, slightly raised */}
          <div className="bg-white border border-zinc-200/50 shadow-sm h-100 lg:h-[500px] xl:h-[560px] rounded-2xl overflow-hidden flex flex-col px-16 lg:px-6 xl:px-8 transition-all duration-300">
            <div className="relative flex justify-center overflow-hidden h-[220px] sm:h-[300px] lg:h-[360px] xl:h-[400px]">
              {/* Circles behind bottom of image */}
              <div className="absolute left-1/2 top-[95%] -translate-x-1/2 pointer-events-none">
                {[300, 340, 380].map((size) => (
                  <div
                    key={size}
                    className="absolute rounded-full border border-[#E3E3E3]"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </div>

              <Image
                src={stats}
                alt="Filter Phone"
                width={320}
                height={640}
                className="object-bottom object-cover relative z-10 w-[200px] lg:w-[260px] xl:w-[300px] h-auto transition-all duration-300"
              />
            </div>

            <div className="pt-3 pb-6 px-5 lg:mt-auto lg:mb-6">
              <h3 className="font-bold text-lg text-center sm:text-xl xl:text-2xl text-gray-900 leading-snug">
                Control card spend,<br />
                before it happens.
              </h3>
            </div>
          </div>

          {/* Card 3 — text top, image bottom */}
          <div className="bg-white border border-zinc-200/50 shadow-sm relative rounded-2xl overflow-hidden flex flex-col px-16 lg:px-6 xl:px-8 md:col-span-2 md:w-[calc(50%-16px)] md:mx-auto lg:col-span-1 lg:w-full h-100 lg:h-[500px] xl:h-[560px] transition-all duration-300">
            {/* Circles */}
            <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
              {[300, 340, 380].map((size) => (
                <div
                  key={size}
                  className="absolute rounded-full border border-[#E3E3E3]"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>

            <div className="pt-6 pb-3 px-5 relative z-10">
              <h3 className="font-bold text-lg sm:text-xl xl:text-2xl text-center text-gray-900 leading-snug">
                Control card spend,<br />before it happens.
              </h3>
            </div>

            <div className="flex justify-center overflow-hidden h-[220px] sm:h-[300px] lg:h-[360px] xl:h-[400px] relative z-10">
              <Image
                src={account}
                alt="Credit Card Phone"
                width={320}
                height={640}
                className="object-top object-cover mt-2 w-[200px] lg:w-[260px] xl:w-[300px] h-auto transition-all duration-300"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default WhyRiala