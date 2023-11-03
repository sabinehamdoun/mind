import React, { useState, useRef } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Report = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="2xl:container mx-auto px-5 sm:px-12 lg:px-28 py-10 pb-20 sm:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className="flex flex-col gap-3 p-4 uppercase">
          <h2 className="font-bold text-xl">Consolidated reporting</h2>
          <hr className="w-full h-1 text-white" />
          <p className={`text-xl font-light ${activeSlide === 0 ? 'text-gray' : ''}`}>Estate planning & structuring</p>
          <hr className="w-[95%] h-1 text-gray" />
          <p className={`text-xl font-light ${activeSlide === 1 ? 'text-gray' : ''}`}>Real estate solutions</p>
          <hr className="w-[95%] h-1 text-gray" />
          <p className={`text-xl font-light ${activeSlide === 2 ? 'text-gray' : ''}`}>Private office</p>
          <hr className="w-[95%] h-1 text-gray" />
          <div className="flex justify-center sm:justify-end gap-4 text-3xl text-white sm:mr-8 mt-3">
            <button className="border-2 rounded-[30px] hover:bg-[#fe424c] p-3" onClick={goToPrevSlide}>
              <BiLeftArrowAlt />
            </button>
            <button className="border-2 rounded-[30px] hover:bg-[#fe424c] p-3" onClick={goToNextSlide}>
              <BiRightArrowAlt />
            </button>
          </div>
        </div>
        <div className="container p-4">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: '.custom-prev-button', 
              nextEl: '.custom-next-button',  
            }}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
          >
            <SwiperSlide>
              <div className="bg-[#252424] lg:h-[310px] py-8 px-3 lg:px-14 flex flex-col justify-center">
                <p className="font-light">Amidst the tranquil forest, where the leaves whispered secrets to the wind, a solitary traveler embarked on a journey into the unknown. </p>
                <p className="font-light">With each step, the path unraveled, revealing a world of hidden wonders and untold stories. The journey was not just about reaching a destination but about discovering the magic that lay in the journey itself.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#252424] lg:h-[310px] py-8 px-3 lg:px-14 flex flex-col justify-center">
                <p className="font-light">Amid the tranquil forest, where the leaves whispered secrets to the wind, a solitary traveler embarked on a journey into the unknown. </p>
                <p className="font-light">With each step, the path unraveled, revealing a world of hidden wonders and untold stories. The journey was not just about reaching a destination but about discovering the magic that lay in the journey itself.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#252424] lg:h-[310px] py-8 px-3 lg:px-14 flex flex-col justify-center">
                <p className="font-light">Amidst the tranquil forest, where the leaves whispered secrets to the wind, a solitary traveler embarked on a journey into the unknown. </p>
                <p className="font-light">With each step, the path unraveled, revealing a world of hidden wonders and untold stories. The journey was not just about reaching a destination but about discovering the magic that lay in the journey itself.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Report;
