"use client";

import AboutContent from "./components/AboutContent";
import AboutHero from "./components/AboutHero";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 relative">
      {/* Main Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <AboutHero />
        <AboutContent />
      </div>
    </main>
  );
}
