import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/core";
import { useEffect, useRef, useState } from "react";
import axios from 'axios';

const Slider = () => {
  const swiperRef = useRef(null);
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);  
  const [slidesPerView, setSlidesPerView] = useState(3);

  const fetchSliderData = async () => {
    try {
      const response = await axios.get("/api/fetchSlider");
      setData(response.data.data.sections);
    } catch (error) {
      console.error(error);
    }
  };


  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.realIndex);
    }
  };

  useEffect(() => {
    function updateSlidesPerView() {
      if (window.innerWidth < 640) {
        setSlidesPerView(1.2);
      } else if (window.innerWidth < 780) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    }

    updateSlidesPerView();

    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", handleSlideChange);
    }
  }, []); 
   
  useEffect(() => {
    fetchSliderData();
  }, []);

    useEffect(() => {
    console.log(data)
  }, [data]); 
  
  return (
    <div className="xl:container mx-auto py-10 sm:py-16 px-7 sm:px-12 lg:px-28">
      <Swiper
        modules={[Navigation]}
        spaceBetween={35}
        slidesPerView={slidesPerView}
        navigation
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        initialSlide={activeIndex}  
        centeredSlides={true}  
        style={{ height: "400px" }}
      >
        {data && data.map((slide, index) => (
          <SwiperSlide key={index}>
            <div>
              <img src={slide.details.image} alt="Slide"/> 
              {index === activeIndex && (
                <>
                  <h2 className="font-bold mt-7 text-lg">{slide.title}</h2>
                  <p className="font-light mt-3 text-sm">{slide.subtitle}</p>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
