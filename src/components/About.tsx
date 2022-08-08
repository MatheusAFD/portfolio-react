import { CardAbout } from "./CardAbout";
import { cardAboutItems } from "../util/AboutData";

export function About() {
  return (
    <section className="mt-24 bg-dark-800 h-[200vh]">
      <div className="m-32  text-gray-100 max-w-[1032px]">
        <h3 className="text-3xl font-semibold text-purple-700">About me:</h3>
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

        <div className="flex gap-4 justify-center">
          {Object.entries(cardAboutItems).map(([key, item]) => {
            return (
              <CardAbout
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
