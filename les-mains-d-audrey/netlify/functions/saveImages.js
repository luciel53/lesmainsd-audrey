const { writeFile } = require("fs").promises;
const { join } = require("path");

async function saveImage(base64Image, imageName) {
	const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");
	const imagePath = join(__dirname, "../../public/images/events", imageName);

	try {
		await writeFile(imagePath, base64Data, { encoding: "base64" });
		return `uploads/${imageName}`
	} catch (error) {
		throw new Error("Erreur lors de la sauvegarde de l'image");
	}
}
