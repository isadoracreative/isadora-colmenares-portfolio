import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import AccoladeCard from "../molecules/AccoladeCard";
import { ACCOLADES_DATA } from "../../data";

export default function AccoladesSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-00/30 border-b border-gray-10">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <SectionHeader title="Key Accolades" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACCOLADES_DATA.map((accolade, idx) => (
            <AccoladeCard key={idx} accolade={accolade} />
          ))}
        </div>
      </div>
    </section>
  );
}
