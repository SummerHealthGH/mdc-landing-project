"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroImageProps {
  src: string;
  alt: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full h-full min-h-[240px] sm:min-h-[320px] md:min-h-[480px] lg:min-h-[600px]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        quality={80}
        className="object-cover rounded-2xl shadow-2xl"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </motion.div>
  );
};

export default HeroImage;
