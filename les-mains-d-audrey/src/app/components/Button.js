import Link from "next/link";

export default function Button({ btnText, link }) {
  return (
    <div className="font-italiana text-lg lg:text-3xl text-lightBG bg-gold mt-1 px-4 py-1 lg:py-1.5 border border-gold rounded-xl hover:text-gold hover:bg-lightBG hover:opacity-90 drop-shadow-lg transition duration-300 ease-in-out">
      <Link href={`/${link}`}>
        <button>{btnText}</button>
      </Link>
    </div>
  );
}
