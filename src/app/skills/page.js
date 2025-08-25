"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import skills from "../../data/skills.json";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
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
        <h1 className="text-4xl font-bold mb-12 text-center drop-shadow-lg">
          Mes compétences
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800/80 rounded-xl border border-gray-700 
                         shadow-md hover:shadow-xl hover:border-blue-400 
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
              <h2 className="text-lg md:text-xl font-semibold">{skill.name}</h2>
              {skill.level && (
                <p className="text-sm text-gray-400 mt-1">{skill.level}</p>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
