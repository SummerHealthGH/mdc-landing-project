"use client";

import AboutContent from "./components/about/AboutContent";
import AboutHero from "./components/about/AboutHero";
import Breadcrumbs from "./components/common/Breadcrumbs";


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
          ]}
        />

        <AboutHero />
        <AboutContent />
      </div>
    </main>
  );
}
