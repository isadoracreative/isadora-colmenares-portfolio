import React from "react";
import HeroSection from "../components/organisms/HeroSection";
import SkillsSection from "../components/organisms/SkillsSection";
import ExperienceSection from "../components/organisms/ExperienceSection";
import AccoladesSection from "../components/organisms/AccoladesSection";
import RecommendationsSection from "../components/organisms/RecommendationsSection";
import Footer from "../components/organisms/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <AccoladesSection />
        <RecommendationsSection />
      </main>
      <Footer />
    </div>
  );
}

