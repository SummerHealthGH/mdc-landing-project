"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "solid", className, children, ...props }, ref) => {
    const baseStyles =
      "px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#0A3D62]/30 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      outline:
        "bg-white text-[#0A3D62] border-2 border-[#0A3D62] hover:bg-[#0A3D62] hover:text-white",
      solid: "bg-[#0A3D62] text-white hover:bg-[#092c48] hover:shadow-lg",
    };

    return (
      <button
        ref={ref}
        type="button"
        className={clsx(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
