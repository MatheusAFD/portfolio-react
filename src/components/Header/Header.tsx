import { useRef } from "react";
import { MobileMenu } from "./MobileMenu";
import { ItemNav } from "../ItemNav";
import { NavLinksData } from "../../data/NavLinksData";

export function Header() {
  const header = useRef<HTMLElement>(null);

  return (
    <header
      ref={header}
      className="bg-dark-900 w-full fixed md:static top-0 left-0 transition-opacity duration-500 ease-out overflow-y-hidden shadow-sm shadow-purple-800 z-50"
    >
      <div className="p-4 max-w-6xl m-auto text-gray-100 flex justify-between items-center">
        <h1 className=" text-purple-700 font-semibold text-xl">
          <a href="#home">Matheus Araújo</a>
        </h1>
        <nav
          className="text-base font-semibold md:flex z-30"
          aria-label="navegação Desktop"
        >
          <ul className="hidden md:flex gap-4 ">
            {Object.entries(NavLinksData).map(([key, { text, linkTo }]) => {
              return <ItemNav key={key} title={text} linkTo={linkTo} />;
            })}
          </ul>
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}
