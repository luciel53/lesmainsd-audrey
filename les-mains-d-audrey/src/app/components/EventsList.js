import Image from "next/image";

export default function EventsList() {
  return (
    <div className="max-w-4xl mx-auto w-80 md:w-96 p-4 bg-lightBG border border-lightPink shadow-lg rounded-lg">
      <h2 className="text-2xl font-italiana text-center mb-4">
        Mes évènements :
      </h2>
      <div className="flex flex-row justify-between mt-2 font-jaldi">
        <p>Titre</p>
        <div className="flex flex-row ">
          <Image
            src="/images/icons/trash.png"
            width={30}
            height={30}
            alt="Supprimer l'évènement"
            className="mr-2 w-6 h-6"
          />
          <Image
            src="/images/icons/update.png"
            width={30}
            height={30}
            alt="Modifier l'évènement"
            className="w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
}
