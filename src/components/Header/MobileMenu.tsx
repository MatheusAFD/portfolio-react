import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLinksData } from "../../data/NavLinksData";
import { ItemNav } from "../ItemNav";

export function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    openMenu == true
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [openMenu]);

  return (
    <>
      <button onClick={() => setOpenMenu(!openMenu)} className="md:hidden mt-2">
        {openMenu === true ? (
          <div>
            <IoMdClose size={32} className="text-purple-700" />
          </div>
        ) : (
          <GiHamburgerMenu size={32} className="text-purple-700" />
        )}
      </button>
      {/* w-56 h-[350px] */}
      {openMenu && (
        <ul className="bg-dark-900 z-50 w-full h-screen flex flex-col justify-center items-center rounded-md gap-8 fixed right-0 md:hidden first:text-purple-700   animate-fade-in-down opacity-95 ">
          {Object.entries(NavLinksData).map(([key, { text, linkTo }]) => {
            return <ItemNav key={key} title={text} linkTo={linkTo} />;
          })}
        </ul>
      )}
    </>
  );
}
