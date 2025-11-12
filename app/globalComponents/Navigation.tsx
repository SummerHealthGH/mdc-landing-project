"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

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
                  src="/images/logo.png"
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
              <button className="px-6 py-2 bg-[#0A3D62] text-white text-sm font-semibold rounded-full hover:bg-[#092C48] transition-colors duration-200">
                REGISTER
              </button>
              <button className="px-6 py-2 bg-white text-[#0A3D62] text-sm font-semibold border-2 border-[#0A3D62] rounded-full hover:bg-[#0A3D62] hover:text-white transition-all duration-200">
                LOGIN
              </button>
              {/* Hamburger for mobile */}
              <button
                className="md:hidden ml-2 p-2 rounded-full border border-gray-200"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Open menu"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#0A3D62"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Navigation Links and Search */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="hidden md:flex items-center justify-between h-16">
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

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div
            className="md:hidden fixed inset-0 z-50 bg-black/40"
            onClick={() => setMobileOpen(false)}
          >
            <nav
              className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="self-end mb-4 p-2"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#0A3D62"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </button>
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0A3D62] transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-6">
                <input
                  type="text"
                  placeholder="Search topics..."
                  className="pl-10 pr-4 py-2 w-full text-sm border border-[#0A3D62] rounded-full focus:outline-none focus:ring-2 focus:ring-[#0A3D62]/30 focus:border-[#0A3D62]"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#0A3D62]" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
