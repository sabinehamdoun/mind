import React from "react";

const Banner = () => {
  return (
    <div className="2xl:container relative h-[450px] w-full text-center mx-auto">
      <img
        src={"/images/blue-circle.png"}
        alt="blue-circle"
        className="h-full object-fit mx-auto"
      />
      <img
        src={"/images/blue.png"}
        alt="Shadow"
        className="h-full object-fit mx-auto absolute top-0 left-0 md:top-11 md:left-96 opacity-20"
      />
      <div className="absolute top-52 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl lg:text-7xl leading-tight font-light">
        Behold a sneak peek of our creations. The future holds even more
        wonders.
      </div>
    </div>
  );
};

export default Banner;
