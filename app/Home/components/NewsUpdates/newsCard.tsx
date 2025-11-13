"use client";

import { FC } from "react";
import Image from "next/image";

interface NewsCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  featured?: boolean;
}

const NewsCard: FC<NewsCardProps> = ({
  title,
  description,
  imageSrc,
  link,
  featured = false,
}) => {
  return (
    <a
      href={link}
      className={`group block bg-white rounded-xl overflow-hidden text-left 
        transition-all duration-300 ease-in-out no-underline
        border border-gray-100
        hover:shadow-lg hover:scale-[1.02] hover:border-gray-200
        active:scale-[0.98] active:shadow-inner
        ${featured ? "md:col-span-2 md:row-span-2" : "w-full"}
      `}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "h-64 md:h-80" : "h-48 md:h-56"
        }`}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          loading="lazy"
          quality={75}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div
        className={`relative overflow-hidden ${
          featured ? "aspect-square md:h-56" : "h-48 md:h-56"
        }`}
      ></div>

      <div className="p-6 space-y-3">
        <h3 className="text-[#0A3D62] font-semibold text-base md:text-lg group-hover:text-[#092C48] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <div className="inline-flex items-center text-[#0A3D62] text-sm font-semibold group-hover:text-[#092C48] transition-colors duration-300">
          Read More
          <svg
            className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
