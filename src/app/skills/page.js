"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="pt-24 px-8">
        <h1 className="text-4xl font-bold">Mes compétences</h1>
        <p>Liste des compétences techniques…</p>
      </main>
      <Footer />
    </div>
  );
}