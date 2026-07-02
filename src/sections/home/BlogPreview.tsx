'use client';

import Image from 'next/image';
import { useState } from 'react';

// Cards 1 & 4 = large rectangle with real image
// Cards 2 & 3 = square with circle/arc placeholder
const posts = [
  {
    id: 1,
    title: 'How to get to know riala more and more b...',
    desc: 'Simplify you payments with Riala Pay, Paying bills nad making tr...',
    image: '/allasset/Group 22.svg',
    hasImage: true,
  },
  {
    id: 2,
    title: 'How to get to know riala more and more b...',
    desc: 'Simplify you payments with Riala Pay, Paying bills nad making tr...',
    image: '',
    hasImage: false,
  },
  {
    id: 3,
    title: 'How to get to know riala more and more b...',
    desc: 'Simplify you payments with Riala Pay, Paying bills nad making tr...',
    image: '',
    hasImage: false,
  },
  {
    id: 4,
    title: 'How to get to know riala more and more b...',
    desc: 'Simplify you payments with Riala Pay, Paying bills nad making tr...',
    image: '/allasset/Group 24.svg',
    hasImage: true,
  },
];

/** Circle placeholder for square cards — 3 large concentric circles, center upper, bottom clips */
const CirclePlaceholder = () => (
  <div className="absolute inset-0 bg-[#eef0f6] overflow-hidden">
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        width: '115%',
        height: '115%',
        top: '-8%',
        left: '-7%',
      }}
    >
      {[130, 98, 66].map((r, i) => (
        <circle
          key={i}
          cx="150"
          cy="138"
          r={r}
          stroke="#c8cad9"
          strokeWidth="1.1"
          fill="none"
        />
      ))}
    </svg>
  </div>
);

/** Image card — full image with gradient overlay, text in white at bottom */
const ImageCard = ({
  post,
  className = '',
}: {
  post: (typeof posts)[0];
  className?: string;
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#d0d4e8] group cursor-pointer ${className}`}
    >
      {/* Show circle placeholder while image loads */}
      {(!imgLoaded || imgError) && <CirclePlaceholder />}

      {!imgError && (
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className={`text-sm sm:text-base font-semibold leading-snug ${imgLoaded && !imgError ? 'text-white' : 'text-zinc-800'}`}>
          {post.title}
        </h3>
        <p className={`text-xs mt-1 leading-relaxed line-clamp-1 ${imgLoaded && !imgError ? 'text-white/70' : 'text-zinc-500'}`}>
          {post.desc}
        </p>
      </div>
    </div>
  );
};

/** Placeholder card — circle/arc design, dark text */
const PlaceholderCard = ({
  post,
  className = '',
}: {
  post: (typeof posts)[0];
  className?: string;
}) => (
  <div
    className={`relative overflow-hidden rounded-2xl bg-[#eef0f6] group cursor-pointer ${className}`}
  >
    <CirclePlaceholder />
    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
      <h3 className="text-sm sm:text-base font-semibold leading-snug text-zinc-800">
        {post.title}
      </h3>
      <p className="text-xs mt-1 leading-relaxed line-clamp-1 text-zinc-500">
        {post.desc}
      </p>
    </div>
  </div>
);

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="w-full bg-white px-4 sm:px-10 md:mt-28 md:px-16 lg:px-24 py-12 sm:py-16"
    >
      {/* Header */}
      <div className="flex items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <p className="text-sm sm:text-base font-semibold text-zinc-800">
            Get to know Riala With Our
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#5A81FA] leading-tight">
            Blog Posts
          </h2>
        </div>
        <button
          className="flex items-center gap-2 bg-[#5A81FA] text-white
                     text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl
                     hover:bg-[#5A81FA]/80 transition-colors shrink-0"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          View All Posts
        </button>
      </div>

      {/*
        Grid — 3 columns on lg:
        Row 1: ImageCard (col-span-2, tall) | PlaceholderCard (col-span-1)
        Row 2: PlaceholderCard (col-span-1) | ImageCard (col-span-2, tall)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Row 1 */}
        <ImageCard
          post={posts[0]}
          className="lg:col-span-2 h-[220px] sm:h-[240px] md:h-[300px]"
        />
        <PlaceholderCard
          post={posts[1]}
          className="h-[220px] sm:h-[240px] md:h-[300px]"
        />

        {/* Row 2 */}
        <PlaceholderCard
          post={posts[2]}
          className="h-[220px] sm:h-[240px] md:h-[300px]"
        />
        <ImageCard
          post={posts[3]}
          className="lg:col-span-2 h-[220px] sm:h-[240px] md:h-[300px]"
        />

      </div>
    </section>
  );
};

export default BlogSection;