// Exemple d'appel de la fonction dans un composant Next.js
async function login(username, password) {
	const res = await fetch('/.netlify/functions/authenticate', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({ username, password }),
	});

	const data = await res.json();

	if (res.ok) {
	  console.log('Authentification réussie:', data.token);
	  // Sauvegarder le token dans le stockage local ou le cookie
	} else {
	  console.error('Erreur d\'authentification:', data.message);
	}
  }
