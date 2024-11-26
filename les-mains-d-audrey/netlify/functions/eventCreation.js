exports.handler = async (event) => {
  if (event.httpMethod === "POST") {
    const { eventId, userName } = JSON.parse(event.body);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "L'évènement a bien été créé !" }),
    };
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Methode HTTP non authorisée" }),
    };
  }
};
