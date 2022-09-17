import { Button } from "../Button";

interface CardProjectsProps {
  title: string;
  description: string;
  imgURL: string;
  imgALT: string;
  techs: string[];
  deployLink?: string;
  repositoryLink?: string;
}

export function CardProjects(props: CardProjectsProps) {
  return (
    <li className="flex flex-col gap-4 rounded-lg place-self-center max-w-[343px]  bg-[#31313F] shadow-md shadow-neutral-900 ">
      <div className="place-self-center pt-4 p-3">
        <img
          src={props.imgURL}
          alt={`Projeto ${props.imgALT}`}
          loading="lazy"
          className="w-[320px] h-52 border-2 object-cover border-purple-700 rounded"
        />
      </div>
      <div className=" px-4 grid grid-rows-[30px_70px_auto_90px] text-gray-100 ">
        <h2
          className="text-purple-700 text-xl md:text-2xl font-semibold uppercase max-w-[30ch] "
          translate="no"
        >
          {props.title}
        </h2>
        <p className="text-sm md:text-base  font-medium mt-3">
          {props.description}
        </p>

        <div className="flex gap-2 flex-wrap">
          {props.techs?.map((item) => {
            return (
              <span className="border-purple-700 border place-self-start p-1 text-sm text-purple-600 rounded-md">
                {item}
              </span>
            );
          })}
        </div>

        <div className="flex gap-4 mt-4  text-sm font-semibold place-self-start">
          {props.deployLink !== "" && (
            <Button
              linkTo={props.deployLink}
              type="primary"
              title="View Live"
              size="small"
            />
          )}

          <Button
            linkTo={props.repositoryLink}
            type="secundary"
            title="GitHub Repo"
            size="small"
          />
        </div>
      </div>
    </li>
  );
}
