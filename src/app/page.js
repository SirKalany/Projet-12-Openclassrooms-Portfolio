"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import ProjectCarousel from "../components/ProjectCarousel";
import Section from "../components/Section";
import { useDispatch } from "react-redux";
import { openContact } from "../app/store/slices/modalSlice";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div className="relative min-h-screen bg-black">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 text-white">
          {/* Présentation */}
          <Section
            id="intro"
            bg="/backgrounds/backgroundintro.jpg"
            alignItems="items-start"
            textAlign="text-left"
            maxWidth="max-w-xl m-[5%]"
          >
            <div className="intro-text">
              <h2
                className="text-4xl font-bold mb-6"
                style={{
                  textShadow:
                    "4px 4px 8px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,0.8)",
                }}
              >
                Présentation
              </h2>
              <p
                className="text-lg leading-loose"
                style={{
                  textShadow:
                    "3px 3px 6px rgba(0,0,0,1), 0 0 8px rgba(0,0,0,0.9)",
                }}
              >
                Bonjour, je suis <strong>Duncan Miard</strong>, développeur
                front-end issu d&apos;une formation d&apos;intégrateur web. Passionné par
                l&apos;UI/UX et les technologies modernes comme Next.js et
                TailwindCSS, je conçois des interfaces claires, accessibles et
                performantes.
                <br />
                <br />
                Mon objectif est de devenir <strong>fullstack</strong> grâce à
                une formation backend, afin de pouvoir concevoir des projets de
                A à Z, du design jusqu&apos;au déploiement.
              </p>
            </div>
          </Section>

          {/* Projets */}
          <Section
            id="projects"
            bg="/backgrounds/backgroundproject.jpg"
            alignItems="items-center"
          >
            <div>
              <h2
                className="text-4xl font-bold mb-8"
                style={{
                  textShadow:
                    "4px 4px 8px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,0.8)",
                }}
              >
                Projets
              </h2>
              <ProjectCarousel />
            </div>
          </Section>

          {/* Compétences */}
          <Section id="skills" bg="/backgrounds/backgroundskills.jpg">
            <div className="text-center max-w-2xl mx-auto space-y-6">
              <h2
                className="text-4xl font-bold"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
              >
                Compétences
              </h2>

              <p
                className="text-lg md:text-xl text-gray-100"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                Toujours enthousiaste à explorer de nouveaux outils et
                techniques, je mets ma créativité et mon sens du détail au
                service de chaque projet. Découvrez mes compétences principales
                →
                <Link href="/skills" className="underline ml-2">
                  Voir plus
                </Link>
              </p>
            </div>
          </Section>

          {/* Contact */}
          <Section id="contact" bg="/backgrounds/backgroundcontact.jpg">
            <div className="text-center max-w-2xl mx-auto space-y-6">
              <h2
                className="text-4xl font-bold"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
              >
                Contact
              </h2>

              <p
                className="text-lg md:text-xl text-gray-100"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                Vous souhaitez me contacter ? Vous pouvez me retrouver sur&nbsp;
                <a
                  href="https://github.com/SirKalany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-400"
                >
                  GitHub
                </a>
                &nbsp;ou&nbsp;
                <a
                  href="https://www.linkedin.com/in/duncan-miard-722568334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-400"
                >
                  LinkedIn
                </a>
                , ou simplement utiliser le bouton ci-dessous.
              </p>

              <button
                onClick={() => dispatch(openContact())}
                className="bg-neutral-800 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
              >
                Me contacter
              </button>
            </div>
          </Section>
        </main>

        <Footer />
      </div>

      <ContactModal />
    </div>
  );
}
