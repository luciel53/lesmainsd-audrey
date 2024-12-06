"use client";

import { useEffect } from "react";

export default function InstaFeed() {
  useEffect(() => {
    // Load the script Elfsight (clientside)
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // clean up
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
