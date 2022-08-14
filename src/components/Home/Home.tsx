import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Button } from "../Button";
import profile from "../../assets/img/profile.png";

export function Home() {
  return (
    <main
      className="pt-44 md:pt-32 pb-4 shadow-negative
    "
      id="home"
      data-aos="fade-right"
    >
      <div className="flex flex-col-reverse p-4 gap-4 md:flex-row text-gray-100 xl:max-w-6xl xl:m-auto justify-between">
        <div className="lg:w-1/2 lg:max-w-[426px] mt-10">
          <h2 className="font-semibold text-3xl mb-2">Olá, eu sou</h2>
          <span className="text-4xl md:text-5xl font-semibold">
            {" "}
            Matheus Araújo{" "}
          </span>

          <p className="mt-3 font-medium leading-7 text-gray-200 lg:max-w-[34ch]">
            Desenvolvedor Front-end. Eu crio páginas web proporcionando uma
            melhor experiência para o usuário.
          </p>
          <div className="flex gap-4 items-center mt-8 font-semibold text-sm">
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
        <div className="flex items-center m-auto lg:m-2 rounded-extend bg-purple-700 max-w-[330px] md:max-w-[400px] h-52 md:h-[280px] -z-10 ">
          <div className="flex justify-center  w-[400px] relative  ">
            <img
              src={profile}
              alt=""
              className="max-w-[400px] w-full md:max-w-[400px absolute -top-56  md:-top-60"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
