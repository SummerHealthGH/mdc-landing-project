"use client";


interface HeroTitleProps {
  title: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ title }) => {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#092C48] uppercase leading-tight mb-6"
    >
      {title}
    </h1>
  );
};

export default HeroTitle;