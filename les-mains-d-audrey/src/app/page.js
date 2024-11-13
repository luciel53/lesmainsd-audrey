import Image from "next/image";
import Accordion from "./components/Accordion";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className=" mt-4">
      <h1 className="font-brittany text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 lg:mb-12">les mains d'Audrey</h1>
      <h2 className=" font-italiana text-xl md:text-3xl lg:text-4xl mb-3 lg:mb-6">Facilitatrice de lien Parents/Bébé</h2>
      <p className=" mx-auto w-[88%] md:w-[70%] font-jaldi md:text-xl text-justify mb-4">
        Le bébé signe, ou « baby sign » en anglais, fait référence à une méthode
        de communication utilisant des signes de la langue des signes. C’est une
        merveilleuse passerelle pour renforcer le lien entre parents et
        tout-petits. Avant même de parler, les bébés peuvent exprimer leurs
        besoins et leurs émotions, réduisant ainsi les frustrations et
        favorisant la complicité. En tant que facilitatrice de lien
        parents-bébé, je vous guide dans cette aventure pour établir une
        communication douce et enrichissante, au rythme de votre enfant.
      </p>
      {/* Accordion */}
      <div>
        <Accordion
        title="Ateliers bébé signe en individuel"
        children="Je vous propose des ateliers Bébé Signe à votre domicile. Pour une famille."
        isFirst={true}
        />
        <Accordion
        title="Ateliers bébé signe en collectif "
        children="Ateliers Bébé Signe à votre domicile, mais à plusieurs familles (3 familles maximum)."
        />
        <Accordion
        title="Ateliers bébé signe en collectivité (bibliothèques, écoles, crèches...)"
        children="J'organise des contes signés, ateliers à thèmes dans les collectivités."
        />
        <Accordion
        title="Ateliers en entreprise sur la culture sourde"
        children="J'interviens dans les entreprises pour sensibiliser les gens sur la culture sourde."
        />
      </div>
      <div className="flex flex-row justify-center mt-10 mb-10 ">
      <Button btnText="Découvrez les ateliers" />
      </div>
    </div>
  );
}
