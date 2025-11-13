"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter();
  const pathname = usePathname();

  // track the currently active top-level nav item (default to home)
  const [activeTop, setActiveTop] = useState<string>("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Keep activeTop in sync with the current pathname
  useEffect(() => {
    if (!pathname) return;
    // If pathname is just "/" or empty, set to home
    if (pathname === "/" || pathname === "") {
      setActiveTop("");
    } else {
      // Find a nav item whose href matches the start of the pathname
      const matched = navItems.find(
        (n) => n.href && pathname.startsWith(n.href)
      );
      if (matched) {
        setActiveTop(matched.label);
      }
    }
  }, [pathname]);

  const handleNavigation = (href: string, label: string) => {
    setIsTransitioning(true);
    setActiveTop(label);
    router.push(href);
    setTimeout(() => setIsTransitioning(false), 300);
  };

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
    {
      label: "ABOUT US",
      href: "/about",
      hasDropdown: true,
      subItems: [{ label: "About MDC", href: "/about" }],
    },
    {
      label: "REGISTRATION & LICENSING",
      href: "/register",
      hasDropdown: true,
      subItems: [{ label: "Register", href: "/register" }],
    },
    {
      label: "COMPLAINTS",
      href: "/complaints",
      hasDropdown: true,
      subItems: [{ label: "File Complaint", href: "/complaints" }],
    },
    {
      label: "EDUCATION & TRAINING",
      href: "/education-training",
      hasDropdown: true,
      subItems: [
        {
          label: "Education",
          hasSubDropdown: true,
          subSubItems: [
            {
              label: "Registration and Examinations",
              href: "/education-training#registration-examinations",
            },
            {
              label: "PA Licentiate Exams",
              href: "/education-training#pa-licentiate-exams",
            },
            {
              label: "Exams Visitation",
              href: "/education-training#exams-visitation",
            },
          ],
        },
        {
          label: "Housemanship / Internship",
          hasSubDropdown: true,
          subSubItems: [
            {
              label: "Housemanship Medical and Dental Officers",
              href: "/education-training#housemanship-medical-dental",
            },
            {
              label: "Internship PAs and CRAs",
              href: "/education-training#internship-pas-cras",
            },
          ],
        },
        {
          label: "CPD",
          hasSubDropdown: true,
          subSubItems: [
            {
              label: "CPD Policies",
              href: "/education-training#cpd-policies",
            },
            {
              label: "Accredited CPD Providers",
              href: "/education-training#accredited-cpd-providers",
            },
            {
              label: "Accredited CPD Programs",
              href: "/education-training#accredited-cpd-programs",
            },
            {
              label: "CPD Accredited Forms",
              href: "/education-training#cpd-accredited-forms",
            },
          ],
        },
        {
          label: "Accredited Training Institution",
          hasSubDropdown: true,
          subSubItems: [
            {
              label: "Medical and Dental Training Schools",
              href: "/education-training#medical-dental-training-schools",
            },
            {
              label: "PAs and CRA Training Schools",
              href: "/education-training#pas-cra-training-schools",
            },
          ],
        },
      ],
    },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      {/* Top Bar with Logo and Register/Login Buttons - Responsive */}
      <div className="border-b border-gray-100">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo with Text - Clickable to go home */}
            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
            >
              {/* Logo from images */}
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Medical and Dental Council Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* Text next to logo - Hidden on very small screens */}
              <span className="hidden sm:inline text-xs lg:text-sm font-semibold text-[#6B8BA8] uppercase tracking-tight whitespace-nowrap">
                Medical and Dental Council
              </span>
            </button>

            {/* Right: Register & Login Buttons - Hidden on Mobile */}
            <div className="hidden lg:flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
              <button className="cursor-pointer px-4 lg:px-6 py-2 bg-[#0A3D62] text-white text-xs lg:text-sm font-semibold rounded-lg hover:bg-[#092C48] transition-colors duration-200">
                REGISTER
              </button>
              <button className="cursor-pointer px-4 lg:px-6 py-2 bg-white text-[#0A3D62] text-xs lg:text-sm font-semibold border-2 border-[#0A3D62] rounded-lg hover:bg-[#0A3D62] hover:text-white transition-all duration-200">
                LOGIN
              </button>
            </div>

            {/* Hamburger for Mobile/Tablet */}
            <button
              className="lg:hidden p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
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

      {/* Main Menu and Search Bar - Desktop Only */}
      <div className="hidden lg:block border-t border-gray-100">
        <div className="w-full px-8">
          <div className="flex items-center justify-between h-14">
            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <React.Fragment key={item.label}>
                  {index > 0 && <span className="text-gray-300 mx-1">|</span>}
                  <div
                    className="relative group"
                    onMouseEnter={() =>
                      item.hasDropdown && setActiveDropdown(item.label)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setActiveTop(item.label)}
                        className={`cursor-pointer relative px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center whitespace-nowrap ${
                          item.label === activeTop
                            ? "text-[#0A3D62] font-semibold scale-105"
                            : "text-gray-700 hover:text-[#0A3D62]"
                        }`}
                      >
                        {item.label}
                        {item.hasDropdown && (
                          <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                        )}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          item.hasDropdown &&
                            setActiveDropdown(
                              activeDropdown === item.label ? null : item.label
                            );
                        }}
                        className={`cursor-pointer relative px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center whitespace-nowrap ${
                          item.label === activeTop
                            ? "text-[#0A3D62] font-semibold scale-105"
                            : "text-gray-700 hover:text-[#0A3D62]"
                        }`}
                      >
                        {item.label}
                        {item.hasDropdown && (
                          <ChevronDown
                            className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            } group-hover:rotate-180`}
                          />
                        )}
                      </button>
                    )}

                    {/* Dropdown Menu - Below the nav item */}
                    {item.hasDropdown && activeDropdown === item.label && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 min-w-max bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                        {item.subItems?.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            className="relative group/sub"
                            onMouseEnter={() =>
                              setActiveSubDropdown(subItem.label)
                            }
                            onMouseLeave={() => setActiveSubDropdown(null)}
                          >
                            {subItem.hasSubDropdown && subItem.subSubItems ? (
                              <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-[#0A3D62] hover:text-white cursor-pointer transition-colors duration-200">
                                <span>{subItem.label}</span>
                                <ChevronDown className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/sub:rotate-180" />
                              </div>
                            ) : (
                              <Link
                                href={subItem.href || "#"}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0A3D62] hover:text-white transition-colors duration-200 no-underline"
                              >
                                {subItem.label}
                              </Link>
                            )}

                            {/* Sub-sub dropdown - Beside the parent dropdown */}
                            {subItem.hasSubDropdown &&
                              subItem.subSubItems &&
                              activeSubDropdown === subItem.label && (
                                <div className="absolute left-full top-0 ml-0 mt-0 w-80 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                                  {subItem.subSubItems.map(
                                    (subSubItem, subSubIndex) => (
                                      <Link
                                        key={subSubIndex}
                                        href={subSubItem.href}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0A3D62] hover:text-white transition-colors duration-200 no-underline text-left break-words"
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
                </React.Fragment>
              ))}
            </div>

            {/* Search Bar */}
            <div className="hidden lg:block relative ml-4 flex-shrink-0">
              <input
                type="text"
                placeholder="Search the Register"
                className="pl-10 pr-4 py-2 w-48 xl:w-56 text-sm border border-[#0A3D62] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A3D62]/30 focus:border-[#0A3D62]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#0A3D62]" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Drawer - Fully Responsive */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/40"
          onClick={() => setMobileOpen(false)}
        >
          <nav
            className="absolute top-0 left-0 w-full sm:w-80 h-full bg-white shadow-lg p-4 sm:p-6 flex flex-col gap-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="cursor-pointer self-end p-2 mb-2 hover:bg-gray-100 rounded-lg transition-colors"
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

            {/* Mobile Register & Login Buttons */}
            <div className="flex flex-col gap-2 mb-4 border-b border-gray-200 pb-4">
              <button className="cursor-pointer w-full px-4 py-3 bg-[#0A3D62] text-white text-sm font-semibold rounded-lg hover:bg-[#092C48] transition-colors duration-200">
                REGISTER
              </button>
              <button className="cursor-pointer w-full px-4 py-3 bg-white text-[#0A3D62] text-sm font-semibold border-2 border-[#0A3D62] rounded-lg hover:bg-[#0A3D62] hover:text-white transition-all duration-200">
                LOGIN
              </button>
            </div>

            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col">
                {item.href && !item.hasDropdown ? (
                  <Link
                    href={item.href}
                    className="text-left px-3 py-3 text-sm font-medium text-gray-700 hover:text-[#0A3D62] transition-colors duration-200 no-underline"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div
                    className={`flex items-center justify-between px-3 py-3 text-sm font-medium transition-colors duration-200 w-full rounded-lg ${
                      item.label === activeTop
                        ? "text-[#0A3D62] font-semibold"
                        : "text-gray-700 hover:text-[#0A3D62]"
                    }`}
                  >
                    <div className="flex-1 text-left">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="no-underline block"
                          onClick={() => {
                            if (item.href) {
                              handleNavigation(item.href, item.label);
                            }
                            setMobileOpen(false);
                          }}
                        >
                          <span className="block transition-transform duration-300">
                            {item.label}
                          </span>
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            item.hasDropdown && toggleMobileExpand(item.label)
                          }
                          className="w-full text-left"
                        >
                          {item.label}
                        </button>
                      )}
                    </div>

                    {item.hasDropdown && (
                      <button
                        type="button"
                        onClick={() => toggleMobileExpand(item.label)}
                        className="p-2 rounded"
                        aria-expanded={mobileExpandedItems.has(item.label)}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileExpandedItems.has(item.label)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                )}

                {/* Mobile Submenu */}
                {item.hasDropdown &&
                  item.subItems &&
                  mobileExpandedItems.has(item.label) && (
                    <div className="pl-4 flex flex-col gap-2 mt-2 border-l-2 border-[#0A3D62]/20">
                      {item.subItems.map((subItem, subIndex) => (
                        <div key={subIndex}>
                          <button
                            onClick={() =>
                              subItem.hasSubDropdown &&
                              toggleMobileExpand(
                                `${item.label}-${subItem.label}`
                              )
                            }
                            className="text-left px-3 py-2 text-xs font-medium text-gray-600 hover:text-[#0A3D62] transition-colors duration-200 flex items-center justify-between w-full rounded"
                          >
                            <span>{subItem.label}</span>
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

                          {/* Sub-submenu */}
                          {subItem.hasSubDropdown &&
                            subItem.subSubItems &&
                            mobileExpandedItems.has(
                              `${item.label}-${subItem.label}`
                            ) && (
                              <div className="pl-4 flex flex-col gap-1 mt-1 border-l-2 border-gray-200">
                                {subItem.subSubItems.map(
                                  (subSubItem, subSubIndex) => (
                                    <Link
                                      key={subSubIndex}
                                      href={subSubItem.href}
                                      className="block px-3 py-1 text-xs text-gray-600 hover:text-[#0A3D62] transition-colors duration-200 no-underline rounded"
                                      onClick={() => setMobileOpen(false)}
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

            {/* Mobile Search Bar */}
            <div className="mt-6 relative border-t border-gray-200 pt-4">
              <input
                type="text"
                placeholder="Search the Register"
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
