import React from "react";
import { SkillCategory } from "../../data";

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({ category }: SkillCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-gray-00 rounded-[4px] border border-gray-10/50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-purple-10 flex items-center justify-center text-purple-60">
          <i className={`fa-sharp fa-thin fa-${category.icon} text-[20px]`}></i>
        </div>
        <h3 className="font-heading text-para-lg font-semibold text-text-primary">
          {category.category}
        </h3>
      </div>
      
      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            {skill.name !== category.category && (
              <h4 className="font-heading text-para font-medium text-text-secondary">{skill.name}</h4>
            )}
            <ul className="grid grid-cols-1 gap-2 text-para-sm text-text-secondary font-body list-disc pl-5">
              {skill.items.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
