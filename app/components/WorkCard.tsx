"use client";

import Image from "next/image";

interface WorkCardProps {
  title: string;
  overlayHeading?: string;
  overlayInfo?: string;
  image: string;
  description: string;
}

export default function WorkCard({
  title,
  image,
  description,
  overlayHeading,
  overlayInfo,
}: WorkCardProps) {
  return (
    <div className="h-[300px] relative rounded-xl overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform"
      />
      <div className="absolute inset-0  ">
        <div className="absolute top-0 left-0 right-0 p-6 translate-y-4 ">
          <h3 className="font-bold text-xl mb-2">{overlayHeading}</h3>
          <p className="text-gray-200 text-sm">{overlayInfo}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-200 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
