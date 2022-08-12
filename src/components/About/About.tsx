import { CardAbout } from "../Cards/CardAbout";
import { cardAboutItems } from "../../data/AboutData";
import { TitleSection } from "../TitleSection";

export function About() {
  return (
    <section className="p-4 mt-24 bg-dark-800 ">
      <div className=" text-gray-100 max-w-[1100px] m-auto flex flex-col  2xl:m-auto">
        <TitleSection title="About me:" />
        <p className="mt-2 leading-8 font-semibold">
          Formado técnico em Informática e atualmente estudante de Ciência da
          computação. Focado no desenvolvimento web front end, procuro
          desenvolver páginas responsivas e acessíveis com as melhores práticas
          e tecnologias para resolver um problema proposto. Aqui estão algumas
          habilidades que possuo.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row md:items-center gap-x-5">
          <span className="text-8xl text-purple-700 font-semibold">1+</span>{" "}
          <p className="leading-9 text-xl font-medium">
            Anos de experiência, especializado em páginas web responsivas e
            consumindo uma API para os dados.
          </p>
        </div>
        <div className="flex overflow-x-scroll lg:overflow-hidden gap-3 justify-between ">
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
