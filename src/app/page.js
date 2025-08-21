"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />
      {/* Contenu */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 text-white">
          {/* Présentation */}
          <section
            id="intro"
            className="min-h-screen flex flex-col justify-center px-8 max-w-3xl space-y-6"
            style={{ backgroundImage: "url('/bg.jpg')" }}
          >
            <h2 className="text-4xl font-bold">Présentation</h2>
            <p>
              Bonjour, je suis <strong>Duncan Miard</strong>, développeur
              passionné par Next.js, Tailwind et le design moderne.
            </p>
          </section>
          {/* Projets */}
          <section
            id="projects"
            className="min-h-screen flex flex-col justify-center px-8 max-w-3xl space-y-6"
            style={{ backgroundImage: "url('/bg.jpg')" }}
          >
            <h2 className="text-4xl font-bold">Projets</h2>
            <p>Un aperçu de mes projets réalisés…</p>
          </section>
          {/* Compétences */}
          <section
            id="skills"
            className="min-h-screen flex flex-col justify-center px-8 max-w-3xl space-y-6"
          >
            <h2 className="text-4xl font-bold">Compétences</h2>
            <p>
              Découvrez mes compétences principales →
              <Link href="/skills" className="underline ml-2">
                Voir plus
              </Link>
            </p>
          </section>
          {/* Contact */}
          <section
            id="contact"
            className="min-h-screen flex flex-col justify-center items-center text-center px-8 space-y-6"
          >
            <h2 className="text-4xl font-bold">Contact</h2>
            <Link
              href="/contact"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Me contacter
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
