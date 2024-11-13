import Link from "next/link";

export default function Button({ btnText }) {
  return (
    <div className="font-italiana md:text-3xl text-gold bg-lightBG px-4 py-2 border border-gold rounded-xl hover:text-lightBG hover:bg-gold hover:opacity-90 drop-shadow-lg transition duration-300 ease-in-out">
      <Link href="/services">
        <button>{btnText}</button>
      </Link>
    </div>
  );
}
