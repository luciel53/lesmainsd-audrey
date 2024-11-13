import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center font-jaldi mb-4">
      <p>© Les Mains d'Audrey - 2024 - <Link href="mentionslegales">Mentions légales</Link></p>
      <p>
        Réalisé par <span>EYETOPIXEL</span>
      </p>
    </footer>
  );
}
