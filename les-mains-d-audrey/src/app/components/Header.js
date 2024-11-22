"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
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

  // close menu when clicking outside of menu or burger button
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
    };

    //Add event listener to detect clicks outside of
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, buttonRef]);

  return (
    <header className="flex flex-row justify-between lg:mx-12 font-italiana text-xl md:text-2xl">
      {/* Logo */}
      <div>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo les mains d'Audrey"
            unoptimized
            width={400}
            height={400}
            className="h-24 w-24 lg:h-36 lg:w-36 z-0 drop-shadow-sm"
          />
        </Link>
      </div>

      <div className="flex flex-col">
        {/* Burger button */}
        <button
          className="block md:hidden mt-6 mr-5"
          onClick={toggleMenu}
          ref={buttonRef}
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
          ref={menuRef}
          className={`${
            isOpen ? "block animate-fade-down animate-ease-in-out" : "hidden"
          } md:block  absolute z-30 right-0 top-20 md:top-0 bg-veryLightPink bg-opacity-95 drop-shadow-lg md:bg-transparent p-5 md:p-8 rounded-l-3xl`}
        >
          <ul className="flex flex-col md:flex-row text-pink">
            {menuItems.map((item) => (
              <Link href={item.href} key={item.href}>
                <li
                  className={`md:mr-8 relative flex flex-col items-center hover:opacity-60 ${
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
                    className={`hidden md:block md:-mt-2 transition-opacity duration-300 ${
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
