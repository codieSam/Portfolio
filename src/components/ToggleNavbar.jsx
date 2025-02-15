import React from "react";
import { BiCross, BiUser } from "react-icons/bi";
import { FcAbout, FcServices } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrResume } from "react-icons/gr";
import { namedIcons } from "./data";

const ToggleNavbar = ({ showMenu, setShowMenu }) => {
  return (
    <div>
      <div
        className={`fixed right-0 top-0 bottom-0 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }  item-lists h-screen bg-zinc-950 w-[350px] p-0 m-0`}
      >
        <div className="mx-12">
          <div className="menuBar flex flex-row justify-between px-6 py-10  cursor-pointer">
            <span>Menu</span>
            <BiCross
              onClick={() => setShowMenu(!showMenu)}
              className="hover:text-green-500 text-2xl"
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
