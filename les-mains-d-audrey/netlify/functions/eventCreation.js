const { existsSync, mkdirSync, writeFileSync } = require('fs');
const { join } = require('path');
const { Readable } = require('stream');
const formidable = require('formidable');

// Convertir `event.body` en flux lisible
function bufferToStream(buffer) {
  return new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    },
  });
}

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Méthode HTTP non autorisée" }),
    };
  }

  const contentType = event.headers["content-type"] || event.headers["Content-Type"];
  if (!contentType || !contentType.includes("multipart/form-data")) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Type de contenu invalide. multipart/form-data requis." }),
    };
  }

  const form = formidable({ multiples: true, maxFileSize: 10 * 1024 * 1024 });

  return new Promise((resolve, reject) => {
    const stream = bufferToStream(Buffer.from(event.body, "base64")); // Convertir le body en flux

    form.parse(stream, (err, fields, files) => {
      if (err) {
        console.error("Erreur lors de l'analyse du formulaire:", err);
        resolve({
          statusCode: 500,
          body: JSON.stringify({ message: "Erreur lors de l'analyse du formulaire", error: err }),
        });
        return;
      }

      const { title, date, location, time, link } = fields;
      const image = files.image?.newFilename;

      const eventsDir = join(__dirname, "../../content/events");
      if (!existsSync(eventsDir)) {
        mkdirSync(eventsDir, { recursive: true });
      }

      const eventData = {
        title,
        date,
        location,
        time,
        link,
        image: `/images/events/${image}`,
      };

      const eventPath = join(
        eventsDir,
        `${title.replace(/\s+/g, "-").toLowerCase()}.json`,
      );

      writeFileSync(eventPath, JSON.stringify(eventData, null, 2));

      resolve({
        statusCode: 201,
        body: JSON.stringify({ message: "Évènement créé avec succès." }),
      });
    });
  });
};
