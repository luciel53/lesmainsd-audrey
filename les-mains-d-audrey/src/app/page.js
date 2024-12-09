import Image from "next/image";
import Accordion from "./components/Accordion";
import Button from "./components/Button";
import Cloud from "./components/Cloud";
import InstaFeed from "./components/InstaFeed";

export const metadata = {
  title: "Les mains d'Audrey - Ateliers Bébé Signe",
  description:
    "Découvrez les ateliers de bébé signe pour renforcer la communication entre parents et bébés. Ateliers individuels, collectifs, en collectivités et ateliers en entreprises sur la culture Sourde.",
};

export default function Home() {
  return (
    <div className=" mt-4">
      <Cloud />
      <section className="relative z-10">
        <h1 className="font-brittany text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 lg:mb-12">
          les mains d&apos;Audrey
        </h1>
        <h2 className=" font-italiana text-xl md:text-3xl lg:text-4xl mb-3 lg:mb-6">
          Facilitatrice de lien Parents/Bébé (Bébé Signe)
        </h2>
      </section>
      <section className="relative z-10">
        <p className=" mx-auto w-[88%] md:w-[70%] lg:w-[60%] font-jaldi md:text-xl text-justify mb-4">
          Le <strong>bébé signe</strong>, ou « <strong>baby sign</strong> » en
          anglais, fait référence à une méthode de communication utilisant des
          signes de la langue des signes. C&apos;est une merveilleuse passerelle
          pour <strong>renforcer le lien entre parents et tout-petits</strong>.
          Avant même de parler, les bébés peuvent{" "}
          <em>exprimer leurs besoins</em> et leurs{" "}
          <em>émotions</em>,{" "}
          <em>réduisant ainsi les frustrations et favorisant la complicité</em>.
          En tant que <strong>facilitatrice de lien parents-bébé</strong>, je
          vous guide dans cette aventure pour{" "}
          <strong>établir une communication douce et enrichissante</strong>,{" "}
          <strong>au rythme de votre enfant</strong>.
        </p>
      </section>
      {/* Accordion */}
      <section className="mt-6 relative z-10">
        <div>
          <Accordion
            title="Ateliers bébé signe en individuel"
            content="Des sessions privées à votre domicile pour apprendre le bébé signe à votre rythme. Pour une famille."
            isFirst={true}
          />
          <Accordion
            title="Ateliers bébé signe en collectif "
            content="Ateliers Bébé Signe à votre domicile, mais à plusieurs familles (2 à 4 familles maximum). Parfait pour faire des économies et apprendre le bébé signe de façon conviviale."
          />
          <Accordion
            title="Ateliers bébé signe en collectivité (bibliothèques, écoles, crèches...)"
            content="J'organise des contes signés, ateliers à thèmes dans les collectivités."
          />
          <Accordion
            title="Ateliers en entreprise sur la culture Sourde"
            content="J'interviens dans les entreprises pour sensibiliser les gens sur la culture Sourde."
          />
        </div>
        <div className="flex flex-row justify-center mt-10 mb-10 ">
          <Button btnText="Découvrez les ateliers" link="services" />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center md:mt-28">
        <h2 className=" font-italiana font-semibold text-xl md:text-3xl lg:text-4xl mb-3 lg:mb-6">
          Retrouvez mes dernières publications instagram !
        </h2>
        <div>
          <Image
            src="/images/arrow-to-instagram.png"
            alt="Les dernières publications instagram de Les mains d'Audrey"
            width={200}
            height={200}
            className=" w-12 md:w-20 animate-bounce my-5"
          />
        </div>
        <InstaFeed />
      </section>
    </div>
  );
}
