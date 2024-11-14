import Button from "./Button";

export default function PrestationsCard({ title, text }) {
  return (
    <div className="flex flex-col bg-lightBG border border-lightPink rounded-xl w-96 h-96 justify-between mt-4 drop-shadow-sm">
      <h3 className="text-center font-italiana text-pink md:text-2xl mt-2">
        {title}
      </h3>

      <p className="w-[90%] mx-auto">{text}</p>

      <div className="mx-auto mb-4">
        <Button btnText="Je réserve" />
      </div>
    </div>
  );
}
