import { join } from "path";
import { readFileSync, writeFileSync } from "fs";

export async function GET(request) {
  try {
    const filePath = join(process.cwd(), "content", "events.json");

    // read the json file
    const fileContent = readFileSync(filePath, "utf-8");
    const events = JSON.parse(fileContent);

    return new Response(JSON.stringify(events), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Erreur lors de la lecture des évènements" }),
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const filePath = join(process.cwd(), "content", "events.json");

    // Lire le corps de la requête pour récupérer l'index
    const body = await request.json();
    const { index } = body;

	if (index === undefined) {
		return new Response(
			JSON.stringify({ error: "missing index" }),
			{ status: 400 }
		);
	}

    // Lire le fichier JSON
    const fileContent = readFileSync(filePath, "utf-8");
    const events = JSON.parse(fileContent);

    // Supprimer l'événement à l'index donné
    const updatedEvents = events.filter((_, i) => i !== index);

    // Écrire la nouvelle liste dans le fichier JSON
    writeFileSync(filePath, JSON.stringify(updatedEvents, null, 2));

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    return new Response(
      JSON.stringify({ error: "Erreur lors de la suppression" }),
      { status: 500 }
    );
  }
}
