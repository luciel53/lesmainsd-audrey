

// Function to call the data from netlify
export async function getEvents() {
  // Use a dynamic URL depending on the environment (dev or prod
  const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8888/.netlify/functions/getEvents"
    : 'https://www.lesmainsdaudrey44.com/.netlify/functions/getEvents';
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Error when getting events");
    }
    const events = await response.json();
    return events; // Return list of events from database
  } catch (error) {
    console.error("Erreur lors du chargement des événements", error);
    return []; // if error return empty array
  }
}
