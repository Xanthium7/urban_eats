import Nav from "@/components/Nav";
import Image from "next/image";
import { Roboto, Dancing_Script } from "next/font/google";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import About from "@/components/About";
import Link from "next/link";
import Image_slider from "@/components/Image_slider";
import Chief from "@/components/Chief";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import TopButton from "@/components/TopButton";
import Footer from "@/components/Footer";

const dance = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <TopButton></TopButton>
      <main>
        <Nav />

        <video
          className=" w-screen   z-0 top-0 left-0 right-0 "
          muted
          loop
          autoPlay
        >
          <source src="/assets/v2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute mx-8 top-28 md:top-[15vh] lg:top-[20vh]  bg-[#00000000] flex w-3/4  ">
          <h1
            className={`${dance.className}   relative z-10 text-white text-lg md:text-6xl lg:text-8xl`}
          >
            Elevate Your Palate with Urban Bites: Where Flavors and Modernity
            Converge.
            <span
              className={`${dance.className} text-sm  lg:text-7xl  w-[75%] md:hidden lg:block`}
            >
              <br />
              Discover the world of flavors that awaits you
            </span>
          </h1>
        </div>
        <a href="#about">
          <KeyboardArrowDownIcon className="text-white text-5xl absolute bottom-[0px] z-10 right-[50%] left-[50%] mx-auto mt-20 lg:animate-bounce hidden md:hi lg:block " />
        </a>
      </main>

      <About />
      <Image_slider />
      <Chief />
      <Location />
      <Reviews />
      <Footer />
    </>
  );
}
