// Importation de Netlify CMS
import CMS from 'decap-cms-app';  // Si vous utilisez Decap CMS, c'est cette version du CMS

// Initialisation du CMS
CMS.init();

// Vous pouvez aussi ajouter des personnalisations ou des prévisualisations si nécessaire
CMS.registerPreviewTemplate("my-template", MyTemplate);
