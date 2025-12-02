"use client";

import React from "react";
import { ArrowRight, FileText, UserCheck, ClipboardCheck, UserPlus } from "lucide-react";

interface QuickAccessItem {
  label: string;
  icon: React.ReactNode;
  variant?: "solid" | "outline";
  link: string;
}

interface QuickAccessProps {
  items?: QuickAccessItem[];
}

const QuickAccess: React.FC<QuickAccessProps> = ({ items }) => {
  const defaultItems: QuickAccessItem[] = [
    {
      label: "Registration",
      icon: <UserPlus className="w-5 h-5" />,
      variant: "solid",
      link: "#",
    },
    {
      label: "Annual Practice",
      icon: <ClipboardCheck className="w-5 h-5" />,
      variant: "outline",
      link: "#",
    },
    {
      label: "Verify Practitioner",
      icon: <UserCheck className="w-5 h-5" />,
      variant: "outline",
      link: "#",
    },
    {
      label: "Download Forms",
      icon: <FileText className="w-5 h-5" />,
      variant: "outline",
      link: "#",
    },
  ];

  const data = items || defaultItems;

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <h2 className="text-[#0A3D62] font-bold text-lg mb-6 uppercase">
        Quick Access
      </h2>

      <div className="flex flex-col gap-10">
        {data.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className={`flex items-center justify-between px-6 py-5 rounded-md text-sm font-semibold transition-all duration-200 ${
              item.variant === "solid"
                ? "bg-[#0A3D62] text-white hover:bg-[#092C48]"
                : "border-2 border-[#0A3D62] text-[#0A3D62] hover:bg-[#E9F4FF] hover:text-black"
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.label.toUpperCase()}</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;
