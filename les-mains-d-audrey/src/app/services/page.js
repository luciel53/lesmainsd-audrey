import Link from "next/link";
import PrestationsCard from "../components/PrestationsCard";
import Button from "../components/Button";

export const metadata = {
  title: "Les mains d'Audrey - Ateliers Bébé Signe",
  description:
    "Découvrez les ateliers bébé signe pour renforcer la communication entre parents et bébés. Ateliers individuels, collectifs, en collectivités et en entreprises sur la culture sourde.",
};

export default function Prestations() {
  return (
    <div className="mb-8">
      <h1 className="font-brittany text-4xl md:text-5xl lg:text-6xl">
        Prestations
      </h1>
      <section>
        <p className="mt-10 mb-4 w-80 md:w-[60%] lg:w-[60%] mx-auto text-justify font-jaldi md:text-xl">
          Je vous propose différents ateliers parents-enfants ludiques. Vous
          vous initierez aux <strong>signes associés à la parole</strong> en
          chansons. Les ateliers sont <strong>conviviaux</strong> et{" "}
          <em>participatifs</em>. Réalisables <strong>individuellement</strong>{" "}
          ou <strong>collectivement</strong> (jusqu’à 3 familles, à votre
          domicile). J’anime également des activités en collectivités
          (bibliothèques...). Pour d’autres demandes,{" "}
          <Link href="/contact">
            <strong className=" underline">contactez-moi.</strong>
          </Link>{" "}
          Aussi, j'organise des <strong>ateliers de sensibilisation</strong>{" "}
          dans les entreprises autour de la <strong>culture sourde</strong>.{" "}
        </p>
      </section>
      {/* Grid */}
      <section>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 w-[86%] md:w-[89%] lg:w-[95%] xl:w-[81%] mx-auto md:mt-2">
          <PrestationsCard
            title="Ateliers Bébé signe
individuel"
            p1="En individuel - 1 famille (2 parents possibles et bébé)"
            p2="Un cycle de 4 ateliers ou l un des 4 ateliers au
            choix : (journée, activités, environnement et
            émotions de bébé)"
            p3="45 minutes"
            p4="45€ L'UNITÉ - 150€ LE CYCLE"
          />
          <PrestationsCard
            title="Ateliers Bébé signe
          en collectif"
            p1="En collectif - 3 familles maximum"
            p2="Un cycle de 4 ateliers ou l un des 4 ateliers au
              choix : (journée, activités, environnement et
              émotions de bébé)"
            p3="45 minutes"
            p4="30€ L'UNITÉ - 100€ LE CYCLE"
          />
          <div className="flex flex-col bg-lightBG border border-lightPink rounded-3xl h-96 lg:w-80 xl:w-96 justify-between md:justify-between mt-1 drop-shadow-sm transition-transform duration-200 ease-in-out hover:scale-105 hover:drop-shadow-lg">
            <h2 className="text-center font-italiana text-pink w-60 mx-auto text-2xl md:text-3xl mt-2">
              L’heure de conte signé
            </h2>

            <p className="w-[90%] mx-auto">À votre domicile</p>
            <p className="w-[90%] mx-auto">
              Ateliers sur mesure dans les collectivités (bibliothèques, écoles,
              crèches, etc.)
            </p>
            <p className="w-[90%] mx-auto">
              Pour toute autre demande me contacter
            </p>
            <p className="w-[90%] mx-auto">SUR DEVIS</p>

            <div className="mx-auto mb-4">
              <Button btnText="Contactez-moi" />
            </div>
          </div>
          <PrestationsCard
            title="Ateliers comptines signées"
            p1="De la naissance, voire même dès la grossesse (certains parents préfèrent apprendre les comptines avant l'arrivée de bébé), jusqu'à ce que l'enfant n'aime plus faire des comptines (6-8 ans ou plus)"
            p2="en indivuel : 35€"
            p3="en collectif (max 3 familles): 30€"
          />
          <PrestationsCard
            title="Ateliers à thème
          (sur mesure selon les saisons)"
            p1="⇾ en individuel : 45€ (parents et deux enfants) adulte (hors parents du bébé): 20€
            enfant supplémentaire : 5€"
            p2="⇾ en collectif (min 2 familles - max 3) : 30€ (parents et deux enfants)
            adulte hors famille: 15€"
          />
          <PrestationsCard
            title="Carte cadeau"
            p1="Vous voulez offrir un atelier à une personne de votre entourage ? Un atelier ou un cycle de 4 ateliers. Valable pour un an"
          />
          <div className="flex flex-col bg-lightBG border border-lightPink rounded-3xl h-96 lg:w-80 xl:w-96 justify-between md:justify-between mt-1 drop-shadow-sm transition-transform duration-200 ease-in-out hover:scale-105 hover:drop-shadow-lg">
            <h2 className="text-center font-italiana text-pink w-60 mx-auto text-2xl md:text-3xl mt-2">
              L’heure de conte signé
            </h2>

            <p className="w-[90%] mx-auto">
              Je m'adapte en vous proposant des activités sur-mesure. Pour tout
              renseignement, contactez-moi
            </p>
            <p className="w-[90%] mx-auto">SUR DEVIS</p>

            <div className="mx-auto mb-4">
              <Button btnText="Contactez-moi" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
