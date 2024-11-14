"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Prestations" },
    { href: "/about", label: "À propos" },
    { href: "/evenements", label: "Évènements" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-row justify-between lg:mx-12 font-italiana text-xl md:text-2xl">
      {/* Logo */}
      <div>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo les mains d'Audrey"
            width={400}
            height={400}
            className="h-24 w-24 md:h-36 md:w-36 z-0"
          />
        </Link>
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
            width={33}
            height={33}
          />
        </button>

        <nav
          className={`${
            isOpen ? "block animate-fade-down animate-ease-in-out" : "hidden"
          } md:block  absolute z-30 right-0 top-20 md:top-0 bg-veryLightPink md:bg-transparent p-5 md:p-8 rounded-l-3xl`}
        >
          <ul className="flex flex-col md:flex-row text-pink">
            {menuItems.map((item) => (
              <Link href={item.href} key={item.href}>
                <li
                  className={`md:mr-8 relative flex flex-col items-center hover:opacity-100 ${
                    pathname === item.href ? "opacity-70" : "opacity-100"
                  }`}
                >
                  {item.label}
                  {/* hands heart icon */}
                  <Image
                    src="/images/icons/hands-heart.png"
                    alt="Icône de survol"
                    width={40}
                    height={40}
                    className={`md:-mt-2 transition-opacity duration-300 ${
                      pathname === item.href ? "opacity-100" : "opacity-0 group-hover:opacity-0"
                    }`}
                  />
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
