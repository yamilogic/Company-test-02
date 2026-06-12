export default function BlogHeader() {
  return (
    <div className="relative w-full bg-gray-50 overflow-hidden py-16 text-center">
      {/* Arc rings */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        {[160, 240, 320, 400, 480].map((r, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 -translate-x-1/2 border border-gray-200 rounded-b-full"
            style={{ width: r * 2, height: r }}
          />
        ))}
      </div>
      <div className="relative z-10">
<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">          Discover Educational{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-blue-600">Articles</span>
            <span className="absolute inset-x-0 bottom-1 h-3 bg-blue-100 rounded -z-0" />
          </span>{" "}
          here
        </h1>
<p className="mt-3 text-sm text-gray-400 max-w-[280px] sm:max-w-md mx-auto">          Simplify your payments with Riala Pay. Paying bills and making transactions has never been easier.
        </p>
      </div>
    </div>
  );
}