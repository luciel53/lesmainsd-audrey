import Link from "next/link";
import PrestationsCard from "../components/PrestationsCard";
import Button from "../components/Button";
import Cloud from "../components/Cloud";
import { FaCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "Les mains d'Audrey - Ateliers Bébé Signe",
  description:
    "Découvrez les ateliers bébé signe pour renforcer la communication entre parents et bébés. Ateliers individuels, collectifs, en collectivités et en entreprises sur la culture Sourde.",
};

export default function Prestations() {
  return (
    <div className="mb-8">
      <h1 className="font-brittany text-4xl md:text-5xl lg:text-6xl">
        Prestations
      </h1>
      <Cloud />
      <section className=" relative z-10">
        <p className="mt-10 mb-4 w-80 md:w-[60%] lg:w-[60%] mx-auto text-justify font-jaldi md:text-xl">
          Je vous propose différents ateliers parents-enfants ludiques. Vous
          vous initierez aux <strong>signes associés à la parole</strong> en
          chansons par exemple. Différents thèmes sont possibles. Les ateliers sont <strong>conviviaux</strong> et{" "}
          <em>participatifs</em>. Réalisables <strong>individuellement</strong>{" "}
          ou <strong>collectivement</strong>. J’anime également des activités en collectivités
          (médiathèques, écoles, crèches...). Pour d’autres demandes,{" "}
          <Link href="/contact">
            <strong className=" underline text-pink hover:text-lightPink">
              contactez-moi.
            </strong>
          </Link>{" "}
          Aussi, j&apos;organise des{" "}
          <strong>ateliers de sensibilisation</strong> dans les entreprises
          autour de la <strong>culture Sourde</strong>.{" "}
          Vous pouvez consulter mon calendrier d&apos;évènements <Link href="/evenements" className="font-bold underline text-pink hover:text-lightPink" >ICI</Link>
        </p>
      </section>
      {/* Grid */}
      <section>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 w-[86%] md:w-[89%] lg:w-[95%] xl:w-[81%] mx-auto md:mt-2">
          <PrestationsCard
            title="Ateliers Bébé signe
individuel"
            p1="En individuel - 1 famille"
            p2="Un cycle de 4 ateliers ou l'un des 4 ateliers au
            choix : journée, activités, environnement et
            émotions de bébé."
            p3="45 minutes"
            p4="45€ L'UNITÉ - 150€ LE CYCLE"
          />
          <PrestationsCard
            title="Ateliers Bébé signe
          en collectif"
            p1="En collectif - 2 à 4 familles maximum"
            p2="Un cycle de 4 ateliers ou l'un des 4 ateliers au
              choix : journée, activités, environnement et
              émotions de bébé."
            p3="45 minutes"
            p4="30€ L'UNITÉ - 100€ LE CYCLE"
          />
          <div className="flex flex-col bg-gradient-to-tr from-lightBG via-pink-50 to-veryLightPink border border-lightPink rounded-3xl h-96 lg:h-[450px] lg:w-80 xl:w-96 justify-between mt-1 drop-shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:drop-shadow-xl">
            <h2 className="text-center font-italiana font-semibold text-pink w-60 mx-auto text-2xl md:text-3xl mt-4 border-b-2 border-pink pb-2 !important">
              L’heure de conte signé
            </h2>
            <div className="flex flex-row justify-center items-center text-justify">
            <FaCheckCircle className=" text-gray-700 w-4 h-4 flex-shrink-0 ml-5" />

            <p className="w-[80%] mx-auto  text-gray-700">
              Chez les médiathèques, en collectivité (écoles, crèches,
              périscolaires, etc.)
            </p></div>
            <div className="flex flex-row justify-center items-center text-justify">
            <FaCheckCircle className=" text-gray-700 w-4 h-4 flex-shrink-0 ml-5" />
            <p className="w-[80%] mx-auto  text-gray-700">SUR DEVIS</p>
            </div>
            <div className="mx-auto mb-4">
              <Button btnText="Contactez-moi" link="contact" />
            </div>
          </div>
          <PrestationsCard
            title="Ateliers comptines signées"
            p1="De la naissance, voire même dès la grossesse (certains parents préfèrent apprendre les comptines avant l'arrivée de bébé), jusqu'à ce que l'enfant n'aime plus faire des comptines (6-8 ans ou plus)"
            p2="en individuel : 30€"
            p3="en collectif (3 à 5 familles max): 20€"
          />
          <PrestationsCard
            title="Ateliers à thème"
            p1="Sur mesure selon les saisons"
            p2="En collectif (min 3 familles - max 5) : 20€ par famille"
          />
          <div className="flex flex-col bg-gradient-to-tr from-lightBG via-pink-50 to-veryLightPink border border-lightPink rounded-3xl h-96 lg:h-[450px] lg:w-80 xl:w-96 justify-between mt-1 drop-shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:drop-shadow-xl">
            <h2 className="text-center font-italiana font-semibold text-pink w-60 mx-auto text-2xl md:text-3xl mt-4 border-b-2 border-pink pb-2 !important">
            Autre demande
            </h2>
            <div className="flex flex-row justify-center items-center text-justify">
            <FaCheckCircle className=" text-gray-700 w-4 h-4 flex-shrink-0 ml-5" />

            <p className="w-[80%] mx-auto  text-gray-700">
            Je m&apos;adapte en vous proposant des activités sur-mesure. Si vous
              êtes intéressé, vous pouvez me contacter pour qu&apos;on en parle.

            </p></div>
            <div className="flex flex-row justify-center items-center text-justify">
            <FaCheckCircle className=" text-gray-700 w-4 h-4 flex-shrink-0 ml-5" />
            <p className="w-[80%] mx-auto  text-gray-700">SUR DEVIS</p>
            </div>
            <div className="mx-auto mb-4">
              <Button btnText="Contactez-moi" link="contact" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
