import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const animatePerson = (nameRef, roleRef, imageRef) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".circle",  
  { 
    opacity: 100,
    rotation: 720,
    duration: 2,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.circle',
      toggleActions: "play none none none",
    }
  });

  gsap.from(imageRef, {
    border: "1px solid transparent",
    duration: 3,
    delay: 1,
    scrollTrigger: {
      trigger: imageRef,
      start: 'top 100%',
      end: 'bottom 20%',
    },
  });
  
  gsap.from(nameRef, {
    opacity: 100,
    y: 20,
    duration: 1,
    delay: 1.5,
    scrollTrigger: {
      trigger: nameRef,
      start: 'top 100%',
      end: 'bottom 20%',
    },
  });

  gsap.from(roleRef, {
    opacity: 100,
    y: 20,
    duration: 1,
    delay: 1.8,
    scrollTrigger: {
      trigger: roleRef,
      start: 'top 80%',
      end: 'bottom 20%',
    },
  });

};

const Person = ({ imageSrc, borderColor, bgColor, name, role }) => {
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    animatePerson(nameRef.current, roleRef.current, imageRef.current);
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center pb-7`}>
      <div
        className={`h-40 w-40 border-[1px] ${borderColor} rounded-full mx-auto relative`}
        ref={imageRef}
      >
        <img
          src={imageSrc}
          alt="circle"
          className="circle h-36 w-36 rounded-full absolute top-[7px] left-[7px] object-cover"
        />
      </div>
      <div className="w-full flex justify-center relative">
        <div className="circle flex flex-col items-center">
          <div className={`border-l ${borderColor} h-32`}></div>
          <div className={`w-3 h-3 ${bgColor} rounded-full`}></div>
        </div>
        <div className="absolute left-1/2 ml-2 top-2">
          <div ref={nameRef} className="font-light text-xs sm:text-sm">
            {name}
          </div>
          <div ref={roleRef} className="font-semibold text-xs sm:text-sm">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
