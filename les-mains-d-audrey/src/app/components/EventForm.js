// components/EventForm.js
import { useState } from "react";

export default function EventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  // Send form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !date || !location || !time || !link) {
      setError("Tous les champs sont requis");
      return;
    }

    const eventData = {
    title,
    date,
    location,
    time,
    link,
    image: "/images/pinkframe.png",
    };

    // Send data to api (netlify functions)
    const response = await fetch("http://localhost:8888/.netlify/functions/eventCreation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Événement créé avec succès");
      // Réinitialiser le formulaire
      setTitle("");
      setDate("");
      setLocation("");
      setTime("");
      setLink("");
      setImage(null);
      setError("");
    } else {
      setError(result.message || "Erreur lors de la création de l'événement");
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-80 lg:w-96 p-4 bg-lightBG border border-lightPink shadow-lg rounded-lg">
      <h2 className="text-2xl font-italiana text-center mb-4">
        Créer un Événement
      </h2>
      {error && (
        <div className="bg-red-200 p-2 mb-4 rounded-md text-red-600">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="">
        <div className="mb-4 font-jaldi">
          <label htmlFor="title" className="block font-medium mb-2">
            Titre de l&apos;événement
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="ex: Atelier Bébé Signe en crèche..."
            className="w-full p-1 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4 font-jaldi">
          <label htmlFor="date" className="block font-medium mb-2">
            Date de l&apos;événement
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full p-1 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4 font-jaldi">
          <label htmlFor="location" className="block font-medium mb-2">
            Lieu de l&apos;événement
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="ex: Ecole Saint-Matthieu, 7 rue de l'église, 95210 Somewhere..."
            required
            className="w-full p-1 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4 font-jaldi">
          <label htmlFor="time" className="block font-medium mb-2">
            Heure de l&apos;événement
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="w-full p-1 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4 font-jaldi">
          <label htmlFor="link" className="block font-medium mb-2">
            Lien pour réserver
          </label>
          <input
            type="url"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="ex: https://cheery-mandazi-1cfdfe.netlify.app/contact"
            required
            className="w-full p-1 border border-gray-300 rounded-md"
          />
        </div>


        <div className="text-center my-3">
          <button
            type="submit"
            className=" py-1 px-3 mt-2 font-italiana text-2xl border border-gold bg-gold text-white rounded-md hover:bg-lightBG hover:text-gold"
          >
            Publier
          </button>
        </div>
      </form>
    </div>
  );
}
