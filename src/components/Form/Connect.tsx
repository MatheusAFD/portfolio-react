import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { TitleSection } from "../TitleSection";

export function Connect() {
  return (
    <div>
      <TitleSection title="Gostou do que viu?" />
      <p className="text-lg font-medium text-white mt-2 mb-6 ">
        Entre em contato:
      </p>

      <div className="text-purple-700 flex gap-5">
        <a href="https://github.com/matheusafd" target="__blank">
          <AiFillGithub size={32} />
        </a>
        <a href="https://www.linkedin.com/in/matheusaraujof/" target="__blank">
          <AiFillLinkedin size={32} />
        </a>
        <a href="https://www.linkedin.com/in/matheusaraujof/" target="__blank">
          <FaDiscord size={32} />
        </a>
      </div>
    </div>
  );
}
