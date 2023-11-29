import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import VideoModal from "./video-model";

SwiperCore.use([Navigation, Pagination]);

const ClickableImgSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  const slideData = [
    { imgSrc: "/images/dubai.jpg", videoSrc: "/images/movie.mp4" },
    { imgSrc: "/images/pepsi.jpg", videoSrc: "/images/movie.mp4" },
  ];

  return (
    <div className="relative pt-20 pb-44 xl:container mx-auto px-7 sm:px-0">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        className="sm:w-1/2 mx-auto click" 
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <img
                src={slide.imgSrc}
                alt={`Image ${index + 1}`}
                className="max-w-full cursor-pointer h-32 sm:h-60"
                onClick={() => {
                  openModal();
                  setCurrentSlide(index);
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={slideData[currentSlide].imgSrc}
        videoSrc={slideData[currentSlide].videoSrc}
      />
    </div>
  );
};

export default ClickableImgSlider;
