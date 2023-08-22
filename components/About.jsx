import React from "react";
import { Cinzel } from "next/font/google";
import Image from "next/image";

const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const About = () => {
  return (
    <div id="about" className="h-screen text-white  mt-6">
      <h1
        className={`${cinzel.className}  text-xl text-center lg:mt-24 lg:text-4xl `}
      >
        About us
        <hr className="mx-16 mt-2 borsder-gray-700 lg:mx-[30rem] lg:mt-3" />
      </h1>
      <div className="flex flex-col lg:flex-row md:flex-row relative">
        <div className="mt-10 lg:mt-20 mx-[3vh] w-[400px] lg:w-[550px] lg:mx-[15vh] relative overflow-hidden">
          <Image
            width={300}
            height={800}
            className=" l w-[400px] lg:w-[550px] object-cover lg:h-[600px] "
            src="/assets/resturant.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2">
          <p
            className={`${cinzel.className} lg:mt-[9vh] lg:text-xl lg:leading-10 md:mt-[5vh] 
             md:text-lg md:leading-10 absolute lg:relative md:relative lg:top-0 md:top-0 top-60 right-0 left-0 bottom-[]
              mx-7 ml-10 lg:mx-0 lg:ml-0 md:mx-0 md:ml-0 bg-[#000000b0] p-2 rounded-md lg:bg-[#00000000] md:bg-[#00000000] `}
          >
            <b>Urban Bites</b> , a culinary haven where tradition and innovation
            harmonize to create a truly unique dining experience. Situated at
            the crossroads of rich Malabari heritage, authentic Indian cuisine,
            and contemporary American fare, our restaurant invites you to embark
            on a gastronomic journey that transcends borders.
          </p>
          <p
            className={`${cinzel.className} xl:mt-[0vh] xl:text-xl xl:leading-10 hidden xl:block`}
          >
            Discover the diverse array of flavors that Urban Bites has to offer.
            Indulge in the authentic spices and aromas of Malabari cuisine,
            brought to life through traditional recipes passed down through
            generations. Savor the intricate richness <br />
            of Indian delicacies that pay homage to time-honored culinary
            traditions. For those seeking a blend of cultures, our menu
            seamlessly integrates semi-modern American dishes, offering a
            refreshing twist on familiar classics. Our chefs are culinary
            artisans, skillfully crafting dishes that honor the authenticity of
            Malabari and Indian cuisines while embracing the creativity of
            modern American cooking techniques.
          </p>
        </div>
      </div>
      <div
        className="flex lg:hidden  justify-around mt-20
      "
      >
        <div
          className={`${cinzel.className} h-[9vh] w-[18vh] bg-[#000000d5] flex justify-center items-center border border-gray-400 hover:text-xl ease-in duration-200 `}
        >
          <a href={""}>Popular</a>
        </div>
        <div
          className={`${cinzel.className} h-[9vh] w-[18vh] bg-[#000000d5] flex justify-center items-center border border-gray-400 hover:text-xl ease-in duration-200 `}
        >
          <a href={"#review"}>Reviews</a>
        </div>
      </div>
    </div>
  );
};

export default About;
