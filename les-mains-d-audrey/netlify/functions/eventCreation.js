const { existsSync, mkdirSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Méthode HTTP non autorisée" }),
    };
  }

  // Parser le corps de la requête en JSON
  let eventData;
  try {
    eventData = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Données invalides. JSON attendu." }),
    };
  }

  const { title, date, location, time, link, image } = eventData;

  if (!title || !date || !location || !time || !link || !image) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Tous les champs sont requis" }),
    };
  }

  // Définir le chemin du fichier JSON contenant tous les événements
  const eventsFilePath = join(__dirname, "../../content/events.json");

  // Vérifier si le fichier des événements existe, sinon le créer
  let events = [];
  if (existsSync(eventsFilePath)) {
    try {
      // Lire le contenu du fichier JSON
      const fileContent = readFileSync(eventsFilePath, "utf-8");
      events = JSON.parse(fileContent); // Parse le contenu en tant que tableau d'événements
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Erreur de lecture du fichier des événements." }),
      };
    }
  }

  // Créer un nouvel objet événement
  const newEvent = {
    title,
    date,
    location,
    time,
    link,
    image: `/images/events/${image}`, // Le chemin d'image est relatif
  };

  // Ajouter le nouvel événement au tableau des événements
  events.push(newEvent);

  // Sauvegarder le tableau d'événements dans le fichier JSON
  try {
    writeFileSync(eventsFilePath, JSON.stringify(events, null, 2));
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Erreur lors de la sauvegarde des événements." }),
    };
  }

  return {
    statusCode: 201,
    body: JSON.stringify({ message: "Événement créé avec succès." }),
  };
};
