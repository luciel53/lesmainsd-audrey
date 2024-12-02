import Image from "next/image";
import Link from "next/link";
import Cloud from "../components/Cloud";

export const metadata = {
  title: "Les mains d'Audrey - Ateliers Bébé Signe",
  description:
    "Découvrez les ateliers de bébé signe pour renforcer la communication entre parents et bébés. Ateliers individuels, collectifs, en collectivités et ateliers en entreprises sur la culture Sourde.",
};

export default function About() {
  return (
    <div>
      <h1 className="font-brittany text-4xl md:text-6xl mb-6 md:mb-8">
        À propos
      </h1>
      <section className="mx-auto w-[88%] md:w-[70%] lg:w-[60%] font-jaldi md:text-xl text-justify mb-4">
        <h2 className=" font-italiana text-xl md:text-3xl lg:text-4xl md:text-left  mb-3 lg:mb-6 relative z-10">
          Qui suis-je?
        </h2>
        <div>
          <Cloud />
          <article className="text-justify relative z-10 font-jaldi md:text-xl">
            <p className="mb-4">
              Je m&apos;appelle <strong>Audrey</strong>, je suis passionnée par la communication
              et le lien unique qui se crée entre les parents et leurs enfants.{" "}
              <strong className=" font-normal">Sourde de naissance</strong>, j&apos;ai découvert dès mon plus jeune âge la
              richesse des langues non verbales et l&apos;importance de{" "}
              <em>l&apos;expression des émotions</em>.
            </p>
            <p className="mb-4">
              Ce parcours m&apos;a menée, au fil des années, à me spécialiser
              dans la <strong>communication par les signes avec les bébés</strong>, une
              merveilleuse passerelle qui permet aux tout-petits de communiquer
              bien avant de savoir parler. Après plusieurs expériences
              professionnelles enrichissantes et étant moi-même devenue maman,
              j&apos;ai décidé de me consacrer entièrement à cette vocation en
              créant <strong>Les Mains d&apos;Audrey</strong>.
            </p>
            <p className="mb-4">
              Mon objectif est simple :{" "}
              <em>
                offrir aux parents les outils pour renforcer le lien avec leur
                enfant
              </em>
              , grâce à des ateliers adaptés et bienveillants, basés sur les
              signes. Formée par l&apos;<strong>Académie Éveil et Signes</strong>, je me suis
              aussi nourrie de nombreuses rencontres et formations pour offrir
              un accompagnement sur mesure, qui prend en compte les besoins et
              le rythme de chaque famille.
            </p>
            <p className="mb-4">
              Chaque jour, je suis émerveillée de voir à quel point les bébés
              sont de véritables éponges à émotions et à connaissances. Je suis
              honorée de pouvoir guider les familles dans cette belle aventure
              de <strong>communication parents-enfant</strong>, où chaque signe devient un mot et
              chaque geste une preuve de complicité.
            </p>
          </article>
        </div>
      </section>
      <section className="flex flex-row justify-center gap-12 mb-12">
        <div className="flex flex-row justify-center font-italiana text-lg md:text-3xl text-lightBG bg-gold mt-8 px-4 py-2 border border-gold rounded-xl hover:text-gold hover:bg-lightBG hover:opacity-90 drop-shadow-lg transition duration-300 ease-in-out">
          <Link href="/services">
            <button aria-label="Accédez à la page de mes prestations">
              Mes prestations
            </button>
          </Link>
        </div>

        <div className="flex flex-row justify-center  font-italiana text-lg md:text-3xl text-lightBG bg-gold mt-8 px-4 py-2 border border-gold rounded-xl hover:text-gold hover:bg-lightBG hover:opacity-90 drop-shadow-lg transition duration-300 ease-in-out">
          <Link href="/contact">
            <button aria-label="Accédez à la page contact" className="">
              Contactez-moi
            </button>
          </Link>
        </div>
      </section>
      <section className="relative z-10 mt-6 mb-6 mx-4 md:mx-20 lg:mx-80">
        <h2 className=" font-italiana text-xl md:text-3xl lg:text-4xl md:text-left  mb-3 lg:mb-6">
          On parle de moi
        </h2>
        <figure>
          <Image
            src="/images/article-presse.jpg"
            alt="Article de presse sur Les Mains d'Audrey, ateliers bébé signe et communication parent-bébé"
            width={800}
            height={1200}
            className="mx-auto"
          />
          <figcaption className="italic font-jaldi text-center">Article publié dans la presse sur Les mains d'Audrey. Entreprise dédiée à la communication parent-bébé à travers le bébé signe.</figcaption>
        </figure>
      </section>
    </div>
  );
}
