import Image from "next/image";
import Button from "../components/Button";

export default function Event() {
  return (
    <div className="mb-8 md:mb-16">
      <h1 className="font-brittany text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 lg:mb-12">
        Contactez-moi
      </h1>
      <div className="flex flex-row justify-evenly">
        <div>
          <Image
            src="/images/logo.png"
            alt="Logo de les mains d'Audrey"
            width={400}
            height={400}
          />
          <p>Les mains d'Audrey</p>
          <p>Facilitatrice de liens Parents-enfant</p>
          <p>lesmainsdaudrey44@gmail.com</p>
          <p>Saint-Nazaire (et alentours)</p>
          <p>SMS : 06 75 34 08 67</p>
          <p>Rejoignez-moi sur les réseaux sociaux:</p>
          <div className="flex flex-row w-72 mt-2 justify-center">
            <Image
              src="/images/icons/facebook.png"
              alt="Icone Facebook"
              width={35}
              height={35}
            />
            <Image
              src="/images/icons/instagram.png"
              alt="Icone Facebook"
              width={35}
              height={35}
            />
            <Image
              src="/images/icons/linkedin.png"
              alt="Icone Facebook"
              width={35}
              height={35}
            />
          </div>
        </div>
        {/* Form */}
        <div className="mt-12">
          <form action="#" method="POST" className="font-jaldi">
            {/* Champ Nom */}
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Nom"
                className="w-96 py-1.5 px-2 border border-lightPink focus:outline-none focus:ring-2 focus:ring-pink text-pink placeholder-pink-500 font-bold"
              />
            </div>

            {/* Champ Email */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                className="w-96 py-1.5 px-2 border border-lightPink focus:outline-none focus:ring-2 focus:ring-pink text-pink placeholder-pink-500 font-bold"
              />
            </div>

            {/* Champ Sujet */}
            <div className="mb-4">
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Sujet"
                className="w-96 py-1.5 px-2 border border-lightPink focus:outline-none focus:ring-2 focus:ring-pink text-pink placeholder-pink-500 font-bold"
              />
            </div>

            {/* Champ Numéro de téléphone */}
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Numéro de téléphone"
                className="w-96 py-1.5 px-2 border border-lightPink focus:outline-none focus:ring-2 focus:ring-pink text-pink placeholder-pink-500 font-bold"
              />
            </div>

            {/* Champ Message */}
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Message"
                className="w-96 py-1.5 px-2 border border-lightPink focus:outline-none focus:ring-2 focus:ring-pink text-pink placeholder-pink-500 font-bold"
              ></textarea>
            </div>

            {/* Checkbox de consentement */}
            <div className="mb-6 w-96">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                className="mr-2 "
              />
              <label htmlFor="consent" className="text-sm text-gray-700">
                En soumettant ce formulaire, j'accepte que mes données soient
                collectées et traitées dans le cadre de ma demande. Ces
                informations ne seront utilisées que pour répondre à votre
                message et respecteront les règles de confidentialité (voir page
                des Mentions Légales).
              </label>
            </div>

            {/* Bouton Envoyer */}
            <div className="flex justify-center">
              <Button btnText="Envoyer" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
