"use client";

import Image from "next/image";
import { useState } from "react";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex flex-col items-center font-jaldi">
      <button onClick={toggleAccordion} className="flex flex-row justify-between w-[40%] bg-lightBG border border-lightPink px-4 py-2">
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
      <div>{children}</div>
    </div>
  );
}
