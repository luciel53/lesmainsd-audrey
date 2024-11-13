import Image from "next/image";

export default function Prestations() {
  return (
    <div>
      <h1 className="font-brittany text-4xl md:text-6xl mb-6 md:mb-8">
        À propos
      </h1>
      <div className=" mx-4 md:mx-20 lg:mx-80">
        <h2 className=" font-italiana text-xl md:text-3xl lg:text-4xl md:text-left  mb-3 lg:mb-6">
          Qui suis-je?
        </h2>
        <p className="text-justify  font-jaldi md:text-xl">
          Je m'appelle Audrey Florenceau, passionnée par la communication et le
          lien unique qui se crée entre les parents et leurs enfants. Sourde de
          naissance, j'ai découvert dès mon plus jeune âge la richesse des
          langues non verbales et l'importance de l'expression des émotions. Ce
          parcours m'a menée, au fil des années, à me spécialiser dans la
          communication par les signes avec les bébés, une merveilleuse
          passerelle qui permet aux tout-petits de communiquer bien avant de
          savoir parler. Après plusieurs expériences professionnelles
          enrichissantes et étant moi-même devenue maman, j'ai décidé de me
          consacrer entièrement à cette vocation en créant Les Mains d'Audrey.
          Mon objectif est simple : offrir aux parents les outils pour renforcer
          le lien avec leur enfant, grâce à des ateliers adaptés et
          bienveillants, basés sur les signes. Formée par l’Académie Éveil et
          Signes, je me suis aussi nourrie de nombreuses rencontres et
          formations pour offrir un accompagnement sur mesure, qui prend en
          compte les besoins et le rythme de chaque famille. Chaque jour, je
          suis émerveillée de voir à quel point les bébés sont de véritables
          éponges à émotions et à connaissances. Je suis honorée de pouvoir
          guider les familles dans cette belle aventure de communication, où
          chaque signe devient un mot et chaque geste une preuve de complicité.
        </p>
      </div>
      <div className="mt-6 mb-6 mx-4 md:mx-20 lg:mx-80">
      <h2 className=" font-italiana text-xl md:text-3xl lg:text-4xl md:text-left  mb-3 lg:mb-6">
          On parle de moi
        </h2>
        <div>
            <Image src="/images/article-presse.jpg" alt="Article de presse sur les mains d'Audrey" width={800} height={1200} className="mx-auto" />
        </div>
      </div>
    </div>
  );
}
