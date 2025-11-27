"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, MotionProps } from "framer-motion";
import clsx from "clsx";

// Remove ALL conflicting native events
type UnsafeEvents =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, UnsafeEvents> {
  variant?: "outline" | "solid";
  children: React.ReactNode;

  /** Only real Framer Motion props allowed */
  motionProps?: MotionProps;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "solid", className, children, motionProps = {}, ...props }, ref) => {
    const baseStyles =
      "px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#0A3D62]/30 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      outline:
        "bg-white text-[#0A3D62] border-2 border-[#0A3D62] hover:bg-[#0A3D62] hover:text-white",
      solid: "bg-[#0A3D62] text-white hover:bg-[#092c48] hover:shadow-lg",
    };

    return (
      <motion.button
        ref={ref}
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={clsx(baseStyles, variants[variant], className)}
        {...props}         // safe native props only
        {...motionProps}   // REAL framer-motion props only
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
