import Button from "./Button";

export default function PrestationsCard({ title, p1, p2, p3, p4, p5, p6 }) {
  return (
    <div className="flex flex-col bg-lightBG border border-lightPink rounded-3xl h-96 lg:w-80 xl:w-96 justify-between md:justify-between mt-1 drop-shadow-sm transition-transform duration-200 ease-in-out hover:scale-105 hover:drop-shadow-lg">
      <h2 className="text-center font-italiana text-pink w-60 mx-auto text-2xl md:text-3xl mt-2">
        {title}
      </h2>

      <p className="w-[90%] mx-auto">{p1}</p>
      <p className="w-[90%] mx-auto">{p2}</p>
      <p className="w-[90%] mx-auto">{p3}</p>
      <p className="w-[90%] mx-auto">{p4}</p>
      <p className="w-[90%] mx-auto">{p5}</p>
      <p className="w-[90%] mx-auto">{p6}</p>

      <div className="mx-auto mb-4">
        <Button btnText="Je réserve" link="contact" />
      </div>
    </div>
  );
}
