import PrestationsCard from "../components/PrestationsCard";

export default function Prestations() {
  return (
    <div>
      <h1 className="font-brittany text-6xl">Prestations</h1>
      <p className="mt-10 mb-4 w-[50%] mx-auto text-justify">Je vous propose différents ateliers parents-enfants ludiques. Vous vous initierez aux signes associés à la parole en chansons. Les ateliers sont conviviaux et participatifs. Réalisables individuellement ou collectivement (jusqu’à 3 familles, à votre domicile). J’anime également des activités en collectivités (bibliothèques...). Pour d’autres demandes, contactez-moi.
Aussi, j’organise des ateliers de sensibilisation dans les entreprises autour de la culture sourde. </p>
      {/* Grid */}
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 -gap-8">
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
