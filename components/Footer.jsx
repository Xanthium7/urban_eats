import React from "react";
import { Cinzel, Dancing_Script } from "next/font/google";

const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const dance = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <div
      className={`${dance.className} mt-[20vh] lg:text-3xl text-white text-2xl h-[50vh] flex flex-col justify-center items-center`}
    >
      <div className="flex">
        <span className="text-5xl self-center">&copy;</span>
        <h1 className="ml-3 mt-2"> 2023 URBAN EATS</h1>
      </div>
      <br />
      <br />
      <br />
      <p className={`${cinzel.className} lg:text-xl text-sm mx-4 text-center`}>
        <span className="font-bold ">Urban Eats</span> 112 West Main Street,
        Alhambra, CA, 91801, United States 6262811035 hello@urbaneats.com
      </p>
    </div>
  );
};

export default Footer;
