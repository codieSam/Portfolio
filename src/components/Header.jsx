import React, { useContext } from "react";
import { BiHome } from "react-icons/bi";
import { useMenuContext } from "../context/MenuContext";
import { BsMenuApp } from "react-icons/bs";

const Header = () => {
  const { showMenu, setShowMenu } = useMenuContext();
  return (
    <div className="button mt-8 items-start flex flex-row justify-between">
      <button className="cursor-pointer px-4 rounded-4xl border border-gray-400 py-1 text-[16px] tracking-wide flex gap-3">
        <BiHome className="text-2xl" /> INTRODUCE
      </button>
      <div className={`${showMenu ? "-z-10" : "z-10"}`}>
        <BsMenuApp
          onClick={() => setShowMenu(!showMenu)}
          className="text-[40px] border border-gray-400 rounded-full p-2 bg-transparent"
        />
      </div>
    </div>
  );
};

export default Header;
