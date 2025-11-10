"use client";

import { motion } from "framer-motion";
import Button, { ButtonProps } from "../ui/Button";

interface HeroButton {
  label: string;
  variant: "outline" | "solid";
  onClick?: () => void;
}

interface HeroButtonsProps {
  buttons: HeroButton[];
}

const HeroButtons: React.FC<HeroButtonsProps> = ({ buttons }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-4"
    >
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={button.variant}
          onClick={button.onClick}
          className="w-full sm:w-auto"
        >
          {button.label}
        </Button>
      ))}
    </motion.div>
  );
};

export default HeroButtons;