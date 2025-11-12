"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";

interface SubSubItem {
  label: string;
  href: string;
}

interface SubItem {
  label: string;
  href?: string;
  hasSubDropdown?: boolean;
  subSubItems?: SubSubItem[];
}

interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  subItems?: SubItem[];
}

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(
    null
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<Set<string>>(
    new Set()
  );

  const toggleMobileExpand = (label: string) => {
    setMobileExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(label)) {
        newSet.delete(label);
      } else {
        newSet.add(label);
      }
      return newSet;
    });
  };

  const navItems: NavItem[] = [
    { label: "HERO", href: "#" },
    {
      label: "ABOUT US",
      hasDropdown: true,
      subItems: [{ label: "About MDC", href: "#" }],
    },
    {
      label: "REGISTRATION",
      hasDropdown: true,
      subItems: [{ label: "Register", href: "#" }],
    },
    {
      label: "COMPLAINTS",
      hasDropdown: true,
      subItems: [{ label: "File Complaint", href: "#" }],
    },
    {
      label: "EDUCATION & TRAINING",
      hasDropdown: true,
      subItems: [
        {
          label: "Education",
          hasSubDropdown: true,
          subSubItems: [
            { label: "Registration and Examinations", href: "#" },
            { label: "PA Licentiate Exams", href: "#" },
            { label: "Exams Visitation", href: "#" },
          ],
        },
        {
          label: "Housemanship / Internship",
          hasSubDropdown: true,
          subSubItems: [
            { label: "Housemanship Medical and Dental Officers", href: "#" },
            { label: "Internship PAs and CRAs", href: "#" },
          ],
        },
        {
          label: "CPD",
          hasSubDropdown: true,
          subSubItems: [
            { label: "CPD Policies", href: "#" },
            { label: "Accredited CPD Providers", href: "#" },
            { label: "Accredited CPD Programs", href: "#" },
            { label: "CPD Accredited Forms", href: "#" },
          ],
        },
        {
          label: "Accredited Training Institution",
          hasSubDropdown: true,
          subSubItems: [
            { label: "Medical and Dental Training Schools", href: "#" },
            { label: "PAs and CRA Training Schools", href: "#" },
          ],
        },
      ],
    },
    { label: "CONTACT", href: "#" },
  ];

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
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

            {/* ✅ Right Section */}
            <div className="flex items-center space-x-4">
              {/* Register & Login Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <button className="cursor-pointer px-6 py-2 bg-[#0A3D62] text-white text-sm font-semibold rounded-full hover:bg-[#092C48] transition-colors duration-200">
                  REGISTER
                </button>
                <button className="cursor-pointer px-6 py-2 bg-white text-[#0A3D62] text-sm font-semibold border-2 border-[#0A3D62] rounded-full hover:bg-[#0A3D62] hover:text-white transition-all duration-200">
                  LOGIN
                </button>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <React.Fragment key={item.label}>
                    {index > 0 && <span className="text-gray-300 mx-1">|</span>}
                    <button
                      onMouseEnter={() =>
                        item.hasDropdown && setActiveDropdown(item.label)
                      }
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="cursor-pointer relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0A3D62] transition-colors duration-200 flex items-center group"
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180 duration-200" />
                      )}

                      {/* Dropdown Menu */}
                      {item.hasDropdown && activeDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 min-w-max bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                          {item.subItems?.map((subItem, subIndex) => (
                            <div
                              key={subIndex}
                              className="relative group"
                              onMouseEnter={() =>
                                setActiveSubDropdown(subItem.label)
                              }
                              onMouseLeave={() => setActiveSubDropdown(null)}
                            >
                              {subItem.hasSubDropdown &&
                              subItem.subSubItems ? (
                                <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-[#0A3D62] hover:text-white cursor-pointer transition-colors duration-200">
                                  <span>{subItem.label}</span>
                                  <ChevronDown className="w-4 h-4 ml-2" />
                                </div>
                              ) : (
                                <Link
                                  href={subItem.href || "#"}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0A3D62] hover:text-white transition-colors duration-200 no-underline"
                                >
                                  {subItem.label}
                                </Link>
                              )}

                              {/* Sub-sub dropdown */}
                              {subItem.hasSubDropdown &&
                                subItem.subSubItems &&
                                activeSubDropdown === subItem.label && (
                                  <div className="absolute left-full top-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                                    {subItem.subSubItems.map(
                                      (subSubItem, subSubIndex) => (
                                        <Link
                                          key={subSubIndex}
                                          href={subSubItem.href}
                                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0A3D62] hover:text-white transition-colors duration-200 no-underline text-left"
                                        >
                                          {subSubItem.label}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      )}
                    </button>
                  </React.Fragment>
                ))}
              </div>

              {/* Search Bar */}
              <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="Search topics..."
                  className="pl-10 pr-4 py-2 w-56 text-sm border border-[#0A3D62] rounded-full focus:outline-none focus:ring-2 focus:ring-[#0A3D62]/30 focus:border-[#0A3D62]"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#0A3D62]" />
              </div>

              {/* Hamburger for Mobile */}
              <button
                className="cursor-pointer md:hidden ml-2 p-2 rounded-full border border-gray-200"
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

      {/* ✅ Mobile Drawer */}
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
              className="cursor-pointer self-end mb-4 p-2"
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
              <div key={item.label} className="flex flex-col">
                {item.href && !item.hasDropdown ? (
                  <Link
                    href={item.href}
                    className="text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0A3D62] transition-colors duration-200 no-underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() =>
                      item.hasDropdown && toggleMobileExpand(item.label)
                    }
                    className="text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0A3D62] transition-colors duration-200 flex items-center justify-between w-full"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileExpandedItems.has(item.label)
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    )}
                  </button>
                )}

                {item.hasDropdown &&
                  item.subItems &&
                  mobileExpandedItems.has(item.label) && (
                    <div className="pl-4 flex flex-col gap-2 mt-2 border-l-2 border-gray-200">
                      {item.subItems.map((subItem, subIndex) => (
                        <div key={subIndex}>
                          <button
                            onClick={() =>
                              subItem.hasSubDropdown &&
                              toggleMobileExpand(
                                `${item.label}-${subItem.label}`
                              )
                            }
                            className="text-left px-3 py-1 text-xs font-medium text-gray-600 hover:text-[#0A3D62] transition-colors duration-200 flex items-center justify-between w-full"
                          >
                            {subItem.label}
                            {subItem.hasSubDropdown && (
                              <ChevronDown
                                className={`w-3 h-3 transition-transform duration-200 ${
                                  mobileExpandedItems.has(
                                    `${item.label}-${subItem.label}`
                                  )
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            )}
                          </button>

                          {subItem.hasSubDropdown &&
                            subItem.subSubItems &&
                            mobileExpandedItems.has(
                              `${item.label}-${subItem.label}`
                            ) && (
                              <div className="pl-4 flex flex-col gap-1 mt-1 border-l-2 border-gray-100">
                                {subItem.subSubItems.map(
                                  (subSubItem, subSubIndex) => (
                                    <Link
                                      key={subSubIndex}
                                      href={subSubItem.href}
                                      className="block px-3 py-1 text-xs text-gray-600 hover:text-[#0A3D62] transition-colors duration-200 no-underline"
                                    >
                                      {subSubItem.label}
                                    </Link>
                                  )
                                )}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            <div className="mt-6 relative">
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
  );
};

export default Navigation;
