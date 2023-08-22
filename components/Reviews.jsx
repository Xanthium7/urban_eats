import React from "react";
import { Cinzel } from "next/font/google";
import Image from "next/image";

const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Reviews = () => {
  return (
    <div
      id="review"
      className={`${cinzel.className} text-white  mt-24 lg:mt-[20vh]`}
    >
      <h1 className="text-xl text-center lg:text-3xl">
        What Our Customers Say
      </h1>

      <div className="card-holder flex flex-col lg:flex-row mx-4 gap-5 mt-10 lg:justify-center ">
        <div className="relative overflow-hidden bg-red-500">
          <Image
            src={"/assets/r1.jpg"}
            width={500}
            height={500}
            className="lg:h-[100%] object-cover"
          />
          <div
            className="absolute top-14 bottom-0 font-bold text-xl    left-0 h-[90%] w-[100%] bg-[#ffffffb6] z-100 text-black flex flex-col justify-center items-center
          opacity-0 hover:opacity-100 transition-all text-center
          "
          >
            "Those Beef Brunches were some sort of magic!"
            <br />
            <h3 className="text-lg">by- Emma </h3>
          </div>
        </div>
        <div className="relative overflow-hidden bg-red-500">
          <Image
            src={"/assets/r2.jpg"}
            width={500}
            height={500}
            className="lg:h-[100%] object-cover"
          />
          <div
            className="absolute top-14 bottom-0 font-bold text-xl    left-0 h-[90%] w-[100%] bg-[#ffffffb4] z-100 text-black flex flex-col justify-center items-center
          opacity-0 hover:opacity-100 transition-all text-center
          "
          >
            "Flavours are delicious and unique but especially love what your
            business stands for"
            <br />
            <h3 className="text-lg">by- Adam, Waffle Man</h3>
          </div>
        </div>

        <div className="relative overflow-hidden bg-red-500">
          <Image
            src={"/assets/r3.jpg"}
            width={500}
            height={500}
            className="lg:h-[100%] object-cover"
          />
          <div
            className="absolute top-14 bottom-0 font-bold text-xl    left-0 h-[90%] w-[100%] bg-[#ffffffba] z-100 text-black flex flex-col justify-center items-center
          opacity-0 hover:opacity-100 transition-all text-center
          "
          >
            "Creative and tasty flavor ideas, the sauces are fun, and having
            them freshly prepared makes it soo much delicious"
            <br />
            <h3 className="text-lg">by- Simon, Sauce Lover</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
