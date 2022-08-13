import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLinksData } from "../../data/NavLinksData";
import { ItemNav } from "../ItemNav";

export function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const [y, setY] = useState(window.scrollY);

  return (
    <>
      <button onClick={() => setOpenMenu(!openMenu)} className="md:hidden">
        {openMenu === true ? (
          <IoMdClose size={32} />
        ) : (
          <GiHamburgerMenu size={32} />
        )}
      </button>

      {openMenu && (
        <ul className="bg-dark-900 z-50 w-56 h-[350px] flex flex-col justify-center items-center rounded-md pt-8 gap-4 fixed right-0 md:hidden opacity-[0.95] first:text-purple-700">
          {Object.entries(NavLinksData).map(([key, { text, linkTo }]) => {
            return <ItemNav key={key} title={text} linkTo={linkTo} />;
          })}
        </ul>
      )}
    </>
  );
}
