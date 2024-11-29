import fs from "fs";
import path from "path";

// Fonction pour charger les événements depuis le fichier JSON
export async function getEvents() {
  const filePath = path.join(process.cwd(), "content/events.json"); // Chemin vers ton fichier JSON

  try {
    // Lire le fichier JSON
    const data = fs.readFileSync(filePath, "utf-8");
    const events = JSON.parse(data); // Parse le contenu du fichier JSON

    return events; // Retourner la liste des événements
  } catch (error) {
    console.error("Erreur lors du chargement des événements", error);
    return []; // Si erreur, retourner un tableau vide
  }
}
