const { existsSync, mkdirSync, writeFileSync, readFileSync } = require("fs");
const { join } = require("path");
const { connectToDatabase } = require("./db");

exports.handler = async function (event, context) {
  // Vérifier si c'est une requête POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body);

    const { title, date, location, time, link, image } = body;

    // Validate data
    if (!title || !date || !location || !time || !link || !image) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields." }),
      };
    };
    const imagePath = image && typeof image === "string" ? image : "/images/pinkframe.png";

    // Connection to the database
    const db = await connectToDatabase();
    const eventsCollection = db.collection("Events");

    // Create a new event
    const newEvent = {
      title,
      date,
      location,
      time,
      link,

    image: imagePath,
    };

    const result = await eventsCollection.insertOne(newEvent);

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Event created successfully",
        eventId: result.insertedId,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error creating event",
        error: err.message,
      }),
    };
  }
};
// return {
//   statusCode: 405,
//   headers: {
//     "Access-Control-Allow-Origin": "*", // Permettre les requêtes depuis n'importe quelle origine
//     "Access-Control-Allow-Methods": "POST, OPTIONS", // Méthodes autorisées
//     "Access-Control-Allow-Headers": "Content-Type", // En-têtes autorisées
//   },
//   body: JSON.stringify({ message: "Méthode HTTP non autorisée" }),
// };
// }

// // Gérer les requêtes OPTIONS (prévol)
// if (event.httpMethod === "OPTIONS") {
//   return {
//     statusCode: 204, // Pas de contenu
//     headers: {
//       "Access-Control-Allow-Origin": "*", // Permettre les requêtes depuis n'importe quelle origine
//       "Access-Control-Allow-Methods": "POST, OPTIONS", // Méthodes autorisées
//       "Access-Control-Allow-Headers": "Content-Type", // En-têtes autorisées
//     },
//   };
// }

// Parse le corps de la requête JSON
// let eventData;
// try {
//   eventData = JSON.parse(event.body);
// } catch (error) {
//   return {
//     statusCode: 400,
//     headers: {
//       "Access-Control-Allow-Origin": "*", // Permettre les requêtes depuis n'importe quelle origine
//     },
//     body: JSON.stringify({ message: "Données invalides. JSON attendu." }),
//   };
// }

// Logique de création de l'événement...
//   const { title, date, location, time, link, image } = eventData;

//   if (!title || !date || !location || !time || !link || !image) {
//     return {
//       statusCode: 400,
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({ message: "Tous les champs sont requis" }),
//     };
//   }

//   const eventsFilePath = join(__dirname, "../../content/events.json");
//   let events = [];
//   if (existsSync(eventsFilePath)) {
//     const fileContent = readFileSync(eventsFilePath, "utf-8");
//     events = JSON.parse(fileContent);
//   }

//   const newEvent = {
//     title,
//     date,
//     location,
//     time,
//     link,
//     image,
//   };

//   events.push(newEvent);

//   try {
//     writeFileSync(eventsFilePath, JSON.stringify(events, null, 2));
//   } catch (error) {
//     return {
//       statusCode: 500,
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({ message: "Erreur lors de la sauvegarde des événements." }),
//     };
//   }

//   return {
//     statusCode: 201,
//     headers: {
//       "Access-Control-Allow-Origin": "*", // Permettre les requêtes depuis n'importe quelle origine
//     },
//     body: JSON.stringify({ message: "Événement créé avec succès." }),
//   };
// };
