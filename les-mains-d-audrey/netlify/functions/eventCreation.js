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

  const form = formidable({ multiples: true });

  return new Promise((resolve, reject) => {
    form.parse(event, (err, fields, files) => {
      if (err) {
        return reject({ statusCode: 500, body: JSON.stringify(err) });
      }
      resolve({
        statusCode: 200,
        body: JSON.stringify({ fields, files }),
      })

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
