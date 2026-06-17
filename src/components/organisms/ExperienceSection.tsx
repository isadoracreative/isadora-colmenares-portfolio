import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import ExperienceCard from "../molecules/ExperienceCard";
import ButtonOutline from "../ButtonOutline";
import { WORK_EXPERIENCE_DATA } from "../../data";

export default function ExperienceSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-10">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <SectionHeader title="Work Experience Highlights" />
        
        <div className="space-y-6">
          {WORK_EXPERIENCE_DATA.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 pt-6 justify-center sm:justify-start">
          <ButtonOutline iconName="download" size="default">
            Download Resume
          </ButtonOutline>
          <ButtonOutline iconName="linkedin" size="default">
            Linkedin Profile
          </ButtonOutline>
        </div>
      </div>
    </section>
  );
}
