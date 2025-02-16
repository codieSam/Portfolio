import React, { useContext, useState } from "react";
import { BsMenuApp } from "react-icons/bs";
import { shortIcons } from "./data";
import ToggleNavbar from "./ToggleNavbar";
import { FaCross } from "react-icons/fa";
import { MenuContext, useMenuContext } from "../context/MenuContext";

const RightMenu = () => {
  // const [showMenu, setShowMenu] = useState(false);
  //   console.log(showMenu);
  // const { showMenu, setShowMenu } = useContext(MenuContext);
  const { showMenu, setShowMenu } = useMenuContext();
  return (
    <>
      <div className={`fixed right-0 flex flex-col space-y-16 mt-24 `}>
        <div className="menuList border h-auto rounded-4xl ">
          <div className="mx-2 my-2 flex flex-col space-y-8">
            {shortIcons.map((icon) => {
              return (
                <ul key={icon.id}>
                  <li>
                    <icon.name className="text-gray-400 h-8 w-8" />
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>

      {/* Menu items */}
      <ToggleNavbar />
    </>
  );
};

export default RightMenu;
