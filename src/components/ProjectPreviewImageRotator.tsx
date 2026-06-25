'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export interface PreviewImage {
  src: string;
  alt: string;
}

interface ProjectPreviewImageRotatorProps {
  images: readonly PreviewImage[];
  sizes?: string;
}

const DISPLAY_MS = 4500;
const FADE_MS = 800;

export default function ProjectPreviewImageRotator({
  images,
  sizes = '(min-width: 1280px) 580px, (min-width: 640px) 50vw, 100vw',
}: ProjectPreviewImageRotatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);
    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reduceMotion || images.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, DISPLAY_MS);

    return () => window.clearInterval(intervalId);
  }, [images.length, reduceMotion]);

  const visibleIndex = reduceMotion ? 0 : activeIndex;

  return (
    <div
      role="img"
      aria-label={images[visibleIndex]?.alt ?? ''}
      className="absolute inset-0"
    >
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt=""
          aria-hidden
          fill
          className="object-cover transition-opacity ease-in-out"
          style={{
            opacity: index === visibleIndex ? 1 : 0,
            transitionDuration: `${FADE_MS}ms`,
          }}
          sizes={sizes}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
