import React from "react";
import Image from "next/image";
import { WorkExperience } from "../../data";

interface ExperienceCardProps {
  experience: WorkExperience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-gray-10 rounded-[4px] hover:shadow-sm transition-shadow">
      <div className="relative w-14 h-14 shrink-0 rounded-[4px] overflow-hidden border border-gray-10 bg-white flex items-center justify-center">
        <Image
          src={experience.logo}
          alt={`${experience.company} logo`}
          fill
          sizes="56px"
          className="object-contain p-1"
        />
      </div>
      
      <div className="flex-1 space-y-3">
        <div>
          <h3 className="font-heading text-para-lg font-semibold text-text-primary font-heading">
            {experience.title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-para-sm text-text-secondary font-body mt-1 gap-1">
            <span className="font-medium text-purple-60">{experience.company}</span>
            <span>{experience.dateRange} | {experience.location}</span>
          </div>
        </div>
        
        <ul className="space-y-2 text-para-sm text-text-secondary font-body list-disc pl-5">
          {experience.bullets.map((bullet, idx) => (
            <li key={idx} className="leading-relaxed">{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
