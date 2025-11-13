"use client";

import React from "react";
import { educationTrainingData } from "./data/educationTrainingData";
import Section from "./components/Section";

const EducationTrainingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0A3D62] mb-4">
            Education & Training
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive educational and training programs for medical and dental professionals
          </p>
        </div>

        {/* Render all sections */}
        {educationTrainingData.map((section) => (
          <Section key={section.id} {...section} />
        ))}
      </main>
    </div>
  );
};

export default EducationTrainingPage;
