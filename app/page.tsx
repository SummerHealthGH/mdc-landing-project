"use client";

import AboutSection from "./components/AboutSection/AboutSection";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation";
import BothSection from "./components/section/BothSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  const handleApplyLicense = () => console.log("Apply clicked");
  const handleRegisterCPD = () => console.log("Register clicked");

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <Hero
        title="MEDICAL AND DENTAL COUNCIL"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat."
        buttons={[
          {
            label: "APPLY FOR LICENSE",
            variant: "outline",
            onClick: handleApplyLicense,
          },
          {
            label: "REGISTER FOR CPD",
            variant: "solid",
            onClick: handleRegisterCPD,
          },
        ]}
        imageSrc="/images/hero.png"
        imageAlt="Medical professionals"
      />
      <ServicesSection/>
      <BothSection/>
      <AboutSection imageSrc={"/images/about-us.jpg"}/>
    </main>
  );
}
