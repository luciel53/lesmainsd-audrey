exports.handler = async (event, context) => {
	// Logique pour accepter l'invitation, gérer le token, etc.
	return {
	  statusCode: 200,
	  body: JSON.stringify({ message: "Invitation acceptée." }),
	};
  };
