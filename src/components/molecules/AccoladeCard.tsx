import React from "react";
import { Accolade } from "../../data";

interface AccoladeCardProps {
  accolade: Accolade;
}

export default function AccoladeCard({ accolade }: AccoladeCardProps) {
  return (
    <div className="flex gap-4 p-6 bg-gray-00 rounded-[4px] border border-gray-10/50 w-full">
      <div className="w-12 h-12 rounded-full bg-purple-10 flex items-center justify-center text-purple-60 shrink-0">
        <i className={`fa-sharp fa-thin fa-${accolade.icon} text-[24px]`}></i>
      </div>
      <div className="space-y-1">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h3 className="font-heading text-para font-semibold text-text-primary">{accolade.title}</h3>
          <span className="text-para-xs font-semibold text-purple-60 bg-purple-10 px-2 py-0.5 rounded-full">{accolade.year}</span>
        </div>
        <p className="text-para-sm text-text-secondary font-body leading-relaxed">{accolade.description}</p>
      </div>
    </div>
  );
}
