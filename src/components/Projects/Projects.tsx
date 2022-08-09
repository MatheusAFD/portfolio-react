import { CardProjects } from "../Cards/CardProjects";
import { ProjectsList } from "../../util/ProjectsList";
import { TitleSection } from "../TitleSection";

export function Projects() {
  return (
    <>
      <div className="max-w-6xl px-4 m-auto  pb-6 mt-32 ">
        <TitleSection title="Featured projects:" />
        <p className="text-lg font-medium text-white max-w-[90ch] leading-8 mt-4 mb-2">
          I have worked on many projects over the course of being a Web
          Developer, here are a few of my live, real-world projects
        </p>
      </div>
      <ul className="grid grid-cols-3 justify-around max-w-6xl m-auto gap-4 gap-y-10">
        {Object.entries(ProjectsList).map(
          ([
            key,
            { deployLink, description, imgURL, repositoryLink, title },
          ]) => {
            return (
              <CardProjects
                title={title}
                imgURL={imgURL}
                description={description}
              />
            );
          }
        )}
      </ul>
    </>
  );
}
