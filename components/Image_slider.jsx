"use client";

import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Image_slider = () => {
  const [sliderHoverState, setSliderHoverState] = useState(false);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,

    autoplaySpeed: 1500,
    cssEase: "linear",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="special" className="text-white">
      <h2
        className={`${cinzel.className} text-white lg:text-3xl md:text-2xl text-xl text-center`}
      >
        Specials
      </h2>
      <hr className="mx-16 my-2 mb-6 border-gray-700 lg:mx-[30rem] lg:my-3 lg:mb-10" />
      <Slider {...settings}>
        <div className="relative">
          <Image
            className={`lg:h-[30vh] h-[20vh]  object-cover  transition-all`}
            width={500}
            height={300}
            src="/assets/f1.jpg"
          />
          <div
            className={`lg:h-[30vh] h-[20vh] w-[500px] absolute top-0 left-0 bottom-0 opacity-0   z-10 bg-black hover:opacity-80 transition-all flex justify-center items-center `}
          >
            <h2 className={`${cinzel.className} text-3xl text-center `}>
              rating: <span className="text-yellow-500 text-4xl">★★★★★</span>
              <br />
              4.8
            </h2>
          </div>
        </div>
        <div className="relative">
          <Image
            className={`lg:h-[30vh] h-[20vh]  object-cover  transition-all `}
            width={500}
            height={300}
            src="/assets/f2.jpg"
          />
          <div
            className={`lg:h-[30vh] h-[20vh] w-[500px] absolute top-0 left-0 bottom-0 opacity-0 z-10 bg-black hover:opacity-80 transition-all flex justify-center items-center `}
          >
            <h2 className={`${cinzel.className} text-3xl text-center `}>
              rating: <span className="text-yellow-500 text-4xl">★★★★★</span>{" "}
              <br />
              5.0
            </h2>
          </div>
        </div>
        <div className="relative">
          <Image
            className={`lg:h-[30vh] h-[20vh]  object-cover  transition-all`}
            width={500}
            height={300}
            src="/assets/f3.jpg"
          />
          <div
            className={`lg:h-[30vh] h-[20vh] w-[500px] absolute top-0 left-0 bottom-0 opacity-0 z-10 bg-black hover:opacity-80 transition-all flex justify-center items-center `}
          >
            <h2 className={`${cinzel.className} text-3xl text-center `}>
              rating: <span className="text-yellow-500 text-4xl">★★★★★</span>{" "}
              <br />
              4.7
            </h2>
          </div>
        </div>
        <div className="relative">
          {/* <Image
            className={`lg:h-[30vh] h-[20vh]  object-cover  transition-all`}
            width={500}
            height={300}
            src="/assets/f4.jpg"
          /> */}
          <img
            className={`lg:h-[30vh] h-[20vh]  object-cover  transition-all`}
            // width={500}
            // height={300}
            src="https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <div
            className={`lg:h-[30vh] h-[20vh] w-[500px] absolute top-0 left-0 bottom-0 opacity-0 z-10 bg-black hover:opacity-80 transition-all flex justify-center items-center `}
          >
            <h2 className={`${cinzel.className} text-3xl text-center `}>
              rating: <span className="text-yellow-500 text-4xl">★★★★★</span>{" "}
              <br />
              4.9
            </h2>
          </div>
        </div>
        <div className="relative">
          <img
            className={`lg:h-[30vh] h-[20vh]  object-cover  transition-all`}
            // width={500}
            // height={300}
            src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <div
            className={`lg:h-[30vh] h-[20vh] w-[500px] absolute top-0 left-0 bottom-0 opacity-0 z-10 bg-black hover:opacity-80 transition-all flex justify-center items-center `}
          >
            <h2 className={`${cinzel.className} text-3xl text-center `}>
              rating: <span className="text-yellow-500 text-4xl">★★★★★</span>{" "}
              <br />
              5.0
            </h2>
          </div>
        </div>
        <div className="relative">
          {/* <Image
            className={`lg:h-[30vh] h-[20vh]  object-cover  transition-all`}
            width={500}
            height={300}
            src="/assets/f8.png"
          /> */}
          <img
            className={`lg:h-[30vh] h-[20vh]  object-cover  transition-all`}
            // width={500}
            // height={300}
            src="https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <div
            className={`lg:h-[30vh] h-[20vh] w-[500px] absolute top-0 left-0 bottom-0 opacity-0 z-10 bg-black hover:opacity-80 transition-all flex justify-center items-center `}
          >
            <h2 className={`${cinzel.className} text-3xl text-center `}>
              rating: <span className="text-yellow-500 text-4xl">★★★★★</span>{" "}
              <br />
              4.8
            </h2>
          </div>
        </div>
      </Slider>
      <div className={`${cinzel.className} mx-4 mt-16 lg:mt-32 lg:mx-72 `}>
        <h1 className="font-bold text-center mb-4 mt-4 lg:text-3xl ">
          NOW ACCEPTING INQUIRIES FOR PRIVATE EVENTS & HOLIDAY PARTIES!
        </h1>
        <p className="text-center text-sm lg:text-xl">
          We are now accepting all inquiries for full buyouts for private events
          and holiday parties, any day of the week, day or night. Our restaurant
          can accommodate up to 45 guests and potentially more. We can work with
          you on the menu, and curate beverages, beer, wine, and sake as well.
          Please contact us here to inquire!
        </p>

        <h1 className="font-bold text-center  mb-4 mt-4 lg:text-3xl">
          DINNER RESERVATIONS!
        </h1>
        <p className="text-center  text-sm lg:text-xl">
          We are now open for dinner service Thursday through Sunday! We’ll be
          accepting limited walk-ins and reservations on Yelp. For brunch, we
          still do not take reservations as we seat guests on a first come first
          serve basis. However, you can join our Yelp! Waitlist to save your
          spot ahead of time (same day only)!
        </p>

        <h1 className="font-bold text-center  mb-4 mt-4 lg:text-3xl">
          BUSINESS HOURS
        </h1>
        <p className="text-center  text-sm lg:text-xl">
          BRUNCH: Thursday through Monday 9:00am - 2:30pm DINNER: Thursday
          through Sunday 5:00pm - 9:00pm CLOSED Tuesdays & Wednesdays Dine-in,
          takeout, and delivery (via DoorDash) available
        </p>
      </div>
    </div>
  );
};

export default Image_slider;
