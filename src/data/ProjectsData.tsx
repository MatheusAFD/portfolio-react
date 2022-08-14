import logintw from "../assets/img/login-tw.png";
import ignitelab from "../assets/img/ignitelab.png";
import patissier from "../assets/img/patissier.png";
import address from "../assets/img/address.png";

const ProjectsData = {
  IGNITELAB: {
    imgURL: ignitelab,
    title: "ignite lab",
    description:
      "Uma plataforma de eventos cujo videos são liberados conforme a data",
    deployLink: "https://ignitelab-matheus.vercel.app/",
    repositoryLink: "https://github.com/MatheusAFD/ignite-lab",
  },

  STATIONONE: {
    imgURL: patissier,
    title: "doces - patissier",
    description: "Ecommerce de comida e cursos.",
    deployLink: "https://docespatissier.vercel.app/",
    repositoryLink: "https://github.com/MatheusAFD/stationOne-app",
  },

  ADDRESS: {
    imgURL: address,
    title: "autocomplete address",
    description: "Auto completa seu endereço após digitar o cep.",
    deployLink: "https://autocomplete-address.vercel.app/",
    repositoryLink: "https://github.com/MatheusAFD/autocomplete-address",
  },

  COUNTDOWN: {
    imgURL:
      "https://www.handtalk.me/br/wp-content/uploads/sites/8/2018/11/capa-blog-2.png",
    title: "Countdown",
    description: "Countdown de uma data futura ",
    deployLink: "",
    repositoryLink: "https://github.com/MatheusAFD/countdown-js",
  },

  TAILWINDLOGIN: {
    imgURL: logintw,
    title: "Tailwind | Login page",
    description: "Página de login para iniciar os estudos em TailwindCSS",
    deployLink: "https://tailwind-introduction.vercel.app/",
    repositoryLink: "https://github.com/MatheusAFD/tailwind-login-page",
  },
};

export { ProjectsData };
