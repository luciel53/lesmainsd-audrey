// Vérifie et traite les tokens présents dans l'URL
const hash = window.location.hash;

// Gestion du "confirmation_token" (réinitialisation du mot de passe)
if (hash.includes("recovery_token")) {
  const token = hash.split("recovery_token=")[1];
  if (token) {
    window.location.href = `/admin/#recovery_token=${token}`;
  }
}

if (hash.includes("invite_token")) {
  const token = hash.split("invite_token=")[1];

  if (token) {
    // Affiche un formulaire pour définir un mot de passe
    document.body.innerHTML = `
      <form id="setup-password-form">
        <label for="password">Définir un mot de passe :</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Valider</button>
      </form>
    `;

    // Gestion de la soumission du formulaire
    document
      .getElementById("setup-password-form")
      .addEventListener("submit", async (event) => {
        event.preventDefault();

        const password = document.getElementById("password").value;

        try {
          // Utilisation de Netlify Identity API pour valider l'invitation
          const response = await fetch("/.netlify/identity/accept-invite", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: token,
              password: password,
            }),
          });

          if (response.ok) {
            alert("Mot de passe défini avec succès !");
            window.location.href = "/admin/"; // Redirige vers la page admin
          } else {
            const error = await response.json();
            alert(`Erreur : ${error.msg}`);
          }
        } catch (err) {
          console.error("Erreur réseau :", err);
          alert("Une erreur est survenue. Veuillez réessayer.");
        }
      });
  }
}


