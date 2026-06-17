import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import RecommendationCard from "../molecules/RecommendationCard";
import { RECOMMENDATIONS_DATA } from "../../data";

export default function RecommendationsSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-10">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <SectionHeader title="Recommendations" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RECOMMENDATIONS_DATA.map((rec, idx) => (
            <RecommendationCard key={idx} recommendation={rec} />
          ))}
        </div>
      </div>
    </section>
  );
}
