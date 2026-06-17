import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-50 text-white py-12">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 font-body text-para-sm">
        <div className="flex gap-8">
          <a href="#about" className="hover:underline transition-all">about</a>
          <a href="#resume" className="hover:underline transition-all">resume</a>
        </div>
        <div>
          <span>© Isadora Colmenares 2026. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
