import React from "react";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const Location = () => {
  return (
    <div id="location" className="lg:flex lg:mx-36 lg:justify-between">
      <div className="text-white w-1/2">
        <h1
          className={`${cinzel.className} ml-4 lg:ml-0 text-3xl lg:text-5xl border-b-2 pb-2 lg:mb-10 mb-6 `}
        >
          LOCATION:
        </h1>
        <p className={`${cinzel.className} hidden lg:block `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut delectus
          debitis necessitatibus officiis, iusto incidunt unde aspernatur
          recusandae, accusamus est voluptas suscipit laborum at ipsa, nisi
          ipsam corrupti inventore? Ab aliquid, itaque quibusdam ex repudiandae
          fugit ea magnam nisi maxime! Libero quas alias vel sed ex illo ducimus
          harum veniam.
        </p>
      </div>
      <iframe
        className="opacity-40 lg:rounded-lg w-screen lg:w-[600px] "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.019421544059!2d-73.9859026493398!3d40.75766861256463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sin!4v1692605959447!5m2!1sen!2sin"
        width="600"
        height="400"
        style={{
          border: "0",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
