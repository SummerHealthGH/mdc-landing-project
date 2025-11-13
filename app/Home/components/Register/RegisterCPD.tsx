"use client";

import { FC } from "react";
import { BookOpen, Users } from "lucide-react";

interface RegisterSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  coursesCount?: string;
  learnersCount?: string;
}

const RegisterSection: FC<RegisterSectionProps> = ({
  title = "REGISTER CPD NOW",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  buttonText = "REGISTER CPD",
  buttonLink = "/authpage",
  coursesCount = "7.4K",
  learnersCount = "47.4K",
}) => {
  return (
    <section className="bg-[#E9F4FF] py-16 px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between rounded-lg">
      {/* Left content */}
      <div className="md:w-2/3 space-y-6">
        <h2 className="text-[#0A3D62] font-bold text-lg md:text-xl uppercase">
          {title}
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-xl">
          {description}
        </p>
        <a
          href={buttonLink}
          className="inline-block bg-[#0A3D62] text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-[#092C48] transition-colors duration-300"
        >
          {buttonText}
        </a>
      </div>

      {/* Right stats */}
      <div className="flex flex-col space-y-4 mt-8 md:mt-0 md:ml-10 w-full md:w-auto">
        <div className="flex items-center justify-between bg-white px-6 py-4 rounded-md shadow-sm">
          <div className="flex items-center space-x-3">
            <BookOpen className="text-[#0A3D62] w-5 h-5" />
            <span className="text-gray-700 font-medium">Courses</span>
          </div>
          <span className="text-[#0A3D62] font-bold">{coursesCount}</span>
        </div>

        <div className="flex items-center justify-between bg-white px-6 py-4 rounded-md shadow-sm">
          <div className="flex items-center space-x-3">
            <Users className="text-[#0A3D62] w-5 h-5" />
            <span className="text-gray-700 font-medium">Learners</span>
          </div>
          <span className="text-[#0A3D62] font-bold">{learnersCount}</span>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
