import Link from "next/link";
import Cloud from "../components/Cloud";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata = {
  title: "Les mains d'Audrey - Ateliers Bébé Signe",
  description:
    "Découvrez les évènements bébé signe pour renforcer la communication entre parents et bébés. Ateliers individuels, collectifs, en collectivités et en entreprises sur la culture sourde.",
};

async function getEvents() {
  const eventsDirectory = path.join(process.cwd(), "content/events");

  if (!fs.existsSync(eventsDirectory)) {
    console.warn("Could not find events.");
    return [];
  }

  const filenames = fs.readdirSync(eventsDirectory);

  const events = filenames.map((filename) => {
    const filePath = path.join(eventsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      ...data,
      slug: filename.replace(".md", ""),
    };
  });

  return events; // return events list
}

export default async function Event() {
  const events = await getEvents(); // load events
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
        {events.map((event) => (
        <div key={event.slug} className="flex flex-row bg-lightBG rounded-xl w-[95%] lg:w-[50%] h-32  mx-auto border border-lightPink drop-shadow-lg mb-4">
          <div className="relative z-0 w-[40%] h-full overflow-hidden">
            <Image
              src={event.image}
              alt={`${event.title} organisé par les mains d'Audrey - Bébé signe`}
              fill
              className="object-cover rounded-l-xl"
            />
            <div className="flex flex-col absolute z-10 right-0 items-center bg-lightPink h-12 w-12 rounded-es-xl">
              <span className="font-italiana w-8 text-center font-bold">
                {event.date}
              </span>
            </div>
          </div>

          <div className="px-3 flex flex-col justify-around">
            <h4 className="font-italiana text-pink text-xl mb-2">
              {event.title}
            </h4>
            <div className="flex flex-row">
              <Image
                src="/images/icons/location.png"
                alt="Lieu de l'évènement organisé par les mains d'Audrey"
                width={50}
                height={50}
                className="h-5 md:h-8 lg:h-6 w-5 md:w-8 lg:w-6 mr-2"
              />
              <p className="font-jaldi">
                {event.location}
              </p>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <Image
                  src="/images/icons/clock.png"
                  alt="Heure de l'évènement organisé par les mains d'Audrey"
                  width={50}
                  height={50}
                  className="h-5 md:h-8 lg:h-6 w-5 md:w-8 lg:w-6 mr-2"
                />
                <p className="font-jaldi">{event.time}</p>
              </div>
              <Link href={`${event.link}`}>
                <button className="bg-lightBG mt-3 mb-2 border border-gold rounded-full font-italiana text-gold px-2 hover:text-lightBG hover:bg-gold">
                  Je réserve
                </button>
              </Link>
            </div>
          </div>
        </div>
        ))};
      </section>
    </div>
  );
}
