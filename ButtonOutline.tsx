import React, { ButtonHTMLAttributes } from "react";

interface ButtonOutlineProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "extra small" | "small" | "default" | "large";
  iconName?: string;
}

export default function ButtonOutline({
  className = "",
  size = "large",
  iconName,
  children,
  ...props
}: ButtonOutlineProps) {
  // Map the design sizes to our global Tailwind token classes
  const sizeClasses = {
    "extra small": "px-2 py-1 text-para-xs",
    small: "px-3 py-[6px] text-para-sm",
    default: "px-4 py-2 text-para-sm",
    large: "px-5 py-3 text-para",
  };

  // Explicit icon sizing based on Figma specs
  const iconSizeClasses = {
    "extra small": "text-[12px]",
    small: "text-[14px]",
    default: "text-[14px]",
    large: "text-[16px]",
  };

  return (
    <button
      type="button"
      className={`border border-green-50 flex items-center justify-center rounded-[2px] gap-2 font-body whitespace-nowrap transition-colors text-interactive hover:text-gray-60 hover:bg-gray-00 active:text-gray-90 active:bg-gray-00 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {iconName && (
        <span className={`font-icon ${iconSizeClasses[size]}`}>
          {iconName}
        </span>
      )}
      
      {/* Using 'children' allows you to pass any text or elements into the button */}
      {children}
    </button>
  );
}