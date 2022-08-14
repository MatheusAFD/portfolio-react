import { CardProjects } from "../Cards/CardProjects";
import { ProjectsData } from "../../data/ProjectsData";
import { TitleSection } from "../TitleSection";

export function Projects() {
  return (
    <section data-aos="fade-right">
      <div
        className="max-w-6xl px-4 m-auto  pb-6 mt-16 md:mt-32 "
        id="projetos"
      >
        <TitleSection title="Projetos destaque:" />
        <p className="text-lg font-medium text-white max-w-[90ch] leading-8 mt-4 mb-2">
          Trabalhei em projetos no caminho para ser desenvolvedor web, aqui
          estão alguns projetos desenvolvidos.
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto max-w-6xl  gap-4 gap-y-10">
        {Object.entries(ProjectsData).map(([key, item]) => {
          return (
            <CardProjects
              key={key}
              title={item.title}
              imgURL={item.imgURL}
              imgALT={item.title}
              description={item.description}
              deployLink={item.deployLink}
              repositoryLink={item.repositoryLink}
            />
          );
        })}
      </ul>
    </section>
  );
}
