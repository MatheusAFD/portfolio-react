import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Home() {
  return (
    <main
      className="pt-32 pb-4 shadow-negative
    "
    >
      <div className="flex justify-around text-gray-100 ">
        <div className="w-1/2 max-w-[426px]">
          <h2 className="font-semibold text-3xl mb-2">Hello, i'm</h2>
          <span className="text-5xl font-semibold"> Matheus Araújo </span>

          <p className="mt-3 font-medium leading-7 text-gray-200">
            Freelance UI designer, Fullstack developer, & Data Miner. I create
            seamless web experiences for end-users.
          </p>
          <div className="mt-8 font-semibold flex gap-8 items-center text-sm">
            <a
              href="https://www.linkedin.com/in/matheusaraujof/"
              target="__blank"
              className="px-6 py-[10px] bg-purple-700 rounded-lg flex gap-2 items-center hover:bg-purple-800 transition-colors"
            >
              Linkedin
              <AiFillLinkedin size={20} />
            </a>
            <a
              href="https://github.com/matheusafd"
              target="__blank"
              className="px-8 py-[10px] border-[2px] border-purple-700 rounded-lg flex gap-2 items-center bg-dark-900 hover:bg-purple-700 hover:border-gray-200 transition-colors"
            >
              Github
              <AiFillGithub size={20} />
            </a>
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
