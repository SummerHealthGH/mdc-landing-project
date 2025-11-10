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
  buttonLink = "#",
  imageSrc,
}) => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-white overflow-hidden">
      {/* Left content */}
      <div className="relative z-10 md:w-1/2 px-6 lg:px-16 py-16 space-y-6">
        <h4 className="text-[#0A3D62] font-semibold tracking-wide uppercase">
          {title}
        </h4>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A3D62]">
          {subtitle}
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-md">
          {description}
        </p>
        <a
          href={buttonLink}
          className="inline-block bg-[#0A3D62] text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-[#092C48] transition-colors duration-300"
        >
          {buttonText}
        </a>
      </div>

      {/* Right image with gradient overlay */}
      <div className="relative md:w-1/2 w-full h-[400px] md:h-auto">
        <Image
          src={imageSrc}
          alt="About us"
          width={800}
          height={600}
          priority
          className="object-cover w-full h-full"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-l from-white via-white/70 to-transparent"></div>
      </div>
    </section>
  );
};

export default AboutSection;
