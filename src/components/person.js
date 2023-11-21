import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const animatePerson = (nameRef, roleRef, imageRef, borderColor) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    imageRef,
    {
      border: "1px solid transparent",
    },
    {
      border: `1px solid ${borderColor}`,
      duration: 3,
      delay: 0,
      scrollTrigger: {
        trigger: imageRef,
        start: "top 100%",
        end: "bottom 20%",
      },
    }
  );

  gsap.to(".circle", {
    opacity: 1,
    rotation: 720,
    duration: 2,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".circle",
      toggleActions: "play none none none",
    },
    onComplete: () => {
      gsap.fromTo(
        ".circle div",
        { scale: 0.5 },
        {
          display: "block",
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      );

      gsap.to(nameRef, {
        display: "block",
        opacity: 100,
        y: 20,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: nameRef,
          start: "top 100%",
          end: "bottom 20%",
        },
      });

      gsap.to(roleRef, {
        display: "block",
        opacity: 100,
        y: 20,
        duration: 1,
        delay: 0.8,
        scrollTrigger: {
          trigger: roleRef,
          start: "top 80%",
          end: "bottom 20%",
        },
      });
    },
  });
};

const Person = ({ imageSrc, borderColor, bgColor, name, role }) => {
  console.log("borderColor:", borderColor);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    animatePerson(
      nameRef.current,
      roleRef.current,
      imageRef.current,
      borderColor
    );
  }, [borderColor]);

  return (
    <div className={`flex flex-col items-center justify-center pb-7 h-[400px]`}>
      <div
        style={{ border: `1px solid ${borderColor}` }}
        className={`h-40 w-40 rounded-full mx-auto relative`}
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
          <div
            style={{ borderColor: `${borderColor}` }}
            className={`border-l h-32 hidden`}
          ></div>
          <div className={`w-3 h-3 ${bgColor} rounded-full hidden`}></div>
        </div>
        <div className="absolute left-1/2 ml-2 top-2">
          <div ref={nameRef} className="font-light text-xs sm:text-sm hidden">
            {name}
          </div>
          <div
            ref={roleRef}
            className="font-semibold text-xs sm:text-sm hidden"
          >
            {role}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
