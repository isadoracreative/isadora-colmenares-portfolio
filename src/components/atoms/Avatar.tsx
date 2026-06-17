import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export default function Avatar({ src, alt, size = 80, className = "" }: AvatarProps) {
  return (
    <div className={`relative overflow-hidden rounded-full border border-gray-10 shrink-0 ${className}`} style={{ width: size, height: size }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
    </div>
  );
}
