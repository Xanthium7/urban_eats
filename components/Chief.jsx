import Image from "next/image";
import React from "react";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const Chief = () => {
  return (
    <div className="text-white flex items-center lg:h-[100vh] h-[70vh] ">
      <div className="w-[100%]   lg:mx-20  flex lg:flex-row flex-col">
        <div className="flex ">
          <Image
            width={500}
            height={500}
            src={"/assets/c-1.jpg"}
            className=" object-cover lg:h-[550px] lg:w-[800px] h-48 w-32 ml-4 lg:ml-0 "
          />
          <span
            className={`${cinzel.className} lg:hidden mx-auto text-xl self-center`}
          >
            Our Head Cheif
          </span>
        </div>
        <p
          className={`${cinzel.className} lg:text-xl text-xs lg:px-32 lg:py-24 px-4`}
        >
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam a culpa
          eius magnam mollitia cumque. Quasi, tempore blanditiis non molestiae
          optio ea minus nihil quisquam? Harum, <br />{" "}
          <span className="lg:block hidden">
            {" "}
            aliquid cum facilis unde quasi, id voluptas sint quaerat neque,
            officiis eum repudianomnis!
          </span>
          <hr className="lg:my-10 my-4" />
          <span className="lg:text-lg text-xs">
            Ipsa quam assumenda dolores.
          </span>
          <div className="flex gap-8">
            <span>
              <Image
                src={"/assets/bc1.png"}
                height={300}
                width={300}
                className="object-contain  lg:w-16 w-7 lg:mt-10 mt-2"
              />
            </span>
            <span>
              <Image
                src={"/assets/bc2.png"}
                height={300}
                width={300}
                className="object-contain lg:w-16 w-8 lg:mt-16 mt-4"
              />
            </span>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Chief;
