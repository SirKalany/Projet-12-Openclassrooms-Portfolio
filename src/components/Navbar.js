'use client';

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center bg-gray-800">
      <h1 className="text-xl font-bold">Mon Portfolio</h1>
      <div className="space-x-4">
        <Link href="/#intro" className="hover:underline">Présentation</Link>
        <Link href="/#projects" className="hover:underline">Projets</Link>
        <Link href="/#skills" className="hover:underline">Compétences</Link>
        <Link href="/#contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}