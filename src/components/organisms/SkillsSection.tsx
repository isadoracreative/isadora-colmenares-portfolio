import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import SkillCard from "../molecules/SkillCard";
import { SKILLS_DATA } from "../../data";

export default function SkillsSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-00/30 border-b border-gray-10">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <SectionHeader title="Core Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS_DATA.map((category, idx) => (
            <SkillCard key={idx} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
