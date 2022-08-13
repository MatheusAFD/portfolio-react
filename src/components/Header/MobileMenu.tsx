import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { ItemNav } from "./Header";
export function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);

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
        <div className="bg-dark-900 z-50 w-56 h-[350px] flex flex-col justify-center items-center rounded-md pt-8 gap-4 fixed right-0 md:hidden opacity-[0.95]">
          <ItemNav title="Home" ClassName="text-purple-700" />
          <ItemNav title="About me" />
          <ItemNav title="Projects" />
          <ItemNav title="Contact" />
        </div>
      )}
    </>
  );
}
