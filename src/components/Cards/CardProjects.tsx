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
    <li className="w-[343px] h-[417px] bg-[#31313F] flex flex-col gap-4 rounded-lg place-self-center">
      <div className="place-self-center pt-4">
        <img
          src={props.imgURL}
          alt=""
          className="w-[320px] h-52 border-2 object-cover border-purple-700 rounded"
        />
      </div>
      <div className="flex flex-col px-4 ">
        <h3 className="text-purple-700 text-2xl font-semibold uppercase ">
          {props.title}
        </h3>
        <p className="text-base text-gray-100 font-medium mt-3">
          {props.description}
        </p>

        <div className="flex gap-4 mt-4 text-gray-100 text-sm font-semibold">
          <Button linkTo="" type="primary" title="View Live" size="small" />
          <Button linkTo="" type="secundary" title="GitHub Repo" size="small" />
        </div>
      </div>
    </li>
  );
}
