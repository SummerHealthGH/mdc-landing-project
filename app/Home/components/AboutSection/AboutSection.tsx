"use client";

import Image from "next/image";
import { FC } from "react";

interface AboutSectionProps {
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  hideButton?: boolean;
}

const AboutSection: FC<AboutSectionProps> = ({
  subtitle = "“Guiding the Professions, Protecting the Public”",
  description = "The Medical and Dental Council is the statutory body established by law, under Part II of the Health Professions Regulatory Bodies Act, 2013 (Act 857), to secure in the public interest the highest standards in the training and practice of medicine and dentistry in Ghana.",
  buttonText = "READ MORE",
  buttonLink = "/about",
  imageSrc,
  hideButton = false,
}) => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-white overflow-hidden">
      
      {/* Left content */}
      <div className="relative z-10 md:w-1/2 px-4 sm:px-6 lg:px-16 py-10 sm:py-12 md:py-16 space-y-6">
      
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A3D62]">
          {subtitle}
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-md">{description}</p>

        {/* 👉 Conditionally render button */}
        {!hideButton && (
          <a
            href={buttonLink}
            className="inline-block bg-[#0A3D62] text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-[#092C48] transition-colors duration-300"
          >
            {buttonText}
          </a>
        )}
      </div>

      {/* Right image */}
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

        {/* Gradient overlay */}
        <div className="absolute inset-y-0 left-0 w-1/3 h-full bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default AboutSection;
