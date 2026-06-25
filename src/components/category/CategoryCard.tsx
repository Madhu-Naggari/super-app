"use client";

import Image from "next/image";

interface CategoryCardProps {
  title: string;
  image: string;
  color: string;
  selected: boolean;
  onClick: () => void;
}

export default function CategoryCard({
  title,
  image,
  color,
  selected,
  onClick,
}: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        relative
        h-[180px]
        rounded-xl
        cursor-pointer
        overflow-hidden
        transition-all
        duration-300
        hover:scale-105
        ${selected ? "ring-4 ring-green-500" : ""}
      `}
      style={{ backgroundColor: color }}
    >
      <h3 className="absolute top-4 left-4 text-white font-bold text-xl z-10">
        {title}
      </h3>

      <div className="p-5 absolute h-28 w-full bottom-0">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}
