import React, { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { namedIcons } from "./data";
import { MenuContext } from "../context/MenuContext";

const ToggleNavbar = () => {
  const { showMenu, setShowMenu } = useContext(MenuContext);

  return (
    <div className="">
      <div
        className={`fixed inset-0 ${showMenu ? "bg-gray-500/40" : ""}`}
      ></div>

      <div
        className={`fixed right-0 top-0 bottom-0 ${
          showMenu ? "translate-x-0 " : "translate-x-full"
        }  item-lists h-screen bg-zinc-950 w-[350px] p-0 m-0 duration-400 ease-in-out`}
      >
        <div className="mx-12">
          <div className="menuBar flex flex-row justify-between px-6 py-10  cursor-pointer">
            <span>Menu</span>
            <GrClose
              onClick={() => setShowMenu(!showMenu)}
              className="hover:text-green-500 text-3xl border border-gray-400 rounded-full p-2 "
            />
          </div>

          <div className="ItemLists">
            {namedIcons.map((icon) => {
              return (
                <div
                  key={icon.id}
                  className="menuBar flex flex-row space-x-6 px-6 py-6 hover:text-green-500"
                >
                  <icon.name className="text-2xl" /> <span>{icon.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleNavbar;
