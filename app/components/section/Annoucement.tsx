"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface Announcement {
  id: number;
  date: string;
  title: string;
  description: string;
  important?: boolean;
}

interface AnnouncementProps {
  announcements?: Announcement[];
  onSelect?: (announcement: Announcement) => void;
}

const Announcement: React.FC<AnnouncementProps> = ({
  announcements,
  onSelect,
}) => {
  const defaultAnnouncements: Announcement[] = [
    {
      id: 1,
      date: "Date",
      title: "New CPD Requirements for 2026",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua",
      important: true,
    },
    {
      id: 2,
      date: "Date",
      title: "New CPD Requirements for 2026",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 3,
      date: "Date",
      title: "New CPD Requirements for 2026",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 4,
      date: "Date",
      title: "New CPD Requirements for 2026",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  const data = announcements || defaultAnnouncements;
  const [activeId, setActiveId] = useState<number>(data[0]?.id || 1);

  const handleSelect = (item: Announcement) => {
    setActiveId(item.id);
    onSelect?.(item);
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-[#0B3954] text-sm md:text-base font-bold uppercase mb-4">
        LATEST ANNOUNCEMENT
      </h2>

      <div className="space-y-6 overflow-y-auto max-h-[400px] pr-2 scrollbar-thin scrollbar-thumb-[#0B3954]/30 scrollbar-track-transparent">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => handleSelect(item)}
            className={`border-l-4 pl-4 cursor-pointer transition-all duration-200 ${
              activeId === item.id
                ? "border-[#0B3954] bg-[#EAF3FA]"
                : "border-[#E5E7EB] hover:border-[#0B3954]/50"
            }`}
          >
            <p className="text-xs text-gray-500 mb-1">
              {item.date}
              {item.important && (
                <span className="ml-2 text-[#0B3954] font-medium">
                  Important
                </span>
              )}
            </p>
            <h3 className="text-sm font-bold text-[#0B3954] mb-1">
              {item.title}
            </h3>
            <p className="text-xs text-gray-600 leading-snug">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="mt-4 flex items-center text-[#0B3954] font-medium text-xs hover:underline"
      >
        View all Announcements
        <ArrowRight className="ml-1 w-4 h-4" />
      </a>
    </div>
  );
};

export default Announcement;
