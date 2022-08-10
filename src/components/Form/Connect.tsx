import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { TitleSection } from "../TitleSection";

export function Connect() {
  return (
    <div>
      <TitleSection title="Connect with me:" />
      <p className="text-lg font-medium text-white mt-4 mb-6">
        Satisfied with me? Please contact me
      </p>

      <div className="text-purple-700 flex gap-5">
        <a href="">
          <AiFillGithub size={32} />
        </a>
        <a href="">
          <AiFillLinkedin size={32} />
        </a>
        <a href="">
          <FaDiscord size={32} />
        </a>
      </div>
    </div>
  );
}
