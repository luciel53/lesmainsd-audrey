const { connectToDatabase } = require("./db");

exports.handler = async function (event, context) {
  // On vérifie ici si la méthode HTTP est GET
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,  // Méthode non autorisée
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    // Connexion à la base de données
    const db = await connectToDatabase();
    if (!db) {
      console.log("Erreur de connexion à la base de données.");
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Database connection failed." }),
      };
    }

    const eventsCollection = db.collection("Events");
    console.log("Database connected: ", db);
    console.log("Collection: ", eventsCollection);

    // Récupérer les événements depuis la base de données
    const events = await eventsCollection.find({}).toArray();
    console.log("Événements récupérés: ", events);

    return {
      statusCode: 200,
      body: JSON.stringify(events),  // Retourne les événements au client
    };
  } catch (err) {
    console.error("Error occurred: ", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error fetching events",
        error: err.message,
      }),
    };
  }
};
