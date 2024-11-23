// Vérifie l'URL pour rediriger vers /admin si nécessaire
const hash = window.location.hash;
const pathname = window.location.pathname;

// Si le chemin ne contient pas "/admin", redirige vers "/admin"
if (!pathname.includes("/admin")) {
  window.location.pathname = "/admin" + hash; // Redirige vers admin en préservant le hash
}

// Gestion des tokens après la redirection
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
    document.getElementById("setup-password-form").addEventListener("submit", async (event) => {
      event.preventDefault();

      const password = document.getElementById("password").value;

      try {
        const response = await fetch("/.netlify/identity/accept-invite", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, password }),
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
