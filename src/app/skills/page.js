"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import skills from "../../data/skills.json";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <main className="pt-24 px-8 flex-1">
        <h1 className="text-4xl font-bold mb-8">Mes compétences</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center"
            >
              {skill.logo && (
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="mb-4"
                />
              )}
              <h2 className="text-xl font-semibold">{skill.name}</h2>
              {skill.level && <p className="text-sm text-gray-400">{skill.level}</p>}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
