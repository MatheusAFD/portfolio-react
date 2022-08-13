import { BsFileEarmarkCode } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";

const cardAboutItems = {
  WEB: {
    id: 2,
    title: "desenvolvimento",
    subtitle: "web",
    icon: <BsFileEarmarkCode size={36} />,
  },
  WEBSCRAPING: {
    id: 4,
    title: "Data fetch",
    subtitle: "Consumo de API'S",
    icon: <AiOutlineApi size={36} />,
  },

  RESPONSIVE: {
    id: 3,
    title: "páginas",
    subtitle: "responsivas",
    icon: <FaMobileAlt size={36} />,
  },

  UX: {
    id: 1,
    title: "ui & ux",
    subtitle: "design",
    icon: <MdOutlineDesignServices size={36} />,
  },
};

export { cardAboutItems };
