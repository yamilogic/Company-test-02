import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  image: string | StaticImageData;
  title: string;
  excerpt: string;
  date: string;
  isNew?: boolean;
}

export default function BlogCard({ image, title, excerpt, date, isNew }: BlogCardProps) {
  return (
    <>
      {/* Mobile: vertical card — full width, image on top */}
      <div className="md:hidden bg-white rounded-2xl overflow-hidden shadow-sm">
        <div className="relative h-44 w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <p className="text-[11px] text-gray-400">{date}</p>
          <h3 className="font-bold text-sm mt-1 leading-snug">{title}</h3>
          <p className="text-xs text-gray-400 mt-1.5 line-clamp-2">{excerpt}</p>
        </div>
      </div>

      {/* Tablet: horizontal card — image left, text right */}
      <div className="hidden md:flex xl:hidden bg-white rounded-2xl overflow-hidden shadow-sm">
        <div className="relative w-36 h-28 shrink-0">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-3 flex flex-col justify-center min-w-0">
          <p className="text-[10px] text-gray-400">{date}</p>
          <h3 className="font-bold text-sm mt-1 leading-snug line-clamp-2">{title}</h3>
          <p className="text-xs text-gray-400 mt-1 line-clamp-2">{excerpt}</p>
        </div>
      </div>

      {/* Desktop: vertical card — image on top, text below */}
      <div className="hidden xl:block bg-white rounded-2xl overflow-hidden shadow-sm">
        <div className="relative h-40 w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <p className="text-[11px] text-gray-400">{date}</p>
          <h3 className="font-bold text-sm text-zinc-800 mt-1 leading-snug">{title}</h3>
          <p className="text-xs text-gray-400 mt-1.5 line-clamp-2">{excerpt}</p>
        </div>
      </div>
    </>
  );
}