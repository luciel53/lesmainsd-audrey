const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const users = [
  {
    username: "admin",
    passwordHash: bcrypt.hashSync("password", 10),
  },
];

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: JSON.stringify({}),
    };
  }

  if (event.httpMethod === "POST") {
    try {
      const { username, password } = JSON.parse(event.body);

      const user = users.find((user) => user.username === username);

      if (!user) {
        return {
          statusCode: 401,
          headers,
          body: JSON.stringify({ message: "Nom d'utilisateur ou mot de passe incorrect." }),
        };
      }

      const match = await bcrypt.compare(password, user.passwordHash);

      if (match) {
        const token = jwt.sign(
          { username: user.username },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ message: "Authentification réussie", token }),
        };
      } else {
        return {
          statusCode: 401,
          headers,
          body: JSON.stringify({ message: "Nom d'utilisateur ou mot de passe incorrect." }),
        };
      }
    } catch (error) {
      console.error("Erreur lors du traitement de la requête:", error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          message: "Erreur du serveur.",
          error: error.message,
        }),
      };
    }
  } else {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: "Méthode HTTP non autorisée." }),
    };
  }
};
