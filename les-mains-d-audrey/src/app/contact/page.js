"use client";

import Image from "next/image";
import Link from "next/link";
import Cloud from "../components/Cloud";
import { useState } from "react";

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Le noms est requis";
    if (!formData.email) newErrors.email = "L'adresse email est requise";
    if (!formData.subject) newErrors.subject = "Le sujet est requis";
    if (!formData.message) newErrors.message = "Le message est requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!validateForm()) {
        return;
      }

      console.log("Données du form: ", formData);

      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Votre message a été envoyé avec succès.");
        e.target.reset();
      } else {
        alert("Votre message n'a pas pu être envoyé.");
      }
    } catch (error) {
      alert("Erreur lors de l'envoi de votre message");
    }
  };

  return (
    <div className="mb-8 md:mb-16">
      <h1 className="font-brittany text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 lg:mb-12">
        Contactez-moi
      </h1>
      <Cloud />
      <div className="flex flex-col-reverse items-center mx-auto  font-jaldi relative z-10 md:text-xl lg:flex-row justify-evenly lg:mx-40">
        <div className="md:mt-8 mx-4">
          <Image
            src="/images/logo.png"
            alt="Logo de les mains d'Audrey"
            width={400}
            height={400}
            className=" w-[60%] md:w-[60%] mx-auto drop-shadow-lg hover:animate-wiggle-more"
          />
          <p>
            <strong>Les mains d&apos;Audrey</strong>
          </p>
          <p>Facilitatrice de liens parents-bébés</p>
          <p>
            <a
              href="mailto:lesmainsdaudrey44@gmail.com"
              className="text-pink hover:underline hover:text-lightPink"
            >
              lesmainsdaudrey44@gmail.com
            </a>
          </p>
          <p>Sainte-Anne-sur-Brivet (et alentours)</p>
          <p>
            SMS :{" "}
            <a
              href="tel:+33675340867"
              className="text-pink hover:text-lightPink hover:underline"
            >
              {" "}
              06 75 34 08 67
            </a>
          </p>
          <p>Retrouvez-moi sur les réseaux sociaux:</p>
          <div className="flex flex-row w-72 mt-2 justify-center">
            <Link
              href="https://www.facebook.com/profile.php?id=61558150675264"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/icons/facebook.png"
                alt="Icone Facebook"
                width={35}
                height={35}
                className="hover:opacity-80"
              />
            </Link>
            <Link
              href="https://www.instagram.com/lesmainsdaudrey44/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/icons/instagram.png"
                alt="Icone Facebook"
                width={35}
                height={35}
                className="hover:opacity-80"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/audrey-florenceau-les-mains-d-audrey-a79916111/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
          <form
            onSubmit={handleSubmit}
            action="#"
            method="POST"
            className="font-jaldi"
          >
            {/* Champ Nom */}
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Nom"
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
                className=" w-80 md:w-96 py-1.5 px-2 border border-lightPink focus:outline-none placeholder-pink focus:ring-2 focus:ring-pink text-pink placeholder-pink-500 font-normal"
              />
            </div>

            {/* Champ Numéro de téléphone */}
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={handleChange}
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
                onChange={handleChange}
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
                En soumettant ce formulaire, jaccepte que mes données soient
                collectées et traitées dans le cadre de ma demande. Ces
                informations ne seront utilisées que pour répondre à votre
                message et respecteront les règles de confidentialité (voir page
                des Mentions Légales).
              </label>
            </div>

            {/* Sender button */}
            <div className="flex justify-center">
              <div className="font-italiana text-lg md:text-3xl text-lightBG bg-gold px-4 py-2 border border-gold rounded-xl hover:text-gold hover:bg-lightBG hover:opacity-90 drop-shadow-lg transition duration-300 ease-in-out">
                <button type="submit" aria-label="Envoyez votre message">
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
