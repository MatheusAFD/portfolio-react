import { Button } from "../Button";

interface CardProjectsProps {
  imgURL: string;
  title: string;
  description: string;
  deployLink?: string;
  repositoryLink?: string;
}

export function CardProjects(props: CardProjectsProps) {
  return (
    <li className="flex flex-col gap-4 rounded-lg place-self-center max-w-[343px] max-h-[450px] bg-[#31313F] shadow-md shadow-neutral-900 ">
      <div className="place-self-center pt-4 p-3">
        <img
          src={props.imgURL}
          alt=""
          className="w-[320px] h-52 border-2 object-cover border-purple-700 rounded"
        />
      </div>
      <div className=" px-4 grid grid-rows-[30px_70px_80px] text-gray-100 ">
        <h3 className="text-purple-700 text-xl md:text-2xl font-semibold uppercase max-w-[30ch] ">
          {props.title}
        </h3>
        <p className="text-sm md:text-base  font-medium mt-3">
          {props.description}
        </p>

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
