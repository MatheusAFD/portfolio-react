import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export function ItemNav(props: {
  linkTo?: string;
  title: string;
  ClassName?: string;
}) {
  return (
    <a href={props.linkTo}>
      {" "}
      <li className={`hover:text-purple-700 ${props.ClassName}`}>
        {props.title}
      </li>
    </a>
  );
}

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="bg-dark-900 w-full fixed md:static top-0 left-0 ">
      <nav className="p-4 max-w-6xl m-auto text-gray-100 flex justify-between items-center">
        <h1 className=" text-purple-700 font-semibold text-xl">
          Matheus Araújo
        </h1>
        <ul className="text-base font-semibold md:flex z-30 ">
          <li className="hidden md:flex gap-4">
            <ItemNav title="Home" ClassName="text-purple-700" />
            <ItemNav title="About me" />
            <ItemNav title="Projects" />
            <ItemNav title="Contact" />
          </li>
          <MobileMenu />
        </ul>
      </nav>
    </header>
  );
}
