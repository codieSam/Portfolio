import React, { useState } from "react";
import { BiCross, BiHome, BiUser } from "react-icons/bi";
import { BsMenuApp } from "react-icons/bs";
import { FcAbout, FcContacts, FcServiceMark, FcServices } from "react-icons/fc";
import { GiHelp, GiSkills } from "react-icons/gi";
import { GrResume } from "react-icons/gr";

const RightMenu = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
    // console.log(menu)
  };

  return (
    <>
      <div className={`${menu ? "hidden" : "flex flex-col space-y-16"} `}>
        <div className="menuBtn">
          <BsMenuApp onClick={() => handleMenu()} className="text-2xl" />
        </div>
        <div className="menuList border h-auto rounded-4xl ">
          <div className="mx-2 my-2 flex flex-col space-y-4">
            <BiHome className="text-2xl text-green-500" />
            <FcAbout className="text-2xl hover:text-green-500" />
            <GiSkills className="text-2xl hover:text-green-500" />
            <BiUser className="text-2xl hover:text-green-500" />
            <FcServices className="text-2xl hover:text-green-500" />
            <FcServiceMark className="text-2xl hover:text-green-500" />
            <GiHelp className="text-2xl hover:text-green-500" />
            <FcContacts className="text-2xl hover:text-green-500" />
          </div>
        </div>
      </div>

      {/* Menu items */}

      <div
        className={`fixed right-0 duration-200 ease-in translate-x-full ${
          menu ? " translate-x-0 " : ""
        }  item-lists h-screen bg-zinc-950 w-[350px] p-0 m-0`}
      >
        <div className="mx-12">
          <div className="menuBar flex flex-row justify-between px-6 py-10  cursor-pointer">
            <span>Menu</span>
            <BiCross
              onClick={() => handleMenu()}
              className="hover:text-green-500 text-2xl"
            />
          </div>

          <div className="ItemLists">
            <div className="menuBar flex flex-row space-x-6 px-6 py-6 hover:text-green-500">
              <BiUser className="text-2xl" /> <span>Home</span>
            </div>
            <div className="menuBar flex flex-row space-x-6 px-6 py-6 hover:text-green-500">
              <FcAbout className="text-2xl" /> <span>About</span>
            </div>
            <div className="menuBar flex flex-row space-x-6 px-6 py-6 hover:text-green-500">
              <GrResume className="text-2xl" /> <span>Resume</span>
            </div>
            <div className="menuBar flex flex-row space-x-6 px-6 py-6 hover:text-green-500">
              <FcServices className="text-2xl" /> <span>Services</span>
            </div>
            <div className="menuBar flex flex-row space-x-6 px-6 py-6 hover:text-green-500">
              <GiSkills className="text-2xl" /> <span>Skills</span>
            </div>
            <div className="menuBar flex flex-row space-x-6 px-6 py-6 hover:text-green-500">
              <BiUser className="text-2xl" /> <span>Portfolio</span>
            </div>
            <div className="menuBar flex flex-row space-x-6 px-6 py-6 hover:text-green-500">
              <BiUser className="text-2xl " /> <span>Testinomials</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightMenu;
