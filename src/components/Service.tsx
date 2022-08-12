import { servicesData } from "../data/ServicesData";
import { TitleSection } from "./TitleSection";

export function Service() {
  return (
    <>
      <div className="max-w-6xl m-auto px-4  mt-16 md:mt-32 ">
        <TitleSection title="Tech skills que possuo:" />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl m-auto gap-4 mt-8 text-gray-100 2xl:max-w-6xl">
        {Object.entries(servicesData).map(
          ([key, { icon, title, description }]) => {
            return (
              <li
                key={key}
                className="border-[3px] even:border-purple-700 w-11/12 max-w-xs md:max-w-[340px] h-[320px] place-self-center flex justify-center text rounded-2xl hover:bg-purple-700 transition-colors"
              >
                <div className="grid grid-rows-[120px_minmax(5px,_20px)_120px] place-items-center place-content-center ">
                  {icon}
                  <h1 className="text-2xl uppercase font-semibold ">{title}</h1>
                  <p className="p-4 text-center text-sm font-medium max-w-[35ch]">
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
