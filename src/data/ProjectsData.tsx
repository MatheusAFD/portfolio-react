import logintw from "../assets/img/login-tw.png";
import ignitelab from "../assets/img/ignitelab.png";
import docespatissier from "../assets/img/docespatissier.jpg";
import address from "../assets/img/address.png";
import nlwesports from "../assets/img/nlwesports.jpg";

const ProjectsData = {
  STATIONONE: {
    imgURL: docespatissier,
    title: "doces - patissier",
    description: "Ecommerce de comida e cursos.",
    techs: [
      "React",
      "TypeScript",
      "GraphQL",
      "Lottie Player",
      "Date-fns",
      "Tailwind",
    ],
    deployLink: "https://docespatissier.vercel.app/",
    repositoryLink: "https://github.com/MatheusAFD/stationOne-app",
  },

  NLWESPORTS: {
    imgURL: nlwesports,
    title: "NLW eSports",
    description: "Aplicação para conectar pessoas no mundo dos jogos.",
    techs: [
      "React",
      "React Native",
      "TypeScript",
      "Node",
      "Axios",
      "Prisma",
      "SQLite",
      "Tailwind",
      "Radix UI",
    ],
    deployLink: "",
    repositoryLink: "https://github.com/MatheusAFD/nlw-esports/",
  },

  IGNITELAB: {
    imgURL: ignitelab,
    title: "ignite lab",
    description: "Plataforma de evento online",
    techs: [
      "React",
      "TypeScript",
      "GraphQL",
      "Apollo",
      "Headless UI",
      "Date-fns",
      "Vime",
      "Tailwind",
    ],
    deployLink: "https://ignitelab-matheus.vercel.app/",
    repositoryLink: "https://github.com/MatheusAFD/ignite-lab",
  },

  ADDRESS: {
    imgURL: address,
    title: "autocomplete address",
    description: "Auto completa endereço após digitar o cep.",
    techs: ["React", "Axios", "Fetch REST API", "React Input Mask"],
    deployLink: "https://autocomplete-address.vercel.app/",
    repositoryLink: "https://github.com/MatheusAFD/autocomplete-address",
  },

  COUNTDOWN: {
    imgURL:
      "https://www.handtalk.me/br/wp-content/uploads/sites/8/2018/11/capa-blog-2.png",
    title: "Countdown",
    description: "Countdown de uma data futura.",
    techs: ["JavaScript", "ES6+", "OOP"],
    deployLink: "",
    repositoryLink: "https://github.com/MatheusAFD/countdown-js",
  },

  TAILWINDLOGIN: {
    imgURL: logintw,
    title: "Tailwind | Login page",
    description: "Página de login para iniciar os estudos em TailwindCSS.",
    techs: ["React", "Tailwind"],
    deployLink: "https://tailwind-introduction.vercel.app/",
    repositoryLink: "https://github.com/MatheusAFD/tailwind-login-page",
  },
};

export { ProjectsData };
