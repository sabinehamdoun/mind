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
          className="h-36 w-36 rounded-full mx-auto top-1/2 transform translate-y-1.5 object-cover"
        />
      </div>
      <div className="mx-auto flex transform translate-x-[47%] ">
        <div className="flex flex-col items-center">
          <div className={`border-l ${borderColor} h-32`}></div>
          <div className={`w-3 h-3 ${bgColor} rounded-full`}></div>
        </div>
        <div className="mt-2 pr-44 md:pr-32">
          {name && <div className="font-light text-xs sm:text-sm">{name}</div>}
          {role && (
            <div className="font-semibold text-xs sm:text-sm">{role}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Person;
