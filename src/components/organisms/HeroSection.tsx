import React from "react";
import Image from "next/image";
import { BIO_DATA } from "../../data";

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20 border-b border-gray-10 bg-white">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-[4px] overflow-hidden border border-gray-10 shrink-0">
            <Image
              src={BIO_DATA.image}
              alt={BIO_DATA.name}
              fill
              sizes="(max-width: 768px) 128px, 160px"
              className="object-cover"
              priority
            />
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-h2 md:text-h1 font-heading text-text-primary tracking-tight leading-none font-heading">
                {BIO_DATA.name}
              </h1>
              <p className="text-para-lg font-medium text-purple-60 font-body">
                {BIO_DATA.title}
              </p>
              <p className="text-para-sm text-text-secondary font-body">
                {BIO_DATA.location}
              </p>
            </div>
            
            <div className="space-y-4 text-para text-text-secondary font-body leading-relaxed">
              {BIO_DATA.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
        
        {/* Collage Images */}
        <div className="grid grid-cols-4 gap-4 pt-4">
          {BIO_DATA.collageImages.map((src, idx) => (
            <div key={idx} className="relative aspect-square w-full rounded-[4px] overflow-hidden border border-gray-10">
              <Image
                src={src}
                alt={`Collage work image ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 25vw, 150px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
