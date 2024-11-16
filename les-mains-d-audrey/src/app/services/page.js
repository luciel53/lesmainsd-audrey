import Link from "next/link";
import PrestationsCard from "../components/PrestationsCard";

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
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 w-[86%] md:w-[89%] lg:w-[81%] mx-auto md:mt-2">
          <PrestationsCard
            title="Ateliers Bébé signe
individuel"
            text="En individuel - 1 famille (2 parents possibles et bébé)
Un cycle de 4 ateliers ou l un des 4 ateliers au
choix : (journée, activités, environnement et
émotions de bébé)
45 minutes
45€ L’UNITÉ - 150€ LE CYCLE"
          />
          <PrestationsCard
            title="Ateliers Bébé signe
          en collectif"
            text="En individuel - 1 famille (2 parents possibles et bébé)
Un cycle de 4 ateliers ou l un des 4 ateliers au
choix : (journée, activités, environnement et
émotions de bébé)
45 minutes
45€ L’UNITÉ - 150€ LE CYCLE"
          />
          <PrestationsCard
            title="L’heure de conte signé"
            text="En individuel - 1 famille (2 parents possibles et bébé)
Un cycle de 4 ateliers ou l un des 4 ateliers au
choix : (journée, activités, environnement et
émotions de bébé)
45 minutes
45€ L’UNITÉ - 150€ LE CYCLE"
          />
          <PrestationsCard
            title="Ateliers comptines signées"
            text="En individuel - 1 famille (2 parents possibles et bébé)
Un cycle de 4 ateliers ou l un des 4 ateliers au
choix : (journée, activités, environnement et
émotions de bébé)
45 minutes
45€ L’UNITÉ - 150€ LE CYCLE"
          />
          <PrestationsCard
            title="Ateliers à thème
          (sur mesure selon les saisons)"
            text="En individuel - 1 famille (2 parents possibles et bébé)
Un cycle de 4 ateliers ou l un des 4 ateliers au
choix : (journée, activités, environnement et
émotions de bébé)
45 minutes
45€ L’UNITÉ - 150€ LE CYCLE"
          />
          <PrestationsCard
            title="Carte cadeau"
            text="En individuel - 1 famille (2 parents possibles et bébé)
Un cycle de 4 ateliers ou l un des 4 ateliers au
choix : (journée, activités, environnement et
émotions de bébé)
45 minutes
45€ L’UNITÉ - 150€ LE CYCLE"
          />
          <PrestationsCard
            title="Ateliers Bébé signe
individuel"
            text="En individuel - 1 famille (2 parents possibles et bébé)
Un cycle de 4 ateliers ou l un des 4 ateliers au
choix : (journée, activités, environnement et
émotions de bébé)
45 minutes
45€ L’UNITÉ - 150€ LE CYCLE"
          />
        </div>
      </section>
    </div>
  );
}
