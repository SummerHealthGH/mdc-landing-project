"use client";

import { motion } from "framer-motion";

interface HeroDescriptionProps {
  description: string;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({ description }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
    >
      {description}
    </motion.p>
  );
};

export default HeroDescription;