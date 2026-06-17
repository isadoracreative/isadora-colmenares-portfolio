import React from "react";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export default function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h2 className="text-h2 font-heading text-text-primary tracking-tight">{title}</h2>
      <div className="w-12 h-1 bg-green-50 rounded-full"></div>
    </div>
  );
}
