"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Accordion({ title, children, isFirst }) {
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
        <span>{title}</span>
        <span>
          <Image
            src="/images/icons/add.png"
            alt="Click to dropdown"
            width={200}
            height={200}
            className="w-6 h-6"
          />
        </span>
      </button>
      {isOpen && (
        <div className="flex flex-row justify-between w-80 md:w-[60%] lg:w-[40%] bg-lightBG border-x border-b border-lightPink px-4 py-2">
          <div className=" w-44 md:w-72 lg:w-[68%] whitespace-break-spaces break-words">
            <p className="">
            {children}
            </p>
          </div>
          <div className=" self-center">
            <Link href="/services">
            <button className="text-gold w-24 md:mr-4 lg:mr-4 border border-gold rounded-full px-2">En savoir +</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
