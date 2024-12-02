"use client";

import localFont from "next/font/local";
import "./styles/globals.css";
import Header from "./components/Header";
import AdminHeader from "./components/AdminHeader";
import Footer from "./components/Footer";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isUserChecked, setIsUserChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isAdminPage = pathname === "/admin";

  useEffect(() => {
    // check if user is authenticated
    const token = localStorage.getItem("token");

    if (isAdminPage && !token) {
      //redirect to login page if not authenticated
      router.push("/auth");
    }
    setIsUserChecked(true);
  }, [isAdminPage, router]);

  return (
    <html lang="fr">
      <body className="flex flex-col justify-between w-full min-h-screen bg-background bg-cover bg-no-repeat overflow-y-auto">
        {!isAdminPage ? <Header /> : <AdminHeader />}
        <main className="flex-grow relative z-0 -mt-8 md:mt-1 lg:-mt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
