import React from "react";

const Direction = ({ even, odd }) => {
  return (
    <div className="2xl:container mx-auto px-7 sm:px-10 lg:px-28 pb-10 sm:pb-20">
      {even && (
       <div className="sm:relative w-full">
       <div className="sm:absolute sm:left-[12%] sm:top-0 w-[90%] sm:w-1/3 py-3 h-full flex sm:items-center">
         <div className="flex flex-col justify-center">
           <h2 className="uppercase text-md sm:text-lg md:text-4xl">
             We Institutionalize, Protect, And Grow Your Wealth
           </h2>
           <p className="uppercase text-[#fe424c] text-xs sm:text-base md:text-xl">
             For the generations to come.
           </p>
         </div>
       </div>
       <div className="w-full flex md:justify-end">
         <img
           src="/images/off3.jpg"
           alt="off1"
           className="w-full sm:w-[60%] h-[200px] sm:h-[400px] object-cover"
          />
       </div>
     </div>
     
     
      )}
      {odd && (
        <div className="flex flex-col sm:flex-row w-full mx-auto sm:relative">
        <div className={`w-[90%] sm:w-1/3 sm:absolute sm:right-[12%] sm:top-0 h-full py-3`}>
          <div className="flex sm:items-center h-full">
            <div className="flex flex-col justify-center">
              <h2 className="uppercase text-md sm:text-lg md:text-4xl">
                We Institutionalize, Protect, And Grow Your Wealth
              </h2>
              <p className="uppercase text-[#fe424c] text-xs sm:text-base md:text-xl">
                For the generations to come.
              </p>
            </div>
          </div>
        </div>
        <div className={`w-full flex justify-start`}>
          <img
            src="/images/off3.jpg"
            alt="off1" 
            className="w-full sm:w-[60%] h-[200px] sm:h-[400px] object-cover "
          />
        </div>
      </div>
      )}
    </div>
  );
};

export default Direction;
