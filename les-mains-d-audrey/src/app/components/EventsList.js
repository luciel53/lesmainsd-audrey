import Image from "next/image";
import { useEffect, useState } from "react";
import { getEvents } from "./getEvents";

export default function EventsList() {
  // setting events state
  const [events, setEvents] = useState([]);

  // use useEffect to load the events when component is loading
  useEffect(() => {
    const fetchEvents = async () => {
      const eventsList = await getEvents();
      setEvents(eventsList);
    };

    fetchEvents();
  }, []);

  // To delete an event from database
  const handleDelete = (eventId) => {
    console.log("IDDDDDD", eventId);

    // Sort an event to delete and update the state
    setEvents((prevEvent) =>
      prevEvent.filter((event) => event._id !== eventId));

    // Call the API to delete the event from database
    fetch("/.netlify/functions/deleteEvent", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ index: eventId }),
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
                  onClick={() => handleDelete(event._id)}
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
