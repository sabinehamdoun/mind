import { gsap } from "gsap";
import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    gsap.set(".secondText", { opacity: 0 });
    gsap.set(".firstImg", { filter: "grayscale(100%)" });
  }, []);

  const handleHover = () => {
    gsap.to(".firstImg", {
      duration: 0.5,
      filter: "grayscale(0%)",
      onStart: () => {
        gsap.to(".secondText", { opacity: 1, duration: 0.5 });
      },
    });
  
    gsap.to(".firstText", { opacity: 0, duration: 0.5 });
  };
  
  const handleHoverOut = () => {
    gsap.to(".firstImg", {
      duration: 0.5,
      filter: "grayscale(100%)",
    });
  
    gsap.to(".secondText", { opacity: 0, duration: 0.5 });
    gsap.to(".firstText", { opacity: 1, duration: 0.5 });
  };
  

  return (
    <div>
      <Header />

      <div className="flex flex-col relative items-center justify-center py-20 pb-60 sm:pb-48">
        <div className="text-center w-full mb-12 h-full">
          <img
            src="/images/dubai.jpg"
            className="h-40 sm:h-80 firstImg object-cover mx-auto"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          />
        </div>
        <img
          src={"/images/blue.png"}
          alt="Shadow"
          className="h-[450px] absolute sm:h-[600px] w-auto object-cover mx-auto opacity-20 z-[-1] left-[40%]"
        />

        <div className="sm:text-center px-4 sm:px-0 z-10 absolute firstText sm:left-[61.2%] mt-[65%] sm:mt-0">
          <p className="text-2xl font-light">yes, it's a melting pot.</p>
          <p className="text-2xl font-bold">
            {" "}
            no, we're not looking to blend in. <br /> let's connect so we stand
            out together
          </p>
        </div> 

        <div className="sm:text-center px-4 sm:px-0 z-10 absolute w-full sm:w-64 whitespace-nowrap secondText top-1/2 sm:top-[45%] sm:left-[63%]">
          <p className="text-7xl font-light"> dubai </p>
          <p className="font-light mt-5">liwa heights</p>
          <p className="font-light">office 3405, cluster W</p>
          <p className="font-light">JLT, dubai, UAE</p>
          <p className="font-semibold mt-5">+971 4 369 7636</p>
          <p className="font-semibold">HelloDubai@mindspace-me.com</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
