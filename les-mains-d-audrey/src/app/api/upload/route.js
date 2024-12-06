// import formidable from "formidable";
// import fs from "fs";
// import path from "path";
// import { v4 as uuidv4 } from "uuid";
// import { NextResponse } from "next/server";

// // Dossier pour stocker les fichiers uploadés
// const uploadDir = path.join(process.cwd(), "public/uploads");

// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Configuration de l'API Next.js pour désactiver le bodyParser (pour que formidable prenne le relais)
// export const config = {
//   api: {
//     bodyParser: false, // Désactive le bodyParser de Next.js
//   },
// };

// export async function POST(req) {
//   return new Promise((resolve, reject) => {
//     const form = formidable({
//       uploadDir,
//       keepExtensions: true, // Garder l'extension d'origine des fichiers
//       maxFileSize: 5 * 1024 * 1024, // Taille maximale de 5MB
//     });

//     // Utiliser directement le stream de la requête
//     req.body = req; // Important pour pouvoir transmettre la requête brute
//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         return reject(NextResponse.json({ error: "Erreur d'upload" }, { status: 500 }));
//       }

//       // Vérification des fichiers uploadés
//       const uploadedFiles = Object.values(files).map((file) => {
//         const uniqueName = `${uuidv4()}-${file.originalFilename}`;
//         const newPath = path.join(uploadDir, uniqueName);
//         fs.renameSync(file.filepath, newPath); // Déplacer le fichier
//         return `/uploads/${uniqueName}`; // URL du fichier
//       });

//       return resolve(
//         NextResponse.json({
//           message: "Fichier uploadé avec succès",
//           files: uploadedFiles,
//         })
//       );
//     });
//   });
// }
