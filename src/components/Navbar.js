'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center bg-gray-800">
      <h1 className="text-xl font-bold">Mon Portfolio</h1>
      <div className="space-x-4">
        <a href="#intro" className="hover:underline">Présentation</a>
        <a href="#projects" className="hover:underline">Projets</a>
        <a href="#skills" className="hover:underline">Compétences</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
