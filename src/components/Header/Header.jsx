import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import NavDiv from "./NavDiv";
import Toggle from "./Toggle";
import { NavLink } from "react-router-dom";

function Header({ handleMode }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleNavBar() {
    setIsOpen(!isOpen);
  }
  return (
    <React.Fragment>
      <div className="m-0 flex h-20 flex-wrap items-center justify-between bg-stone-600 px-10">
        <div className="flex justify-around md:flex-[1]">
          <NavLink to="/">
            <h1 className="text-3xl font-bold">GPP.</h1>
          </NavLink>
        </div>
        <div className="hidden md:flex md:flex-[2]">
          <NavDiv handleMode={handleMode} />
        </div>
        <div className="flex items-center justify-center space-x-5">
          <div className="justify-self-center md:hidden">
            <button
              onClick={toggleNavBar}
              className="flex items-center space-x-5"
            >
              {!isOpen ? (
                <FaBars size={25} />
              ) : (
                <h1 className="text-2xl font-bold">X</h1>
              )}
            </button>
          </div>

          <Toggle handleMode={handleMode} />
        </div>
      </div>
      {isOpen && (
        <div className="bg-stone-600 py-4 text-lg text-white">
          <NavDiv />
        </div>
      )}
    </React.Fragment>
  );
}

export default Header;
