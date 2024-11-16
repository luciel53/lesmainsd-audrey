import Image from "next/image";

export default function Cloud() {
  return (
    <div className=" flex flex-row absolute z-0 justify-center inset-12 ">
      <Image
        src="/images/nuage.png"
        alt="background pour les mains d'Audrey - Bébé Signe"
        width={2000}
        height={600}
        className="w-[800px] h-[400px] opacity-70"
      />
    </div>
  );
};
