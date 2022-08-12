import { BsFileEarmarkCode } from "react-icons/bs";
import { FaMobileAlt, FaReact } from "react-icons/fa";
import { DiGitBranch, DiLinux } from "react-icons/di";
import { MdDesignServices } from "react-icons/md";

const servicesData = {
  WEB: {
    icon: <BsFileEarmarkCode size={52} />,
    title: "desenvolvimento web",
    description: "Paginas com uma bom design seguindo o padrão Pixel Perfect.",
  },

  REACT: {
    icon: <FaReact size={52} />,
    title: "react",
    description:
      "Desenvolvo aplicações em React escaláveis e com boas práticas de programação.",
  },

  MOBILE: {
    icon: <FaMobileAlt size={52} />,
    title: "responsividade",
    description:
      "Desenvolvo páginas 100% responsivas para todos os dispositivos.",
  },

  GIT: {
    icon: <DiGitBranch size={52} />,
    title: "controle de versão",
    description:
      "Utilizo da ferramenta GIT para controle de versão em meus códigos.",
  },

  LINUX: {
    icon: <DiLinux size={52} />,
    title: "Linux",
    description:
      "Utilizo o ambiente linux para no meu ambiente de desenvolvimento, fazendo grande uso de seu terminal.",
  },
};

export { servicesData };
