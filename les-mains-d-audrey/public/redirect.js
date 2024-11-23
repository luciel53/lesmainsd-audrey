// Vérifie l'URL pour rediriger vers /admin si nécessaire
const hash = window.location.hash;
const pathname = window.location.pathname;

// Redirection vers /admin si nécessaire
if (!pathname.includes("/admin")) {
  window.location.pathname = "/admin" + hash; // Redirige vers /admin en préservant le hash
}

// Gestion des tokens après redirection
if (hash.includes("invite_token")) {
  const token = hash.split("invite_token=")[1];
  if (token) {
    // Affichage d'un formulaire pour définir un mot de passe
    document.body.innerHTML = `
      <div>
        <h1>Définir votre mot de passe</h1>
        <form id="setup-password-form">
          <label for="password">Nouveau mot de passe :</label>
          <input type="password" id="password" name="password" placeholder="Nouveau mot de passe" required />
          <button type="submit">Valider</button>
        </form>
        <p id="status-message" style="color: red; display: none;"></p>
      </div>
    `;

    // Gestion de la soumission du formulaire
    document.getElementById("setup-password-form").addEventListener("submit", async (event) => {
      event.preventDefault();

      const password = document.getElementById("password").value;
      const statusMessage = document.getElementById("status-message");

      try {
        // Affiche un message de chargement
        statusMessage.style.display = "block";
        statusMessage.style.color = "blue";
        statusMessage.textContent = "Validation en cours...";

        const response = await fetch("/.netlify/identity/accept-invite", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, password }),
        });

        if (response.ok) {
          alert("Mot de passe défini avec succès !");
          window.location.href = "/admin/"; // Redirection vers /admin
        } else {
          const error = await response.json();
          statusMessage.style.color = "red";
          statusMessage.textContent = `Erreur : ${error.msg}`;
        }
      } catch (err) {
        console.error("Erreur réseau :", err);
        statusMessage.style.color = "red";
        statusMessage.textContent = "Une erreur réseau est survenue. Veuillez réessayer.";
      }
    });
  } else {
    alert("Le token d'invitation est invalide ou manquant.");
  }
}
