"use client";

import { useRouter } from "next/navigation";

import AboutSection from "./Home/components/AboutSection/AboutSection";
import Hero from "./Home/components/Hero/Hero";
import ServicesSection from "./Home/components/ServicesSection";
import BothSection from "./Home/components/section/BothSection";
import RegisterSection from "./Home/components/Register/RegisterCPD";
import NewsSection from "./Home/components/NewsUpdates/newSection";

export default function Home() {
  const router = useRouter();

  // ✅ Handle navigation to the /register page
  const handleApplyLicense = () => {
    router.push("/register");
  };

  // Example for CPD registration — you can change this path too
  const handleRegisterCPD = () => {
    router.push("/authpage");
  };

  return (
    <main className="min-h-screen bg-gray-50 transition-opacity duration-300">
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
      <ServicesSection />
      <BothSection />
      <AboutSection imageSrc="/images/about-us.jpg" />
      <div className="my-16">
        <RegisterSection />
      </div>
      <div className="mb-16">
        <NewsSection />
      </div>
    </main>
  );
}
