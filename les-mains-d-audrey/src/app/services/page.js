import PrestationsCard from "../components/PrestationsCard";

export default function Prestations() {
  return (
    <div className="mb-8">
      <h1 className="font-brittany text-6xl">Prestations</h1>
      <p className="mt-10 md:mb-4 w-80 md:w-[60%] lg:w-[50%] mx-auto text-justify font-jaldi text-xl">
        Je vous propose différents ateliers parents-enfants ludiques. Vous vous
        initierez aux signes associés à la parole en chansons. Les ateliers sont
        conviviaux et participatifs. Réalisables individuellement ou
        collectivement (jusqu’à 3 familles, à votre domicile). J’anime également
        des activités en collectivités (bibliothèques...). Pour d’autres
        demandes, contactez-moi. Aussi, j'organise des ateliers de
        sensibilisation dans les entreprises autour de la culture sourde.{" "}
      </p>
      {/* Grid */}
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 w-[86%] md:w-[89%] mx-auto md:mt-2">
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
    </div>
  );
}
