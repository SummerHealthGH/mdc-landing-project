"use client";

import React from "react";
import { useRouter } from "next/navigation";
import type { TrainingItem } from "../data/educationTrainingData";

const CardItem: React.FC<TrainingItem> = ({ title, description, type, pdf, link }) => {
  const router = useRouter();

  const handleClick = () => {
    if (type === "guideline" && pdf) {
      window.open(pdf, "_blank");
    } else if (type === "registration" && link) {
      router.push(link);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-[#0A3D62] mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed mb-4">{description}</p>

      <button
        onClick={handleClick}
        className={`px-4 py-2 rounded-md font-medium transition duration-300 ${
          type === "guideline"
            ? "bg-white text-[#0A3D62] border border-[#0A3D62] hover:bg-[#0A3D62] hover:text-white"
            : "bg-[#0A3D62] text-white hover:bg-[#072F4A]"
        }`}
      >
        {type === "guideline" ? "View Guideline" : "Register"}
      </button>
    </div>
  );
};

export default CardItem;
