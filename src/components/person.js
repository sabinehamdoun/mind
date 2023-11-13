import React from "react";

const Person = ({ imageSrc, borderColor, bgColor, name, role }) => {
  return (
    <div className={`flex flex-col items-center justify-center pb-7`}>
      <div
        className={`h-40 w-40 border-[1px] ${borderColor} rounded-full mx-auto relative`}
      >
        <img
          src={imageSrc}
          alt="circle"
          className="h-36 w-36 rounded-full absolute top-[7px] left-[7px] object-cover"
        />
      </div>
      <div className="w-full flex justify-center relative">
        <div className="flex flex-col items-center">
          <div className={`border-l ${borderColor} h-32`}></div>
          <div className={`w-3 h-3 ${bgColor} rounded-full`}></div>
        </div>
        <div className="absolute left-1/2 ml-2 top-2">
          <div className="font-light text-xs sm:text-sm">{name}</div>
          <div className="font-semibold text-xs sm:text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default Person;
