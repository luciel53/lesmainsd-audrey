const { existsSync, mkdirSync, writeFileSync, readFileSync } = require("fs");
const { join } = require("path");
const { connectToDatabase } = require("./db");

exports.handler = async function (event, context) {
  // Check if it s a post request
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
