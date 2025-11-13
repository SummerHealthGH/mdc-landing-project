"use client";

import Image from "next/image";
import { FC } from "react";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
}

const AboutSection: FC<AboutSectionProps> = ({
  title = "ABOUT US",
  subtitle = "LOREM IPSUM DASOR MEDUA",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt.",
  buttonText = "ABOUT US",
  buttonLink = "/about",
  imageSrc,
}) => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-white overflow-hidden">
      {/* Left content */}
      <div className="relative z-10 md:w-1/2 px-4 sm:px-6 lg:px-16 py-10 sm:py-12 md:py-16 space-y-6">
        <h4 className="text-[#0A3D62] font-semibold tracking-wide uppercase">
          {title}
        </h4>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A3D62]">
          {subtitle}
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-md">{description}</p>
        <a
          href={buttonLink}
          className="inline-block bg-[#0A3D62] text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-[#092C48] transition-colors duration-300"
        >
          {buttonText}
        </a>
      </div>

      {/* Right image with gradient overlay */}
      <div className="relative md:w-1/2 w-full h-[280px] sm:h-[360px] md:h-[500px]">
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt="About us"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            quality={75}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Gradient overlay - left edge only */}
        <div className="absolute inset-y-0 left-0 w-1/3 h-full bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default AboutSection;
