import Button from "./Button";
import { FaCheckCircle } from "react-icons/fa";

export default function PrestationsCard({ title, p1, p2, p3, p4, p5, p6 }) {
  const prestations = [p1, p2, p3, p4, p5, p6];

  return (
    <div className="flex flex-col bg-gradient-to-tr from-lightBG via-pink-50 to-veryLightPink border border-lightPink rounded-3xl h-96 lg:w-80 xl:w-96 justify-between mt-1 drop-shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:drop-shadow-xl">
      <h2 className="text-center font-italiana text-pink font-semibold w-[80%] mx-auto text-2xl md:text-3xl mt-4 border-b-2 border-pink pb-2">
        {title}
      </h2>

      <ul className="space-y-2 mt-4 px-6">
        {prestations.map((prestation, index) =>
          prestation ? (
            <li
              key={index}
              className="flex items-center text-justify gap-3 text-gray-700 text-sm md:text-base"
            >
              <FaCheckCircle className="text-pink-500 w-4 h-4 flex-shrink-0" />
              {prestation}
            </li>
          ) : null
        )}
      </ul>

      <div className="mx-auto mb-6">
        <Button
          btnText="Je réserve"
          link="contact"
          className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors"
        />
      </div>
    </div>
  );
}
