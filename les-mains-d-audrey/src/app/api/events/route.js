// app/api/events/route.js

import fs from "fs";
import path from "path";

export async function POST(request) {
  const { title, date, location, time, link, image } = await request.json();

  const eventsDirectory = path.join(process.cwd(), "content/events");
  const newEvent = { title, date, location, time, link, image };

  // Sauvegarder l'événement (ici on le met dans un fichier markdown)
  const eventPath = path.join(eventsDirectory, `${title.replace(/\s+/g, "-")}.md`);
  const eventData = `---\ntitle: ${title}\ndate: ${date}\nlocation: ${location}\ntime: ${time}\nlink: ${link}\nimage: ${image}\n---\n`;

  fs.writeFileSync(eventPath, eventData);

  return new Response(JSON.stringify({ message: "Événement créé avec succès" }), { status: 200 });
}
