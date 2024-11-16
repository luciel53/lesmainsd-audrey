import localFont from "next/font/local";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col justify-between w-full min-h-screen bg-background bg-cover bg-no-repeat">
        <Header />
        <main className="flex-grow relative z-0 -mt-8 md:mt-1 lg:-mt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
