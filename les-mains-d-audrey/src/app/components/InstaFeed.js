"use client";

import { useEffect } from "react";

export default function InstaFeed() {
  useEffect(() => {
    // Chargez le script Elfsight uniquement côté client
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Nettoyer le script si nécessaire
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-f52f8a5c-eba8-4947-b475-1d176c11f564"
      data-elfsight-app-lazy
    ></div>
  );
}
