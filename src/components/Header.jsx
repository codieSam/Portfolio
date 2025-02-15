import React from "react";
import { BiHome } from "react-icons/bi";

const Header = () => {
  return (
    <div className="button mt-8 items-start">
      <button className="cursor-pointer px-4 rounded-4xl border border-gray-400 py-1 text-[16px] tracking-wide flex gap-3">
        <BiHome className="text-2xl" /> INTRODUCE
      </button>
    </div>
  );
};

export default Header;
