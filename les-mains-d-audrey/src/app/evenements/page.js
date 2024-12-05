import Link from "next/link";
import Cloud from "../components/Cloud";
import Image from "next/image";
import { getEvents } from "../components/getEvents";

export const metadata = {
  title: "Les mains d'Audrey - Ateliers Bébé Signe",
  description:
    "Découvrez les évènements bébé signe pour renforcer la communication entre parents et bébés. Ateliers individuels, collectifs, en collectivités et en entreprises sur la culture Sourde.",
};

// function to formate the dates
function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

// function to sort the events from the more recent to the older
function sortEventsByDate(events) {
  return events.sort((a, b) => new Date(a.date) - new Date(b.date));
}

export default async function Event() {
  const events = await getEvents(); // loads the events from json file
  const sortedEvents = sortEventsByDate(events);

  return (
    <div>
      <Cloud />
      {/* Events presentation */}
      <section className="relative z-10 lg:mb-8">
        <h1 className="font-brittany text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 lg:mb-12">
          Évènements
        </h1>
        <h2 className="font-italiana text-xl md:text-3xl lg:text-4xl mb-3 lg:mb-6">
          Réservez votre créneau
        </h2>
        <h3 className="mx-auto w-[88%] md:w-[70%] lg:w-[60%] font-jaldi md:text-xl text-justify mb-4">
          J&apos;organise régulièrement des <strong>évènements</strong> comme
          des <strong>ateliers</strong>, des{" "}
          <strong>interventions en collectivités</strong>, etc... Vous pouvez
          réserver votre créneau ci-dessous! Pour toute information,
          n&apos;hésitez pas à{" "}
          <Link href="/contact">
            <span className="font-jaldi font-bold md:text-xl underline text-pink hover:text-lightPink">
              me contacter
            </span>{" "}
          </Link>
          !
        </h3>
      </section>
      {/* Events Calendar */}
      <section>
        {sortedEvents.map((event) => (
          <div
            key={event.title}
            className="flex flex-row bg-lightBG rounded-xl w-[95%] lg:w-[65%] xl:w-[50%] h-32 md:h-36 mx-auto border border-lightPink drop-shadow-lg mb-4 transition-transform duration-200 ease-in-out hover:scale-105 hover:drop-shadow-lg"
          >
            {/* Left part : Image & Date */}
            <div className=" flex flex-row justify-center items-center relative z-0 w-48 h-full overflow-hidden">
              <Image
                src={event.image}
                alt={`${event.title} organisé par les mains d'Audrey - Bébé signe`}
                fill
                className="object-cover"
              />
              <div className="flex flex-col z-10 justify-center items-center h-16 w-16 opacity-80">
                <span className="font-italiana text-sm md:text-md xl:text-lg w-16 text-center md:-mt-1 lg:-mt-1 font-bold">
                  {formatDate(event.date)}
                </span>
              </div>
            </div>
            {/* Informations part (location, hour, title, link...) */}
            <div className="px-3 flex flex-col justify-around xl:w-[75%]">
              <h4 className="font-italiana text-pink md:text-xl xl:text-2xl mb-2 w-60 md:w-96 xl:w-[500px] overflow-y-auto h-12 ">
                {event.title}
              </h4>
              <div className="flex flex-row w-60 md:w-[450px] xl:w-[530px]">
                <Image
                  src="/images/icons/location.png"
                  alt="Lieu de l'évènement organisé par les mains d'Audrey"
                  width={50}
                  height={50}
                  className="h-5 md:h-8 lg:h-6 w-5 md:w-8 lg:w-6 mr-2"
                />
                <p className="font-jaldi xl:text-lg md:w-96 xl:w-[500px] overflow-y-auto h-12">
                  {event.location}
                </p>
              </div>
              <div className="flex flex-row w-52 md:w-80 xl:w-[530px] mr-0 lg:mr-10 justify-between">
                <div className="flex flex-row">
                  <Image
                    src="/images/icons/clock.png"
                    alt="Heure de l'évènement organisé par les mains d'Audrey"
                    width={50}
                    height={50}
                    className="h-5 md:h-8 lg:h-6 w-5 md:w-8 lg:w-6 mr-2"
                  />
                  <p className="font-jaldi md:text-lg">{event.time}</p>
                </div>
                <Link
                  href={`${
                    typeof event.link === "string" && event.link.startsWith("http")
                      ? event.link
                      : "#"
                  }`}
                >
                  <button className="bg-gold text-lightBG mt-3 mb-2 xl:mb-4 xl:mr-10 border border-gold rounded-full font-italiana px-2 hover:text-gold hover:bg-lightBG">
                    Je réserve
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
