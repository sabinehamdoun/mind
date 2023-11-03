import React from "react";

const Direction = ({ even, odd }) => {
  return (
    <div className="2xl:container mx-auto px-5 sm:px-28 pb-10 sm:pb-20">
      {even && (
       <div className="relative w-screen">
       <div className="absolute left-0 top-0 w-1/4 h-full flex items-center">
         <div className="flex flex-col justify-center">
           <h2 className="uppercase text-md md:text-4xl">
             We Institutionalize, Protect, And Grow Your Wealth
           </h2>
           <p className="uppercase text-[#fe424c] text-xs md:text-xl">
             For the generations to come.
           </p>
         </div>
       </div>
       <div className="w-3/4 flex justify-end">
         <img
           src="/images/off3.jpg"
           alt="off1"
           className="w-[80%] h-[200px] sm:h-[400px]"
          />
       </div>
     </div>
     
     
      )}
      {odd && (
        <div className="flex w-screen mx-auto relative">
        <div className={`w-1/4 absolute right-[30%] sm:right-[23%] top-0 h-full`}>
          <div className="flex items-center h-full">
            <div className="flex flex-col justify-center">
              <h2 className="uppercase text-md md:text-4xl">
                We Institutionalize, Protect, And Grow Your Wealth
              </h2>
              <p className="uppercase text-[#fe424c] text-xs md:text-xl">
                For the generations to come.
              </p>
            </div>
          </div>
        </div>
        <div className={`w-7/12 flex justify-start`}>
          <img
            src="/images/off3.jpg"
            alt="off1" 
            className="w-full h-[200px] sm:h-[400px] "
          />
        </div>
      </div>
      )}
    </div>
  );
};

export default Direction;
