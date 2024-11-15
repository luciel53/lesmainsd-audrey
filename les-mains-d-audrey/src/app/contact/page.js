import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

export default function Event() {
  return (
    <div className="mb-8 md:mb-16">
      <h1 className="font-brittany text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 lg:mb-12">
        Contactez-moi
      </h1>
      <div className="flex flex-wrap-reverse font-jaldi md:text-xl lg:flex-row justify-evenly mx-40">
        <div className="md:mt-8 mx-4">
          <Image
            src="/images/logo.png"
            alt="Logo de les mains d'Audrey"
            width={400}
            height={400}
            className=" w-[60%] md:w-[60%] mx-auto drop-shadow-lg"
          />
          <p>Les mains d'Audrey</p>
          <p>Facilitatrice de liens Parents-enfant</p>
          <p>lesmainsdaudrey44@gmail.com</p>
          <p>Saint-Nazaire (et alentours)</p>
          <p>SMS : 06 75 34 08 67</p>
          <p>Retrouvez-moi sur les réseaux sociaux:</p>
          <div className="flex flex-row w-72 mt-2 justify-center">
            <Link href="https://www.facebook.com/profile.php?id=61558150675264">
              <Image
                src="/images/icons/facebook.png"
                alt="Icone Facebook"
                width={35}
                height={35}
                className="hover:opacity-80"
              />
            </Link>
            <Link href="https://www.instagram.com/lesmainsdaudrey44/#">
              <Image
                src="/images/icons/instagram.png"
                alt="Icone Facebook"
                width={35}
                height={35}
                className="hover:opacity-80"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/audrey-florenceau-les-mains-d-audrey-a79916111/">
              <Image
                src="/images/icons/linkedin.png"
                alt="Icone Facebook"
                width={35}
                height={35}
                className="hover:opacity-80"
              />
            </Link>
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
                className=" w-80 md:w-96 py-1.5 px-2 border border-lightPink focus:outline-none placeholder-pink focus:ring-2 focus:ring-pink text-pink placeholder-pink-500"
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
                className=" w-80 md:w-96 py-1.5 px-2 border border-lightPink focus:outline-none placeholder-pink focus:ring-2 focus:ring-pink text-pink placeholder-pink-500 font-normal"
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
                className=" w-80 md:w-96 py-1.5 px-2 border border-lightPink focus:outline-none placeholder-pink focus:ring-2 focus:ring-pink text-pink placeholder-pink-500 font-normal"
              />
            </div>

            {/* Champ Numéro de téléphone */}
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Numéro de téléphone"
                className=" w-80 md:w-96 py-1.5 px-2 border border-lightPink focus:outline-none placeholder-pink focus:ring-2 focus:ring-pink text-pink placeholder-pink-500 font-normal"
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
                className=" w-80 md:w-96 py-1.5 px-2 border border-lightPink focus:outline-none placeholder-pink focus:ring-2 focus:ring-pink text-pink placeholder-pink-500 font-normal"
              ></textarea>
            </div>

            {/* Checkbox de consentement */}
            <div className="mb-6 w-80 md:w-96">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                className="mr-2 "
              />
              <label
                htmlFor="consent"
                className="text-sm text-gray-700 text-justify"
              >
                En soumettant ce formulaire, j'accepte que mes données soient
                collectées et traitées dans le cadre de ma demande. Ces
                informations ne seront utilisées que pour répondre à votre
                message et respecteront les règles de confidentialité (voir page
                des Mentions Légales).
              </label>
            </div>

            {/* Sender button */}
            <div className="flex justify-center">

    <div className="font-italiana text-lg md:text-3xl text-gold bg-lightBG px-4 py-2 border border-gold rounded-xl hover:text-lightBG hover:bg-gold hover:opacity-90 drop-shadow-lg transition duration-300 ease-in-out">
      <Link href="/services">
        <button>Envoyer</button>
      </Link>
    </div>


            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
