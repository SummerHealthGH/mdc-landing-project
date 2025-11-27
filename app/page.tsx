"use client";

import { useRouter } from "next/navigation";
import AboutSection from "./Home/components/AboutSection/AboutSection";
import Hero from "./Home/components/Hero/Hero";
import ServicesSection from "./Home/components/ServicesSection";
import BothSection from "./Home/components/section/BothSection";
import NewsSection from "./Home/components/NewsUpdates/newSection";
import RegisterSection from "./Home/components/Register/RegisterCPD";

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
        description="We are the statutory body mandated under the Health Professions Regulatory Bodies Act, 2013 (Act 857), responsible for ensuring the highest standards in the training and practice of medicine and dentistry in Ghana."
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
      <div>
        <RegisterSection />
      </div>
      <div className="mb-16">
        <NewsSection />
      </div>
    </main>
  );
}
