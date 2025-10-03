"use client"; // <- obligatoire pour les hooks et librairies client-side

import { Slant as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function BurgerMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Bouton burger */}
      <Hamburger toggled={isOpen} toggle={setOpen} size={28} color="#000" />

      {/* Menu mobile */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-white z-50 p-6 shadow-lg">
          <a href="/" className="block mb-4 text-lg font-medium">Accueil</a>
          <a href="/about" className="block mb-4 text-lg font-medium">À propos</a>
          <a href="/projects" className="block mb-4 text-lg font-medium">Projets</a>
          <a href="/contact" className="block mb-4 text-lg font-medium">Contact</a>
        </div>
      )}
    </div>
  );
}
