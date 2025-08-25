"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import ProjectCarousel from "../components/ProjectCarousel";
import { useDispatch } from "react-redux";
import { openContact } from "../app/store/slices/modalSlice";

export default function Home() {
  const dispatch = useDispatch();

  // Composant réutilisable pour sections avec background + overlay
  const Section = ({ id, bg, children, alignItems = "items-center" }) => (
    <section
      id={id}
      className={`relative min-h-screen w-full flex flex-col justify-center ${alignItems} bg-cover bg-center`}
      style={{
        backgroundImage: `url('${bg}')`,
      }}
    >
      {/* Overlay sombre global */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Dégradé haut/bas */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* Contenu */}
      <div className="relative z-10 px-8 max-w-5xl text-white text-center space-y-6">
        {children}
      </div>
    </section>
  );

  return (
    <div className="relative min-h-screen bg-black">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 text-white">
          {/* Présentation */}
          <Section id="intro" bg="/backgrounds/backgroundintro.jpg">
            <h2 className="text-4xl font-bold">Présentation</h2>
            <p>
              Bonjour, je suis <strong>Duncan Miard</strong>, développeur
              passionné par Next.js, Tailwind et le design moderne.
            </p>
          </Section>

          {/* Projets */}
          <Section id="projects" bg="/backgrounds/backgroundproject.jpg">
            <div>
              <h2 className="text-4xl font-bold mb-8">Projets</h2>
              <ProjectCarousel />
            </div>
          </Section>

          {/* Compétences */}
          <Section id="skills" bg="/backgrounds/backgroundskills.jpg">
            <h2 className="text-4xl font-bold">Compétences</h2>
            <p>
              Découvrez mes compétences principales →
              <Link href="/skills" className="underline ml-2">
                Voir plus
              </Link>
            </p>
          </Section>

          {/* Contact */}
          <Section id="contact" bg="/backgrounds/backgroundcontact.jpg">
            <h2 className="text-4xl font-bold">Contact</h2>
            <button
              onClick={() => dispatch(openContact())}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Me contacter
            </button>
          </Section>
        </main>

        <Footer />
      </div>

      <ContactModal />
    </div>
  );
}
