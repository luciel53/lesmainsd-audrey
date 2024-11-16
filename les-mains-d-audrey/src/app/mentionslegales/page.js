import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Les mains d'Audrey - Ateliers Bébé Signe",
  description:
    "Découvrez les ateliers bébé signe pour renforcer la communication entre parents et bébés. Ateliers individuels, collectifs, en collectivités. Vous trouverez ici les mentions légales de Les mains d'Audrey",
};

export default function LegalMentions() {
  return (
    <div className="flex flex-col text-justify">
      <h1 className="font-brittany text-4xl md:text-6xl mb-16">
        Mentions légales
      </h1>
      <div className="flex flex-row">
        <div className="flex flex-col">

        {/* L'entreprise */}
        <div className="flex flex-col mx-5 md:mx-40 lg:mx-32 mb-3 md:mb-5">
          <h3 className=" font-bold mb-1">L'entreprise:</h3>
          <p>Les Mains d'Audrey</p>
          <p>Facilitatrice de liens Parents-enfant</p>
          <p>Email : lesmainsdaudrey44@gmail.com</p>
          <p>SMS : 06 75 34 08 67</p>
          <p>
            <strong className="italic">Les mains d'Audrey</strong> est
            accompagnée par :
          </p>
          <p className="italic font-bold">L'Ouvre-boites</p>
          <p>446 Esplanade Anna Marly 44600</p>
          <p>Saint-Nazaire - tél. : 02.28.21.65.10 </p>
          <p>N° Siren : 449 989 573 00075 FR40449989573 </p>
        </div>
        {/* L'hébergeur */}
        <div className="flex flex-col mx-5 md:mx-40 lg:mx-32 mb-3 md:mb-5">
          <h3 className=" font-bold mb-1">L'hebergeur:</h3>
          <p>Netlify Inc.</p>
          <p> 512 2nd Street, Fl 2</p>
          <p>San Francisco, CA 94107</p>
          {/* <p><a href="mailto:lesmainsdaudrey44@gmail.com">privacy@netlify.com</a></p> */}
        </div>
        {/* Directeur de la publication */}
        <div className="flex flex-col mx-5 md:mx-40 lg:mx-32 mb-3 md:mb-5">
          <h3 className=" font-bold mb-1">Directeur de la publication:</h3>
          <p>Audrey Florenceau, dirigeante de Les Mains d'Audrey.</p>
        </div>

        {/* Créateur du site */}
        <div className="flex flex-col mx-5 md:mx-40 lg:mx-32 mb-3 md:mb-5">
          <h3 className=" font-bold mb-1">Création du site:</h3>
          <p>EyeToPixel</p>
          <p>Développement web Freelance & Photographe</p>
          <Link href="/">www.eyetopixel.com</Link>
        </div>
        {/* Politique de confidentialité */}
        <div className="flex flex-col mx-5 md:mx-40 lg:mx-32 mb-8 md:mb-16">
          <h3 className=" font-bold mb-1">Politique de confidentialité</h3>
          <h4 className="mb-1">1. Collecte et utilisation des données personnelles</h4>
          <p>
            Nous collectons uniquement les informations que vous nous fournissez
            volontairement via notre formulaire de contact. Les données
            collectées incluent votre nom, votre adresse e-mail et votre numéro
            de téléphone. Ces informations sont strictement utilisées pour
            répondre à vos demandes de contact et ne sont partagées avec aucun
            tiers.
          </p>

          <h4 className="mb-1 mt-1">2. Vos droits</h4>
          <p>
            Conformément à la réglementation applicable, vous disposez d'un
            droit d'accès, de rectification, et de suppression de vos données
            personnelles. Vous pouvez exercer ces droits en nous contactant à
            l'adresse suivante : lesmainsdaudrey44@gmail.com.
          </p>

          <h4 className="mt-1">3. Absence de cookies et de suivi</h4>
          <p>
            Notre site n'utilise aucun cookie ni aucun outil de suivi. Aucune
            information de navigation n'est collectée.
          </p>
        </div>
        </div>
        <div className="hidden lg:block lg:w-72 lg:ml-[40%] absolute" >
          <Image src="/images/logo.png" alt="Logo" width={600} height={600} />
        </div>
      </div>
    </div>
  );
}
