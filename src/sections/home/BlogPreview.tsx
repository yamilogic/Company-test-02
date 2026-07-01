'use client';

import Image from 'next/image';
import posts from '@/data/blog.json';

export default function BlogSection() {
    return (
        <section
            id="blog"
            className="w-full bg-white px-4 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-16 md:py-24"
        >
            <div className="max-w-[1312px] mx-auto">
                {/* Header */}
                <div className="flex items-start sm:items-center justify-between gap-4 mb-8 md:mb-12">
                    <div>
                        <p className="text-sm sm:text-base font-semibold text-zinc-800">
                            Get to know Riala With Our
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5A81FA] leading-tight mt-1">
                            Blog Posts
                        </h2>
                    </div>
                    <button
                        className="flex items-center gap-2 bg-[#5A81FA] text-white
                         text-xs sm:text-sm font-medium px-5 py-3 rounded-xl
                         hover:bg-[#5A81FA]/90 transition-colors shrink-0"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                        </svg>
                        View All Posts
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
                    {posts.map((post) => {
                        const isWide = post.id === 1 || post.id === 4;

                        return (
                            <div
                                key={post.id}
                                className={`relative overflow-hidden rounded-[24px] group cursor-pointer transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg
                                    ${isWide 
                                        ? 'col-span-1 md:col-span-8 h-[240px] md:h-[300px] lg:h-[330px] bg-[#d0d4e8]' 
                                        : 'col-span-1 md:col-span-4 h-[240px] md:h-[300px] lg:h-[330px] bg-[#eef0f6]'
                                    }`}
                            >
                                {/* Background Image */}
                                {post.image && (
                                    <div className="absolute inset-0 w-full h-full">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                            unoptimized
                                        />
                                        {post.hasImage && (
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                                        )}
                                    </div>
                                )}

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                                    <h3 className={`text-sm sm:text-base md:text-lg font-semibold leading-snug 
                                        ${post.hasImage ? 'text-white' : 'text-zinc-800'}`}>
                                        {post.title}
                                    </h3>
                                    <p className={`text-xs md:text-sm mt-2 leading-relaxed line-clamp-1 
                                        ${post.hasImage ? 'text-white/70' : 'text-zinc-500'}`}>
                                        {post.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}