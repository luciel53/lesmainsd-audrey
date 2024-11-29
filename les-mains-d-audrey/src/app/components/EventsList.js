

import Image from "next/image";
import { useEffect, useState } from "react";
// import { getEvents } from "./getEvents";

export default function EventsList() {
  // const events = await getEvents();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // load the events from API
    fetch("/api/events")
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Error when loading events");
        }
        return response.json();
      })
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);

  // delete an event
  const handleDelete = (indexToDelete) => {
    // filter the event to delete and update state
    setEvents((prevEvent) => prevEvent.filter((_, index) => index !== indexToDelete));

    // call the api to delete in the json file
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
    <>
      <div className="max-w-4xl mx-auto w-80 md:w-96 p-4 bg-lightBG border border-lightPink shadow-lg rounded-lg">
        <h2 className="text-2xl font-italiana text-center mb-4">
          Mes évènements :
        </h2>
        {events.length === 0 ? (
          <p>Aucun évènement actuellement.</p>
        ) : (
          <div className="flex flex-col justify-between mt-2 font-jaldi">
            {events.map((event, index) => {
              return (
              <div key={index} className="flex flex-row justify-between">
                <p>{event.title}</p>
                <div className="flex flex-row ">
                  <Image
                    src="/images/icons/trash.png"
                    width={30}
                    height={30}
                    onClick={() => handleDelete(index)}
                    alt="Supprimer l'évènement"
                    className="mr-2 w-6 h-6 cursor-pointer"
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
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
