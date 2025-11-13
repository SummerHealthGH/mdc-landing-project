"use client";

import AboutSection from "../components/AboutSection/AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#0A3D62] mb-6">About Us</h1>
        <AboutSection imageSrc={"/images/about-us.jpg"} />
      </div>
    </main>
  );
}
