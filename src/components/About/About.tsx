import { CardAbout } from "../Cards/CardAbout";
import { cardAboutItems } from "../../util/AboutData";
import { TitleSection } from "../TitleSection";

export function About() {
  return (
    <section className="mt-24 bg-dark-800 ">
      <div className=" text-gray-100 max-w-[1100px] m-auto flex flex-col  2xl:m-auto">
        <TitleSection title="About me:" />
        <p className="mt-2 leading-8 font-semibold">
          Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer,
          UI designer, and Mobile developer. I jhave honed my skills in Web
          Development and advance i have core understanding of advance UI design
          principles. Here are the major skiills i have.{" "}
        </p>
        <div className="mt-8 flex items-center gap-x-5">
          <span className="text-8xl text-purple-700 font-semibold">5+</span>{" "}
          <p className="leading-9 text-xl font-medium">
            Years of experience. Specialised in building apps, while ensuring a
            seamless web experience for end users.
          </p>
        </div>
        <div className="flex gap-4 justify-between ">
          {Object.entries(cardAboutItems).map(
            ([key, { id, title, subtitle, icon }]) => {
              return (
                <CardAbout
                  key={id}
                  title={title}
                  subtitle={subtitle}
                  icon={icon}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
