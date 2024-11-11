import Image from "next/image";

export default function Home() {
  return (
    <main className="relative z-0 mt-4">
      <h1 className="font-brittany text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 lg:mb-12">les mains d'Audrey</h1>
      <h2 className=" font-italiana text-xl md:text-3xl lg:text-4xl mb-3 lg:mb-6">Facilitatrice de lien Parents/Bébé</h2>
      <p className=" mx-auto w-[88%] md:w-[70%] text-justify">
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
      <div></div>
    </main>
  );
}
