import { servicesData } from "../data/ServicesData";
import { TitleSection } from "./TitleSection";

export function Service() {
  return (
    <>
      <div className="max-w-6xl m-auto px-4 pb-6 mt-32 ">
        <TitleSection title="The services i offer:" />
      </div>
      <ul className=" max-w-6xl m-auto gap-4 mt-8 text-gray-100 grid grid-cols-3  2xl:max-w-6xl">
        {Object.entries(servicesData).map(
          ([key, { icon, title, description }]) => {
            return (
              <li
                key={key}
                className="border-[3px] even:border-purple-700 w-[341px] h-[322px] place-self-center flex justify-center text rounded-2xl hover:bg-purple-700 transition-colors"
              >
                <div className="grid grid-rows-[120px_minmax(5px,_20px)_120px] place-items-center place-content-center ">
                  {icon}
                  <h1 className="text-2xl uppercase font-semibold ">{title}</h1>
                  <p className="text-center text-sm font-medium max-w-[35ch]">
                    {description}
                  </p>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
}
