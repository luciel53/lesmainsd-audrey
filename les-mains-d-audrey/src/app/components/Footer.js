import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center font-jaldi mb-0 w-full overflow-hidden">
      <div className="flex flex-col md:flex-row justify-center items-center w-full mt-4">
        {/* Section centrée */}
        <div className="flex flex-col items-center text-center mx-auto mb-4">
          <div className="flex space-x-4 mt-4">
            <Image
              src="/images/icons/facebook.png"
              alt="Icone Facebook"
              width={35}
              height={35}
            />
            <Image
              src="/images/icons/instagram.png"
              alt="Icone Instagram"
              width={35}
              height={35}
            />
            <Image
              src="/images/icons/linkedin.png"
              alt="Icone LinkedIn"
              width={35}
              height={35}
            />
          </div>
          <p className="mt-2">
            © Les Mains d'Audrey - 2024 -{" "}
            <Link href="/mentionslegales">Mentions légales</Link>
          </p>
        </div>

        {/* Section droite */}
        <div className="flex flex-row items-end right-4 md:absolute overflow-hidden mb-4 -mt-8 md:mt-0">
          <p>Réalisé par</p>
          <div className="h-16 overflow-hidden">
            <Image
              src="/images/eyetopixel.png"
              alt="Créateur du site web"
              width={120}
              height={120}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
