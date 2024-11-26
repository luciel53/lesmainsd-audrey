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
      <div className="mx-auto w-[88%] md:w-[70%] lg:w-[60%] font-jaldi md:text-xl text-justify mb-4">
        <h2 className=" font-italiana text-xl md:text-3xl lg:text-4xl md:text-left  mb-3 lg:mb-6 relative z-10">
          Qui suis-je?
        </h2>
        <div>
          <Cloud />
          <p className="text-justify relative z-10 font-jaldi md:text-xl">
            Je m&apos;appelle Audrey, je suis passionnée par la communication et le
            lien unique qui se crée entre les parents et leurs enfants. Sourde
            de naissance, j&apos;ai découvert dès mon plus jeune âge la richesse des
            langues non verbales et l&apos;importance de{" "}
            <em>l&apos;expression des émotions</em>. Ce parcours m&apos;a menée, au fil
            des années, à me spécialiser dans la communication par les signes
            avec les bébés, une merveilleuse passerelle qui permet aux
            tout-petits de communiquer bien avant de savoir parler. Après
            plusieurs expériences professionnelles enrichissantes et étant
            moi-même devenue maman, j&apos;ai décidé de me consacrer entièrement à
            cette vocation en créant Les Mains d&apos;Audrey. Mon objectif est simple
            : offrir aux parents les outils pour renforcer le lien avec leur
            enfant, grâce à des ateliers adaptés et bienveillants, basés sur les
            signes. Formée par l&apos;Académie Éveil et Signes, je me suis aussi
            nourrie de nombreuses rencontres et formations pour offrir un
            accompagnement sur mesure, qui prend en compte les besoins et le
            rythme de chaque famille. Chaque jour, je suis émerveillée de voir à
            quel point les bébés sont de véritables éponges à émotions et à
            connaissances. Je suis honorée de pouvoir guider les familles dans
            cette belle aventure de communication parents-enfant, où chaque
            signe devient un mot et chaque geste une preuve de complicité.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-12 mb-12">
        <div className="flex flex-row justify-center  font-italiana text-lg md:text-3xl text-gold bg-lightBG mt-8 px-4 py-2 border border-gold rounded-xl hover:text-lightBG hover:bg-gold hover:opacity-90 drop-shadow-lg transition duration-300 ease-in-out">
          <Link href="/services">
            <button className="">Mes prestations</button>
          </Link>
        </div>

        <div className="flex flex-row justify-center  font-italiana text-lg md:text-3xl text-gold bg-lightBG mt-8 px-4 py-2 border border-gold rounded-xl hover:text-lightBG hover:bg-gold hover:opacity-90 drop-shadow-lg transition duration-300 ease-in-out">
          <Link href="/contact">
            <button className="">Contactez-moi</button>
          </Link>
        </div>
      </div>
      <div className="relative z-10 mt-6 mb-6 mx-4 md:mx-20 lg:mx-80">
        <h2 className=" font-italiana text-xl md:text-3xl lg:text-4xl md:text-left  mb-3 lg:mb-6">
          On parle de moi
        </h2>
        <div>
          <Image
            src="/images/article-presse.jpg"
            alt="Article de presse sur Les Mains d'Audrey, ateliers bébé signe et communication parent-bébé"
            width={800}
            height={1200}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
