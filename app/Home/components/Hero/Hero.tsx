"use client";

import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";

interface HeroButton {
  label: string;
  variant: "outline" | "solid";
  onClick?: () => void;
}

interface HeroProps {
  title: string;
  description: string;
  buttons: HeroButton[];
  imageSrc: string;
  imageAlt?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  buttons,
  imageSrc,
  imageAlt = "Healthcare professionals collaborating",
}) => {
  return (
    <header className="bg-white">
      <div className="max-w-8xl mx-auto md:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <HeroTitle title={title} />
            <HeroDescription description={description} />
            <HeroButtons buttons={buttons} />
          </div>

          {/* Right Image */}
          <div className="order-first md:order-last">
            <HeroImage src={imageSrc} alt={imageAlt} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;