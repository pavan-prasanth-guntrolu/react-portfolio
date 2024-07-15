import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import coding from "../../assets/coding.svg";

function Banner() {
  return (
    <div className="flex h-dvh flex-col justify-between">
      <div className="flex flex-1 flex-col items-start justify-center bg-stone-500 text-center">
        <h1 className="text-4xl font-bold">I'm Pavan Prasanth</h1>
        <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
        <div className="flex w-full space-x-4">
          <FaGithub size={40} />
          <FaInstagram size={40} />
          <FaLinkedin size={40} />
        </div>
        <div>
          <button className="text-lg">More About Pavan Prasanth</button>
        </div>
      </div>

      <div className="flex-1">
        <img src={coding} alt="coding" class="w-full" />
      </div>
    </div>
  );
}

export default Banner;
