"use client"

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
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 gap-10">
        {/* Left content */}
        <div className="md:w-1/2 space-y-6">
          <h4 className="text-[#0A3D62] font-semibold tracking-wide">{title}</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A3D62]">
            {subtitle}
          </h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>

          <a
            href={buttonLink}
            className="inline-block bg-[#0A3D62] text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-[#092C48] transition-colors duration-300"
          >
            {buttonText}
          </a>
        </div>

        {/* Right image */}
        <div className="md:w-1/2 relative">
          <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={imageSrc}
              alt="About us"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
