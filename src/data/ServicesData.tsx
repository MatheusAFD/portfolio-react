import { BsFileEarmarkCode } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaMobileAlt, FaReact } from "react-icons/fa";
import { DiGitBranch, DiLinux } from "react-icons/di";

const servicesData = {
  UI: {
    icon: <MdOutlineDesignServices size={52} />,
    title: "ui & ux",
    description: "I design beautiful web iterfaces with Figma and Adove XD",
  },
  WEB: {
    icon: <BsFileEarmarkCode size={52} />,
    title: "web development",
    description:
      "I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS",
  },
  MOBILE: {
    icon: <FaMobileAlt size={52} />,
    title: "mobile development",
    description:
      "I am an expert mobile developer. I have experience using Flutter and React Native.",
  },
  GIT: {
    icon: <DiGitBranch size={52} />,
    title: "version control",
    description:
      "I can use version control systems well, and Git & Mecurial are my go-to tool.",
  },
  REACT: {
    icon: <FaReact size={52} />,
    title: "react",
    description:
      "I have core understanding of NPM. I can also develop general purpose applications with NodeJS",
  },
  LINUX: {
    icon: <DiLinux size={52} />,
    title: "Linux",
    description:
      "I can collect content and data from the internet then manipulate and analyze as needed.",
  },
};

export { servicesData };
