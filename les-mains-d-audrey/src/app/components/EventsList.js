import Image from "next/image";
import { useEffect, useState } from "react";
import { getEvents } from "./getEvents";

export default function EventsList() {
  // Initialiser l'état des événements
  const [events, setEvents] = useState([]);

  // Utiliser useEffect pour charger les événements au montage du composant
  useEffect(() => {
    const fetchEvents = async () => {
      const eventsList = await getEvents();
      setEvents(eventsList);
    };

    fetchEvents();
  }, []); // Le tableau vide [] assure que l'effet se lance uniquement au montage

  // Supprimer un événement de l'état
  const handleDelete = (indexToDelete) => {
    // Filtrer l'événement à supprimer et mettre à jour l'état
    setEvents((prevEvent) =>
      prevEvent.filter((_, index) => index !== indexToDelete)
    );

    // Appeler l'API pour supprimer l'événement du backend
    fetch("/api/events", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ index: indexToDelete }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error during deletion in the server side");
        }
      })
      .catch((error) => console.error("Error when deleting event: ", error));
  };

  return (
    <div className="max-w-4xl mx-auto w-80 md:w-96 p-4 bg-lightBG border border-lightPink shadow-lg rounded-lg">
      <h2 className="text-2xl font-italiana text-center mb-4">Mes évènements :</h2>
      {events.length === 0 ? (
        <p>Aucun évènement actuellement.</p>
      ) : (
        <div className="flex flex-col justify-between mt-2 font-jaldi">
          {events.map((event, index) => (
            <div key={index} className="flex flex-row justify-between mb-2">
              <p className="w-52">{event.title}</p>
              <p>{event.date}</p>
              <div className="flex flex-row">
                <Image
                  src="/images/icons/trash.png"
                  width={30}
                  height={30}
                  onClick={() => handleDelete(index)}
                  alt="Supprimer l'évènement"
                  className="mr-2 w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
