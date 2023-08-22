"use client";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { Dancing_Script } from "next/font/google";

const dance = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Nav = () => {
  const [navState, setNavState] = useState(false);

  return (
    <nav class=" z-30   absolute  w-screen   " id="nav">
      <div class="max-w-screen flex flex-wrap items-center bg-gradient-to-b from-[#000000f9] via-[#00000087] to-[#00000000]  justify-between mx-auto p-4">
        <a href="/" class="flex items-center">
          <img
            src="/assets/logo.png"
            class="contrast-100 h-8 md:h-9 lg:h-10 mr-3 opacity-100"
            alt="Flowbite Logo"
          />
          <span
            className={`${dance.className} font-bold self-center text-lg  whitespace-nowrap dark:text-white`}
          >
            URBAN EATS
          </span>
        </a>
        <div className=" hidden lg:text-white lg:font-light lg:flex lg:justify-around lg:w-1/6">
          <a
            className={`${dance.className} text-xl hover:scale-120 hover:translate-y-[-5px] transition-all hover:cursor-pointer`}
            href="#about"
          >
            About
          </a>
          <a
            className={`${dance.className} text-xl hover:scale-120 hover:translate-y-[-5px] transition-all hover:cursor-pointer`}
            href="#location"
          >
            Location
          </a>
          <a
            className={`${dance.className} text-xl hover:scale-120 hover:translate-y-[-5px] transition-all hover:cursor-pointer`}
            href="#review"
          >
            Reviews
          </a>
        </div>
        <div className={`${dance.className} hidden lg:block text-white mr-10`}>
          ✆ 980-090-000-000
        </div>
        <a
          className="lg:hidden z-50"
          onClick={() => {
            setNavState(!navState);
            console.log(navState);
          }}
        >
          <MenuIcon className="hover:cursor-pointer text-white  lg:hidden mr-5 " />
        </a>

        <div
          className={`${
            navState ? "translate-x-0" : "translate-x-[1000px] "
          } bg-[#000000f9] h-screen w-[50%] fixed right-0 top-0 bottom-0
           text-white flex flex-col
           transition duration-300 ease-in-out
           gap-7 px-8 pt-20`}
        >
          <a
            href="#about"
            onClick={() => {
              setNavState(false);
            }}
            className={`${dance.className} hover:scale-120 hover:translate-x-6 transition-all hover:cursor-pointer`}
          >
            About Us
          </a>
          <hr className="border-gray-800" />
          <a
            onClick={() => {
              setNavState(false);
            }}
            href="#special"
            className={`${dance.className} hover:scale-120 hover:translate-x-6 transition-all hover:cursor-pointer`}
          >
            Specials
          </a>
          <hr className="border-gray-800" />
          <a
            onClick={() => {
              setNavState(false);
            }}
            href="#location"
            className={`${dance.className} hover:scale-120 hover:translate-x-6 transition-all hover:cursor-pointer`}
          >
            Location
          </a>
          <hr className="border-gray-800" />
          <a
            onClick={() => {
              setNavState(false);
            }}
            href="#review"
            className={`${dance.className} hover:scale-120 hover:translate-x-6 transition-all hover:cursor-pointer`}
          >
            Reviews
          </a>
          <hr className="border-gray-800" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
