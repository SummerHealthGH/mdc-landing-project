"use client";

import { Inter } from "next/font/google";
import { FaRocket, FaUsers, FaBullseye } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export default function MdcContent() {
  return (
    <div className={`w-full font-inter ${inter.variable} px-6 py-12`}>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Mission */}
        <div id="mission" className="flex flex-col items-center text-center p-8 rounded-xl shadow-md bg-white hover:bg-[#E9F4FF] text-black transition cursor-pointer group">
          <div className="bg-[#0A3D62] text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <FaRocket size={24} />
          </div>
          <h2 className="font-bold mb-2 group-hover:text-black">MISSION</h2>
          <p className="text-gray-700 group-hover:text-black text-sm transition">
            To advance excellence in medical and dental training and ethical professional practice in Ghana through quality assurance, education, registration, licensing, and promotion of international best practice.
          </p>
        </div>

        {/* Vision */}
        <div id="vision" className="flex flex-col items-center text-center p-8 rounded-xl shadow-md bg-white hover:bg-[#E9F4FF]  transition cursor-pointer group">
          <div className="bg-[#0A3D62] text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <FaBullseye size={24} />
          </div>
          <h2 className="font-bold mb-2 group-hover:text-black">VISION</h2>
          <p className="text-gray-700 group-hover:text-black text-sm transition">
            A competent, responsive, accountable, and innovative professional regulatory authority guiding the medical and dental professions for the public good.
          </p>
        </div>

        {/* Shared Values */}
        <div id="shared-values" className="flex flex-col items-center text-center p-8 rounded-xl shadow-md bg-white hover:bg-[#E9F4FF]  transition cursor-pointer group">
          <div className="bg-[#0A3D62] text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <FaUsers size={24} />
          </div>
          <h2 className="font-bold mb-2 group-hover:text-black">SHARED VALUES</h2>
          <p className="text-gray-700 group-hover:text-black text-sm transition">
            Guiding the Professions, Protecting the Public. Integrity, transparency, accountability, excellence, fairness, collaboration, and strategic partnership guide everything we do.
          </p>
        </div>
      </div>

      {/* Core Value Panels */}
      <div id="core-values" className="mt-12 max-w-4xl mx-auto space-y-6">

        {/* Core Values */}
        <section className="p-6 border-l-4 border-[#0A3D62] bg-gray-50 rounded-md">
          <h3 className="text-xl font-bold text-[#0A3D62] mb-2">CORE VALUES</h3>

          <div className="space-y-4">

            {/* Card */}
            <div className="group relative overflow-hidden p-4 bg-white rounded-md shadow-md hover:shadow-lg transform transition-all duration-500 hover:translate-x-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#0A3D62] before:transition-all before:duration-500 group-hover:before:w-full before:opacity-20">
              <p className="text-gray-700 font-normal ">
               <span className="font-semibold"> Integrity:</span> Provision of honest leadership; we share what we see with our stakeholders.
              </p>
            </div>

            <div className="group relative overflow-hidden p-4 bg-white rounded-md shadow-md hover:shadow-lg transform transition-all duration-500 hover:translate-x-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#0A3D62] before:transition-all before:duration-500 group-hover:before:w-full before:opacity-20">
              <p className="text-gray-700 font-normal">
              <span className="font-semibold">Transparency & Accountability:</span>    We commit to take responsibility, be open and accountable for our actions.
              </p>
            </div>

            <div className="group relative overflow-hidden p-4 bg-white rounded-md shadow-md hover:shadow-lg transform transition-all duration-500 hover:translate-x-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#0A3D62] before:transition-all before:duration-500 group-hover:before:w-full before:opacity-20">
              <p className="text-gray-700 font-normal">
               <span className="font-semibold">Excellence:</span>   We commit to achieving highest standards with open-mindedness and a willingness to continuous learning.
              </p>
            </div>

            <div className="group relative overflow-hidden p-4 bg-white rounded-md shadow-md hover:shadow-lg transform transition-all duration-500 hover:translate-x-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#0A3D62] before:transition-all before:duration-500 group-hover:before:w-full before:opacity-20">
              <p className="text-gray-700 font-normal">
                <span className="font-semibold"> Fairness:</span> We accord equal respect to all persons and treat them without prejudice.
              </p>
            </div>

            <div className="group relative overflow-hidden p-4 bg-white rounded-md shadow-md hover:shadow-lg transform transition-all duration-500 hover:translate-x-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#0A3D62] before:transition-all before:duration-500 group-hover:before:w-full before:opacity-20">
              <p className="text-gray-700 font-normal">
                <span className="font-semibold">Collaboration & Strategic Partnership:</span> We recognise healthcare as teamwork, so we work with others to support safe, high quality care for the public good.
              </p>
            </div>

          </div>
        </section>

        {/* FUNCTIONS */}
        <section id="functions" className="p-6 border-l-4 border-[#0A3D62] bg-gray-50 rounded-md space-y-4">
          <h3 className="text-xl font-bold text-[#0A3D62] mb-4">FUNCTIONS</h3>

          <div className="space-y-4">

            <div className="group relative overflow-hidden p-4 bg-white rounded-md shadow-md hover:shadow-lg transform transition-all duration-500 hover:translate-x-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#0A3D62] before:transition-all before:duration-500 group-hover:before:w-full before:opacity-20">
              <p className="text-gray-700 font-normal">Access facilities and contents of programmes for the training of doctors and dentists and physician assistants in training institutions</p>
            </div>

            <div className="group relative overflow-hidden p-4 bg-white rounded-md shadow-md hover:shadow-lg transform transition-all duration-500 hover:translate-x-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#0A3D62] before:transition-all before:duration-500 group-hover:before:w-full before:opacity-20">
              <p className="text-gray-700 font-normal">Ensure that the pre-registration training of new practiopner assistants in accredited training institutions meets the required standards.</p>
            </div>

            <div className="group relative overflow-hidden p-4 bg-white rounded-md shadow-md hover:shadow-lg transform transition-all duration-500 hover:translate-x-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#0A3D62] before:transition-all before:duration-500 group-hover:before:w-full before:opacity-20">
              <p className="text-gray-700 font-normal">Conduct examinations for foreign-trained practitioners.</p>
            </div>

            <div className="group relative overflow-hidden p-4 bg-white rounded-md shadow-md hover:shadow-lg transform transition-all duration-500 hover:translate-x-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#0A3D62] before:transition-all before:duration-500 group-hover:before:w-full before:opacity-20">
              <p className="text-gray-700 font-normal">Compile and keep registers of practitioners.</p>
            </div>

            <div className="group relative overflow-hidden p-4 bg-white rounded-md shadow-md hover:shadow-lg transform transition-all duration-500 hover:translate-x-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#0A3D62] before:transition-all before:duration-500 group-hover:before:w-full before:opacity-20">
              <p className="text-gray-700 font-normal">Prescribe and enforce professional standards and conduct.</p>
            </div>

            <div className="group relative overflow-hidden p-4 bg-white rounded-md shadow-md hover:shadow-lg transform transition-all duration-500 hover:translate-x-2 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#0A3D62] before:transition-all before:duration-500 group-hover:before:w-full before:opacity-20">
              <p className="text-gray-700 font-normal">Perform other ancillary functions to the object of rge Council.</p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
