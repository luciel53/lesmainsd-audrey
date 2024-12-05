const { connectToDatabase } = require("./db");
const { ObjectId } = require("mongodb");

exports.handler = async function (event, context) {
  if (event.httpMethod !== "DELETE") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed!" }),
    };
  }

  try {
    const { index } = JSON.parse(event.body);

    if (typeof index !== "string") {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid event ID" }),
      };
    }

    // Connection to the database
    const db = await connectToDatabase();
    if (!db) {
      console.log("Erreur de connexion à la base de données");
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Database connection failed" }),
      };
    }

    const eventsCollection = db.collection("Events");

    // Delete the event with its ID
    const result = await eventsCollection.deleteOne({
      _id: new ObjectId(index),
    });
    if (result.deletedCount === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Event not found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Event successfully deleted" }),
    };
  } catch (error) {
    console.error("Error ocurred: ", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error deleting event",
        error: error.message,
      }),
    };
  }
};
