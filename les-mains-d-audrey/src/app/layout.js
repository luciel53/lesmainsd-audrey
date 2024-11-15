import localFont from "next/font/local";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Les mains d'Audrey - Ateliers Bébé Signe",
  description: "Découvrez les ateliers de bébé signe pour renforcer la communication entre parents et bébés. Ateliers individuels, collectifs, en collectivités et ateliers en entreprises sur la culture sourde.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col justify-between w-full min-h-screen bg-background bg-cover bg-no-repeat">
        <Header />
        <main className="flex-grow relative z-0 -mt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
