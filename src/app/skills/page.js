"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import skills from "../../data/skills.json";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-[100vh] bg-no-repeat bg-top bg-cover"
        style={{
          backgroundImage: "url('/backgrounds/backgroundskillspage.jpg')",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-[100vh] bg-gradient-to-b from-black/0 to-black" />

      {/* Contenu */}
      <Navbar />
      <main className="relative z-10 pt-24 px-8 flex-1">
        <h1
          className="text-4xl font-bold mb-8 text-center text-neutral-50"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
        >
          Mes compétences
        </h1>
        <p
          className="text-center mb-12 text-neutral-300"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
        >
          Toujours enthousiaste à explorer de nouveaux outils et techniques, je
          mets ma créativité et mon sens du détail au service de chaque projet.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-neutral-800/90 rounded-xl border border-gray-700 
                         shadow-md hover:shadow-xl hover:border-gray-400 
                         transition flex flex-col items-center hover:scale-105"
            >
              {skill.logo && (
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="mb-4 drop-shadow-md"
                />
              )}
              <h2
                className="text-lg md:text-xl font-semibold text-neutral-50"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                {skill.name}
              </h2>
              {skill.level && (
                <p
                  className="text-sm text-neutral-400 mt-1"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
                >
                  {skill.level}
                </p>
              )}
            </div>
          ))}
        </div>
      </main>

      <div className="relative z-10 mt-5">
        <Footer />
      </div>
    </div>
  );
}
