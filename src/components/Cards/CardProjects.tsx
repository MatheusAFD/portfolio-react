import { Button } from "../Button";
import { Image } from "../Image/Image";

interface CardProjectsProps {
  title: string;
  description: string;
  imgURL: string;
  imgALT: string;
  techs: string[];
  deployLink?: string;
  repositoryLink?: string;
  className: string;
}

export function CardProjects(props: CardProjectsProps) {
  return (
    <li
      className={`flex flex-col gap-4 rounded-lg h-[490px] place-self-center bg-[#31313F] shadow-md shadow-neutral-900 ${props.className} z-10`}
    >
      <div className="place-self-center pt-4 p-3">
        <Image
          src={props.imgURL}
          alt={`Projeto ${props.imgALT}`}
          width={320}
          className="w-[320px] h-52 border-2 object-cover border-purple-700 rounded"
          classNameSkeleton="w-[320px] h-52 border-2 object-cover border-purple-700 rounded"
        />
      </div>
      <div className=" px-6 grid grid-rows-[30px_70px_70px_auto] text-gray-100 sm:m-auto lg:m-0 ">
        <h2
          className="text-purple-700 text-xl md:text-2xl font-semibold uppercase max-w-[30ch] break-normal whitespace-nowrap text-ellipsis overflow-hidden"
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
              <span className="animate-pulse border-purple-700 border place-self-start p-1 text-xs text-purple-600 rounded-md">
                {item}
              </span>
            );
          })}
        </div>

        <div className="flex gap-4 mt-4 text-sm font-semibold place-self-start">
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
