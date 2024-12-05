// File for MongoDB Connection
const { MongoClient } = require("mongodb");

let dbConnection;

async function connectToDatabase() {
  if (dbConnection) {
    console.log("Already connected to the database.");
    return dbConnection;
  }

  const client = new MongoClient(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    dbConnection = client.db("lesmainsdaudrey44"); // Nom de ta base de données
    console.log("Connected to the MongoDB database.");
    return dbConnection;
  } catch (err) {
    console.error("Could not connect to MongoDB:", err);
    throw err;
  }
}

module.exports = { connectToDatabase };
