"use client";

import React, { useRef } from "react";
import { IoMdArrowUp } from "react-icons/io";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const TopButton = () => {
  const ref = useRef();

  const scrollFun = () => {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      //   btn.style.display = "block";
      ref.current.style.display = "block";
    } else {
      //   btn.style.display = "none";
      ref.current.style.display = "none";
    }
  };

  window.addEventListener("scroll", scrollFun);

  return (
    <button
      id="topBtn"
      ref={ref}
      className="fixed z-10000 bottom-8 lg:right-16 md:right-16 right-6 lg:h-20 lg:w-20 h-10 w-10  bg-[#000000ed] rounded-full animate-bounce"
    >
      <div className="flex justify-center items-center w-full h-full">
        <a
          href="#nav"
          className="z-1000 w-full h-full flex justify-center items-center"
        >
          <IoMdArrowUp className="text-white z-50 text-3xl " />
          {/* <ArrowUpwardIcon className="text-white z-1000" /> */}
        </a>
      </div>
    </button>
  );
};

export default TopButton;
