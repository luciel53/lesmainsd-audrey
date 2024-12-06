const { connectToDatabase } = require("./db");

exports.handler = async function (event, context) {
  // Check if HTTP method is GET
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    // Connection to the database
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

    // Recover the events from db
    const events = await eventsCollection.find({}).toArray();
    console.log("Événements récupérés: ", events);

    return {
      statusCode: 200,
      body: JSON.stringify(events),
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
