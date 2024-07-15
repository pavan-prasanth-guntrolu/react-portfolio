import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";

const hover = "hover:text-white hover:opacity-70";

function NavDiv({ handleMode }) {
  return (
    <nav className="text-md flex w-full flex-col items-center justify-between space-y-5 font-semibold uppercase tracking-wider md:flex-row md:items-center md:justify-around md:space-y-0">
      <NavLink to="/home" className={hover}>
        Home
      </NavLink>
      <NavLink to="/about" className={hover}>
        About
      </NavLink>
      <NavLink to="/projects" className={hover}>
        Projects
      </NavLink>
    </nav>
  );
}

export default NavDiv;
