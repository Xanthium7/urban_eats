"use client";

import React, { useRef } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

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
      className="hidden lg:fixed z-10000 bottom-8 right-16 h-20 w-20  bg-[#000000ed] rounded-full"
    >
      <a href="#nav" className="z-1000 ">
        <ArrowUpwardIcon className="text-white z-1000" />
      </a>
    </button>
  );
};

export default TopButton;
