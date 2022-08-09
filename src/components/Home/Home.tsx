import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Button } from "../Button";

export function Home() {
  return (
    <main
      className="pt-32 pb-4 shadow-negative
    "
    >
      <div className="flex justify-around text-gray-100 xl:max-w-6xl xl:m-auto xl:justify-between">
        <div className="w-1/2 max-w-[426px]">
          <h2 className="font-semibold text-3xl mb-2">Hello, i'm</h2>
          <span className="text-5xl font-semibold"> Matheus Araújo </span>

          <p className="mt-3 font-medium leading-7 text-gray-200">
            Freelance UI designer, Fullstack developer, & Data Miner. I create
            seamless web experiences for end-users.
          </p>
          <div className="mt-8 font-semibold flex gap-4 items-center text-sm">
            <Button
              linkTo="https://www.linkedin.com/in/matheusaraujof/"
              type="primary"
              title="Linkedin"
              size="large"
            >
              <AiFillLinkedin size={20} />
            </Button>
            <Button
              linkTo="https://github.com/matheusafd"
              type="secundary"
              title="Github"
              size="large"
            >
              <AiFillGithub size={20} />
            </Button>
          </div>
        </div>
        <div className=" bg-purple-700 w-[400px] h-72 rounded-extend ">
          <div className="absolute"></div>
          <img
            src="https://imgur.com/YDXrWqd.png"
            alt=""
            className="max-w-full w-[400px] relative -top-24 z-20 "
          />
        </div>
      </div>
    </main>
  );
}
