import { BsFileEarmarkCode } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";

const cardAboutItems = {
  UX: {
    id: 1,
    title: "ui & ux",
    subtitle: "design",
    icon: <MdOutlineDesignServices size={36} />,
  },
  WEB: {
    id: 2,
    title: "web",
    subtitle: "development",
    icon: <BsFileEarmarkCode size={36} />,
  },
  MOBILE: {
    id: 3,
    title: "mobile",
    subtitle: "development",
    icon: <FaMobileAlt size={36} />,
  },
  WEBSCRAPING: {
    id: 4,
    title: "webscraping",
    subtitle: "with python",
    icon: <AiOutlineApi size={36} />,
  },
};

export { cardAboutItems };
