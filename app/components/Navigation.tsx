"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { label: "HERO", href: "#" },
    { label: "ABOUT US", hasDropdown: true },
    { label: "REGISTRATION", hasDropdown: true },
    { label: "COMPLAINTS", hasDropdown: true },
    { label: "EDUCATION & TRAINING", hasDropdown: true },
    { label: "CONTACT", href: "#" },
  ];

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar - Logo and Auth Buttons */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* ✅ Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png" // <-- Replace with your logo path
                  alt="Medical and Dental Council Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <span className="text-sm font-semibold text-[#0A3D62] uppercase tracking-tight">
                Medical and Dental Council
              </span>
            </div>

            {/* Register and Login Buttons */}
            <div className="flex items-center space-x-3">
              {/* Register Button (solid) */}
              <button className="px-6 py-2 bg-[#0A3D62] text-white text-sm font-semibold rounded-full hover:bg-[#092C48] transition-colors duration-200">
                REGISTER
              </button>

              {/* Login Button (outline) */}
              <button className="px-6 py-2 bg-white text-[#0A3D62] text-sm font-semibold border-2 border-[#0A3D62] rounded-full hover:bg-[#0A3D62] hover:text-white transition-all duration-200">
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Navigation Links and Search */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                {index > 0 && <span className="text-gray-300 mx-1">|</span>}
                <button
                  onMouseEnter={() =>
                    item.hasDropdown && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0A3D62] transition-colors duration-200 flex items-center group"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180 duration-200" />
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F5F8FA] hover:text-[#0A3D62]"
                      >
                        Option 1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F5F8FA] hover:text-[#0A3D62]"
                      >
                        Option 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F5F8FA] hover:text-[#0A3D62]"
                      >
                        Option 3
                      </a>
                    </div>
                  )}
                </button>
              </React.Fragment>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search topics..."
              className="pl-10 pr-4 py-2 w-56 text-sm border border-[#0A3D62] rounded-full focus:outline-none focus:ring-2 focus:ring-[#0A3D62]/30 focus:border-[#0A3D62]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#0A3D62]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
