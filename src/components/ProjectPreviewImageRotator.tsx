'use client';

import { useEffect, useRef, useState } from 'react';
import ProgressiveImage from '@/components/ProgressiveImage';
import { resolveImageSrc } from '@/data/image-assets';

export interface PreviewImage {
  src: string;
  alt: string;
}

interface ProjectPreviewImageRotatorProps {
  images: readonly PreviewImage[];
  sizes?: string;
  /** Delays rotation start so multiple previews on one page do not fade in sync. */
  rotationOffsetMs?: number;
}

const DISPLAY_MS = 4500;
const FADE_MS = 800;

export default function ProjectPreviewImageRotator({
  images,
  sizes = '(min-width: 1280px) 580px, (min-width: 640px) 50vw, 100vw',
  rotationOffsetMs = 0,
}: ProjectPreviewImageRotatorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [mountedIndices, setMountedIndices] = useState<number[]>([0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);
    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || hasEnteredView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasEnteredView]);

  useEffect(() => {
    if (reduceMotion || images.length <= 1 || !hasEnteredView) return;

    const advance = () => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    };

    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(advance, DISPLAY_MS);
    }, rotationOffsetMs);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [images.length, reduceMotion, rotationOffsetMs, hasEnteredView]);

  useEffect(() => {
    if (images.length <= 1) return;

    let cancelled = false;
    let nextIndex = 1;

    const preloadNext = () => {
      if (cancelled || nextIndex >= images.length) return;

      const indexToLoad = nextIndex;
      nextIndex += 1;

      const img = new window.Image();
      img.src = resolveImageSrc(images[indexToLoad].src);
      img.onload = () => {
        if (cancelled) return;
        setMountedIndices((current) =>
          current.includes(indexToLoad) ? current : [...current, indexToLoad],
        );
        preloadNext();
      };
      img.onerror = () => {
        if (!cancelled) preloadNext();
      };
    };

    const schedulePreload = window.requestIdleCallback ?? ((cb) => window.setTimeout(cb, 300));
    const idleId = schedulePreload(preloadNext);

    return () => {
      cancelled = true;
      if (window.cancelIdleCallback) {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    };
  }, [images]);

  const visibleIndex = reduceMotion ? 0 : activeIndex;

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={images[visibleIndex]?.alt ?? ''}
      className="absolute inset-0 bg-gray-10"
    >
      {images.map((image, index) =>
        mountedIndices.includes(index) ? (
          <ProgressiveImage
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
        ) : null,
      )}
    </div>
  );
}
