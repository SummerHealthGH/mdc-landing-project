"use client";

import React from "react";
import { CheckSquare } from "lucide-react";

interface ServiceCard {
  title: string;
  description?: string;
  items?: string[];
  buttonText?: string;
  buttonLink?: string;
  isPdf?: boolean;
}

interface ServicesProps {
  services?: ServiceCard[];
}

const ServicesSection: React.FC<ServicesProps> = ({ services }) => {
  const defaultServices: ServiceCard[] = [
    {
      title: "Specialist Register",
      description:
        "Access the latest specialist register PDF for medical professionals.",
      buttonText: "SPECIALIST REGISTER",
      buttonLink: "/pdfs/specialist-register.pdf",
      isPdf: true, // ✅ marks this button to open PDF
    },
    {
      title: "All Doctors",
      items: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
    },
    {
      title: "Patients & The Public",
      items: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
    },
  ];

  const serviceData = services || defaultServices;

  const handleButtonClick = (service: ServiceCard) => {
    if (!service.buttonLink) return;

    if (service.isPdf) {
      // Open PDF in a new tab
      window.open(service.buttonLink, "_blank");
    } else {
      // Normal navigation
      window.location.href = service.buttonLink;
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#0A3D62] mb-12 uppercase tracking-wide">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-xl font-bold text-[#0A3D62] mb-4">
                {service.title}
              </h3>

              {service.description ? (
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
              ) : (
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <CheckSquare className="w-5 h-5 text-[#0A3D62] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {service.buttonText && (
                <button
                  onClick={() => handleButtonClick(service)}
                  className={`inline-block px-6 py-2 text-sm font-semibold rounded-md transition-colors duration-200 text-center
                    ${
                      service.isPdf
                        ? "bg-white text-[#0A3D62] border border-[#0A3D62] hover:bg-[#0A3D62] hover:text-white"
                        : "bg-[#0A3D62] text-white hover:bg-[#092C48]"
                    }`}
                >
                  {service.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
