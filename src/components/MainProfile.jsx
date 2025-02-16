import React from "react";
import Header from "./Header";

const MainProfile = ({ showMenu, setShowMenu }) => {
  return (
    <div className="wrapper">
      {/* Header */}
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />

      <div className="mx-auto">
        <div className="text text-[75px] my-12">
          Say Hi from <span className="text-green-400">Samrat</span>,
          <p> Web Designer and Developer</p>
        </div>
        <div className="smallText text-gray-500">
          <p className="">
            I design and code beautifully simple things and i love what i do.
          </p>
          <p> Just simple like that!</p>
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
