"use client";

import { useState, useEffect } from "react";
import EventForm from "../components/EventForm";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null pour indiquer que la vérification est en cours

  useEffect(() => {
    const user = localStorage.getItem("user");

    // if (!user) {
    //   // Rediriger l'utilisateur si non authentifié
    //   router.push("/login");
    // } else {
    //   setIsAuthenticated(true);
    // }
  });

  // Affiche un message de chargement tant que l'état de l'authentification est inconnu
  // if (isAuthenticated === null) {
  //   return <div>Chargement...</div>;
  // }

  // Si l'utilisateur est authentifié, affiche le panneau d'administration
  return (
    <div>
      <h1 className="font-brittany text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 lg:mb-12">
        Panneau d'administration
      </h1>
      <div className="flex flex-row justify-center gap-40">
        <section>
          <EventForm />
        </section>
        <section>event list</section>
      </div>
    </div>
  );
}
