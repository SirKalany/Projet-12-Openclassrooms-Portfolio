"use client";

import { useState } from "react";
import projects from "../data/projects.json";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const goToSlide = (index) => setCurrentIndex(index);

  const currentProject = projects[currentIndex];

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="flex flex-col items-center">
        
        {/* Image et flèches */}
        <div className="relative w-full max-h-[70vh] mb-6">
          <Image
            src={currentProject.picture}
            alt={currentProject.name}
            width={1200}
            height={800}
            className="rounded-lg shadow-lg mx-auto w-full h-auto object-contain"
            priority
          />

          {/* Flèches */}
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl transition"
          >
            &lt;
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl transition"
          >
            &gt;
          </button>
        </div>

        {/* Informations */}
        <div className="text-center max-w-2xl px-2 md:px-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            {currentProject.name}
          </h3>
          <p className="text-gray-300 text-sm md:text-base mb-4">
            {currentProject.description}
          </p>

          {/* Logos tech */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4">
            {currentProject.skills.map((logo, i) => (
              <div key={i} className="w-8 h-8 md:w-10 md:h-10 relative">
                <Image
                  src={logo}
                  alt="Logo tech"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>

          {/* Bouton projet */}
          <div className="flex justify-center">
            <Link
              href={currentProject.link}
              target="_blank"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition text-sm md:text-base"
            >
              Voir le projet
            </Link>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-blue-500 scale-110"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
