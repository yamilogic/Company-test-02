"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import reviews from "@/data/reviews.json";

type Review = {
  id: number;
  name: string;
  since: string;
  rating: number;
  avatar: string;
  quote: string;
  footnote: string;
};

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10 1.5l2.6 5.5 6 .7-4.4 4.1 1.2 6-5.4-3-5.4 3 1.2-6L1.4 7.7l6-.7L10 1.5z" />
    </svg>
  );
}

function ChevronIcon({ direction = "left" }: { direction?: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

// The 3 faint concentric circles behind the heading, centered at the top center of the section.
function BackgroundArcs() {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none z-0 overflow-hidden w-full h-[330px]"
    >
      {/* Big Circle */}
      <div
        className="absolute rounded-full border border-[#E0E2E8] w-[96.83vw] h-[96.83vw] left-1/2 top-[-36.51vw] -translate-x-1/2 -translate-y-1/2"
      />
      {/* Medium Circle */}
      <div
        className="absolute rounded-full border border-[#E0E2E8] w-[85.45vw] h-[85.45vw] left-1/2 top-[-34.13vw] -translate-x-1/2 -translate-y-1/2"
      />
      {/* Small Circle */}
      <div
        className="absolute rounded-full border border-[#E0E2E8] w-[74.74vw] h-[74.74vw] left-1/2 top-[-32.08vw] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      className="flex w-[85vw] shrink-0 snap-center flex-col gap-4 rounded-xl border border-[#E0E2E8]
                 bg-white p-6 transition-all duration-300 hover:border-zinc-300 hover:shadow-md
                 sm:w-[380px] md:w-[423px] md:min-h-[290px]"
    >
      <div className="flex gap-1 text-amber-400">
        {Array.from({ length: review.rating }).map((_, i) => (
          <StarIcon key={i} className="h-5 w-5" />
        ))}
      </div>

      <div className="flex flex-1 flex-col gap-3 text-sm leading-relaxed text-slate-500">
        <p>{review.quote}</p>
        <p>{review.footnote}</p>
      </div>

      <div className="flex items-center gap-3 border-t border-[#E0E2E8] pt-4">
        <Image
          src={review.avatar}
          alt={review.name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full bg-zinc-50 object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-slate-900">{review.name}</p>
          <p className="text-xs text-slate-400">{review.since}</p>
        </div>
      </div>
    </article>
  );
}

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Makes the row scrollable with: touch (native), mouse wheel (vertical wheel
  // moves it horizontally), and click-and-drag with the mouse.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      isDown = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.classList.add("cursor-grabbing");
      el.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      el.scrollLeft = startScroll - (e.clientX - startX);
    };

    const onPointerUp = (e: PointerEvent) => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
      el.releasePointerCapture(e.pointerId);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointerleave", onPointerUp);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointerleave", onPointerUp);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 300;
    el.scrollBy({ left: dir === "left" ? -(cardWidth + 16) : cardWidth + 16, behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden py-16">
      <BackgroundArcs />

      <div className="relative mx-auto mb-10 flex max-w-2xl flex-col items-center gap-4 px-4 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500 px-4 py-1.5 text-xs font-medium text-white">
          <StarIcon className="h-3.5 w-3.5" />
          Trusted By 200K+ Clients
        </span>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          What Our Clients Say About Us?
        </h2>
      </div>

      {/* Edge-to-edge, always-scrollable track: touch, wheel, and click-drag all work */}
      <div
        ref={trackRef}
        className="relative flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto
                   scroll-smooth touch-pan-x select-none [-ms-overflow-style:none]
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {(reviews as Review[]).map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Nav buttons: mobile only, purely optional shortcut for scrolling */}
      <div className="mt-8 flex justify-center gap-3 md:hidden">
        <button
          onClick={() => scroll("left")}
          aria-label="Previous reviews"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E0E2E8] text-slate-500 transition hover:bg-slate-50"
        >
          <ChevronIcon direction="left" />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Next reviews"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E0E2E8] text-slate-500 transition hover:bg-slate-50"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </section>
  );
}