// Vérifie et traite les tokens présents dans l'URL
const hash = window.location.hash;

// Gestion du "confirmation_token" (réinitialisation du mot de passe)
if (hash.includes("confirmation_token")) {
  const token = hash.split("confirmation_token=")[1];
  if (token) {
    window.location.href = `/admin/#confirmation_token=${token}`;
  }
}

// Gestion du "invite_token" (invitation d'utilisateur)
if (hash.includes("invite_token")) {
  window.location.href = "/admin/";
}

