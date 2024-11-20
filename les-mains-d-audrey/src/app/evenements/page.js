import Link from "next/link";
import Cloud from "../components/Cloud";
import Image from "next/image";

export const metadata = {
  title: "Les mains d'Audrey - Ateliers Bébé Signe",
  description:
    "Découvrez les évènements bébé signe pour renforcer la communication entre parents et bébés. Ateliers individuels, collectifs, en collectivités et en entreprises sur la culture sourde.",
};

export default function Event() {
  return (
    <div>
      <Cloud />
      <section className=" relative z-10">
        <h1 className="font-brittany text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 lg:mb-12">
          Évènements
        </h1>
        <h2 className=" font-italiana text-xl md:text-3xl lg:text-4xl mb-3 lg:mb-6">
          Réservez votre créneau
        </h2>
        <h3 className=" mx-auto w-[88%] md:w-[70%] lg:w-[60%] font-jaldi md:text-xl text-justify mb-4">
          J&apos;organise régulièrement des <strong>évènements</strong> comme
          des <strong>ateliers</strong>, des{" "}
          <strong>interventions en collectivités</strong>, etc... Vous pouvez
          réserver votre créneau ci-dessous! Pour toute information,
          n&apos;hésitez pas à{" "}
          <Link href="/contact">
            <span className=" font-jaldi font-bold md:text-xl underline">
              me contacter
            </span>{" "}
          </Link>
          !
        </h3>
      </section>
      <section>
        <div className="flex flex-row bg-lightBG rounded-xl w-80 h-32 z-10 relative mx-auto border border-lightPink drop-shadow-lg">
          <div className="flex flex-row">
            image
            <div className=" flex flex-col justify-center items-center bg-lightPink h-12 w-12">
              <span>date</span>
            </div>
          </div>
          <div className="px-3">
            <h4 className=" font-italiana text-pink text-xl mb-1">
              Nom de l evenement
            </h4>
            <div className="flex flex-row ">
              <Image
                src="/images/icons/location.png"
                alt="Lieu de l'évènement organisé par les mains d'Audrey"
                width={50}
                height={50}
                className="h-5 md:h-8 w-5 md:w-8"
              />
              <p>lieu</p>
            </div>
            <div className="flex flex-row ">
              <Image
                src="/images/icons/clock.png"
                alt="Lieu de l'évènement organisé par les mains d'Audrey"
                width={50}
                height={50}
                className="h-5 md:h-8 w-5 md:w-8"
              />
              <p>heure</p>
            </div>
            <Link href="/contact">
              <button className="bg-lightBG border border-gold rounded-full font-italiana text-gold px-2 hover:text-lightBG hover:bg-gold">
                Je réserve
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
