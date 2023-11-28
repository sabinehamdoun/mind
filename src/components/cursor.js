import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const moveCursor = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
    });
    gsap.to(followerRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.9,
    });

    // const isLink = e.target.tagName.toLowerCase() === "a";

    // if (isLink) {
    //   gsap.to(cursorRef.current, {
    //     scale: 2,
    //     duration: 0.5,
    //   });
    // } else {
    //   gsap.to(cursorRef.current, {
    //     scale: 1,
    //     duration: 0.5,
    //   });
    // }
  };

  useEffect(() => {
    gsap.set(cursorRef, {
      xPercent: 100,
      yPercent: 100,
    });
    gsap.set(followerRef, {
      xPercent: -20,
      yPercent: -20,
    });
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div>
      <div
        ref={cursorRef}
        className="w-8 h-8 rounded-3xl fixed bg-white z-50"
      ></div>
      <div
        ref={followerRef}
        className="w-24 h-24 bg-transparent border-2 border-solid border-[#fe424c] rounded-[90px] fixed z-20"
      ></div>
    </div>
  );
};

export default Cursor;
