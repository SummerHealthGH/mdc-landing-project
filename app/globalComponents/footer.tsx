"use client";

import { FC } from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="bg-[#0A3D62] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo and About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/logo.png"
              alt="Medical and Dental Council"
              width={40}
              height={40}
            />
            <h3 className="font-semibold text-lg">
              MEDICAL AND DENTAL COUNCIL
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-gray-200">
            “Guiding the Professions, Protecting the Public”
          </p>
        </div>

        {/* Links Group 1 */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-100">NAVIGATION</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="/" className="hover:text-gray-100">Home</a></li>
            <li><a href="/about" className="hover:text-gray-100">About Us</a></li>
            <li><a href="/registration" className="hover:text-gray-100">Registration & Licensing</a></li>
            <li><a href="/standards" className="hover:text-gray-100">Standards & Regulation</a></li>
          </ul>
        </div>

        {/* Links Group 2 */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-100">RESOURCES</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="/education-training" className="hover:text-gray-100">Education & Training</a></li>
            <li><a href="/complaints" className="hover:text-gray-100">Complaints & Investigations</a></li>
            <li><a href="/cpd" className="hover:text-gray-100">CPD Programmes</a></li>
            <li><a href="/resources" className="hover:text-gray-100">Documents & Downloads</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-100">SOCIALS</h4>

          <div className="flex items-center gap-4 mb-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Instagram size={18} />
            </a>
          </div>

          {/* Subscribe */}
          <div className="flex items-center">
            <input
              type="email"
              placeholder="enter your email"
              className="flex-1 px-3 py-2 rounded-l-md text-white text-sm focus:outline-none"
            />
            <button className="bg-white text-[#0A3D62] px-4 py-2 rounded-r-md font-semibold text-sm hover:bg-gray-100 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-gray-300">
        © 2025 Medical and Dental Council. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
