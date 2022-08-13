import { useCallback, useEffect, useRef, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { ItemNav } from "../ItemNav";
import { NavLinksData } from "../../data/NavLinksData";

export function Header() {
  const header = useRef<HTMLElement>(null);

  if (header.current?.classList.contains("fixed")) {
    header.current.classList.add("opacity-50");
  }

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        header.current?.classList.add("fixed", "opacity-100");
      } else if (y < window.scrollY) {
        header.current?.classList.remove("fixed", "opacity-100");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <header
      ref={header}
      className="bg-dark-900 w-full md:static top-0 left-0 transition-opacity duration-500 ease-out"
    >
      <div className="p-4 max-w-6xl m-auto text-gray-100 flex justify-between items-center">
        <h1 className=" text-purple-700 font-semibold text-xl">
          Matheus Araújo
        </h1>
        <nav className="text-base font-semibold md:flex z-30 ">
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
