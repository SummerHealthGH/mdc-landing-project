"use client";

import AboutSection from "@/app/Home/components/AboutSection/AboutSection";

export default function AboutHero() {
  return (
    <section>
      <h1 className="text-3xl font-extrabold text-[#0A3D62] mb-6">
        About Us
      </h1>

<AboutSection imageSrc="/images/about-us.jpg" hideButton />
    </section>
  );
}
