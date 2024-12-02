"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Accordion({ title, content, isFirst }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center font-jaldi">
      <button
        onClick={toggleAccordion}
        className={`flex flex-row justify-between w-80 md:w-[60%] lg:w-[40%] bg-lightBG px-4 py-2 ${
          isOpen
            ? "border-x border-t border-lightPink "
            : " border border-lightPink"
        } ${isFirst ? "" : "border-t-0"}`}
      >
                <h3 className="font-jaldi w-full text-left flex-grow md:text-xl">{title}</h3>
        <span>
          <Image
            src={isOpen ? "/images/icons/minus.png" : "/images/icons/add.png"}
            alt="Click to dropdown"
            width={150}
            height={150}
            className="w-5 h-5 mt-1"
          />
        </span>
      </button>
      {isOpen && (
        <div className="flex flex-col justify-between w-80 md:w-[60%] lg:w-[40%] bg-lightBG border-x border-b border-lightPink px-4 py-2">
          <div className=" whitespace-break-spaces break-words">
            <p className="font-jaldi italic text-justify md:text-xl">
            {content}
            </p>
          </div>
          <div className=" self-center">
            <Link href="/services">
            <button className="text-lightBG bg-gold font-jaldi w-24 md:mr-4 lg:mr-4 mt-3 mb-2 drop-shadow-lg border border-gold rounded-full px-2 hover:text-gold hover:bg-lightBG hover:opacity-90 transition duration-300 ease-in-out">En savoir +</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
