'use client';

import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  desc: string;
  date: string;
  image: string;
  badge: string | null;
  category: string;
  author: string;
}

interface BlogCardProps {
  post: BlogPost;
  isLatest?: boolean;
}

export default function BlogCard({ post, isLatest = false }: BlogCardProps) {
  return (
    <article className="w-full max-w-[361px] md:w-[794px] md:max-w-full lg:w-[312px] h-[326px] md:h-[150px] lg:h-[350px] flex flex-col md:flex-row lg:flex-col bg-[#f4f6fa]/60 hover:bg-[#f4f6fa] hover:shadow-md transition-all duration-300 rounded-2xl border border-[#E0E2E8] overflow-hidden group cursor-pointer shrink-0 md:items-center lg:items-stretch">
      {/* Image container */}
      <div className="relative w-full h-[180px] md:w-[264px] md:h-[180px] lg:w-[312px] lg:h-[200px] shrink-0 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        {/* Badge: shown only if it is the latest post */}
        {isLatest && (
          <div className="absolute top-3 right-3 bg-[#5A81FA] text-white text-[10px] font-bold tracking-wider px-2 py-1 rounded flex items-center gap-1 shadow-sm">
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.87 1.4-8.168L.132 9.21l8.2-1.192z" />
            </svg>
            <span>NEW</span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-center p-4 md:p-5 lg:p-4 flex-1 h-[146px] md:h-[150px] lg:h-[150px] gap-1.5">
        <div className="flex flex-col gap-1.5">
          {/* Date */}
          <span className="text-[11px] font-medium text-zinc-400 block">
            {post.date}
          </span>
          {/* Title */}
          <h3 className="text-sm md:text-base lg:text-sm font-bold text-zinc-800 leading-snug group-hover:text-[#5A81FA] transition-colors line-clamp-2">
            {post.title}
          </h3>
          {/* Description */}
          <p className="text-[11px] md:text-xs lg:text-[11px] text-zinc-500 leading-relaxed line-clamp-2">
            {post.desc}
          </p>
        </div>
      </div>
    </article>
  );
}
