"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    //redirection to events page
    router.push("/evenements");
   };
  return (
    <section>
      <div className=" flex flex-row justify-end h-20 p-3">
        <p className="font-jaldi text-lg">Bienvenue Audrey !</p>
        <Image
          src="/images/icons/logout.png"
          alt="Me déconnecter"
          width={35}
          height={35}
          onClick={handleLogout}
          className=" mt-1 mx-8 w-6 h-6 hover:cursor-pointer"
        />
      </div>
    </section>
  );
}
