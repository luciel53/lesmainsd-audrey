const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Methode HTTP non authorisée" }),
    };
  }

  const form = new formidable.IncomingForm({
    uploadDir: path.join(__dirname, "../../public/images/events"),
    keepExtensions: true,
    });

  return new Promise((resolve, reject) => {
    form.parse(event, (err, fields, files) => {
      if (err) {
        console.error(err);
        return resolve({
          statusCode: 500,
          body: JSON.stringify({
            message: "Erreur lors de la soumission du formulaire",
          }),
        });
      }

      const { title, date, location, time, link} = fields;
      const image = files.image?.newFilename;

      // Save the event in a json file
      const eventsDir = path.join(__dirname, "../../content/events");
      if (!fs.existsSync(eventsDir)) {
        fs.mkdirSync(eventsDir, { recursive: true });
      }

      const eventData = {
        title, date, location, time,link, image: `/images/events/${image}`,
      };

      const evenpath = path.join(
        eventsDir,
        `${title.replace(/\s+/g, "-").toLowerCase()}.json`,
      );

      fs.writeFileSync(evenPath, JSON.stringify(eventData, null, 2));

      resolve({
        statusCode: 201,
        body: JSON.stringify({ message: "Evènement créé avec succès."}),
      });
    });
  });
};
