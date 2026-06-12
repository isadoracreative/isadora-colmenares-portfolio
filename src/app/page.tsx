import React from "react";
import ButtonOutline from "../components/ButtonOutline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-12 bg-white">
      <div className="text-center space-y-4">
        <h1 className="text-h1 font-heading text-text-primary">Welcome to My Portfolio</h1>
        <p className="text-para-lg font-body text-text-secondary">
          This is a test page to verify our new Tailwind v4 design tokens and components.
        </p>
      </div>
      
      <div className="flex gap-4">
        <ButtonOutline size="large" iconName="rocket">
          Get Started
        </ButtonOutline>
        <ButtonOutline size="default">
          Learn More
        </ButtonOutline>
      </div>
    </main>
  );
}
