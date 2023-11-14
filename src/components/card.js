import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

const Card = ({ imageSrc, altText, title, description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(cardRef.current, { opacity: 0, y: 50 });

    gsap.to(cardRef.current, {
      opacity: 2,
      y: 0,
      duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1, 
      },
    });
  }, []);

  return (
    <div ref={cardRef} className='text-white font-light py-6'>
      <img src={imageSrc} alt={altText} />
      <h3 className='text-white font-bold text-[20px] mt-8 sm:mt-2'>{title}</h3>
      <p className='text-normal mt-2'>{description}</p>
    </div>
  );
};

export default Card;
