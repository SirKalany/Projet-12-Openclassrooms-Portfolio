'use client';

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center bg-gray-800">
      <h1 className="text-xl font-bold">Mon Portfolio</h1>

      {/* Liens Desktop */}
      <div className="hidden md:flex space-x-4">
        <Link href="/#intro" className="hover:underline">Présentation</Link>
        <Link href="/#projects" className="hover:underline">Projets</Link>
        <Link href="/#skills" className="hover:underline">Compétences</Link>
        <Link href="/#contact" className="hover:underline">Contact</Link>
      </div>

      {/* Bouton Burger Mobile */}
      <button
        className="md:hidden p-2 bg-gray-700 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-gray-800 rounded shadow-lg flex flex-col p-2 space-y-2 md:hidden">
          <Link href="/#intro" className="hover:underline" onClick={() => setIsOpen(false)}>Présentation</Link>
          <Link href="/#projects" className="hover:underline" onClick={() => setIsOpen(false)}>Projets</Link>
          <Link href="/#skills" className="hover:underline" onClick={() => setIsOpen(false)}>Compétences</Link>
          <Link href="/#contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
