"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-row justify-between font-italiana text-2xl">
      <div>
        <Image
          src="/images/logo.png"
          alt="logo les mains d'Audrey"
          width={400}
          height={400}
          className="h-24 w-24 md:h-32 md:w-32"
        />
      </div>

	<div className="flex flex-col">
      {/* Burger button */}
      <button
        className="block md:hidden mt-6 mr-5"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {/* Icone burger */}
        <Image
          src="/images/icons/burger.png"
          alt="Menu"
          width={40}
          height={40}
        />
      </button>

      <nav className={`${ isOpen ? "block" : "hidden" } md:block  absolute z-30 right-0 top-20 md:top-0 bg-veryLightPink md:bg-transparent p-5 md:p-8 rounded-l-3xl`}>
        <ul className="flex flex-col md:flex-row text-pink">
          <li className="md:mr-8">Accueil</li>
          <li className="md:mr-8">Services</li>
          <li className="md:mr-8">À propos</li>
          <li className="md:mr-8">Évènements</li>
          <li className="">Contact</li>
        </ul>
      </nav>
	  </div>
    </header>
  );
}
