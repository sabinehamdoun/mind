import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Card = ({ imageSrc, altText, title, description }) => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const first = gsap.set(cardRef.current, { opacity: 0, y: 50 });

    const card = gsap.to(cardRef.current, {
      opacity: 1,
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

    const title = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 100%',
        end: 'bottom 20%',
        scrub: 1,
      },
    })
      .fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: -200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: {
            amount: 0.1,
          },
        }
      )
      .fromTo(
        titleRef.current,
        {
          y: 50,
          stagger: {
            amount: 0.1,
          },
        },
        {
          y: 0,
          stagger: {
            amount: 0.1,
          },
          duration: 1,
        },
        '<' 
      );

    const description = gsap.fromTo(
      descriptionRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: {
          amount: 0.1,
        },
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );

    return () => {
      first.kill();
      card.kill();
      title.kill();
      description.kill();
    };
  }, []);

  return (
    <div ref={cardRef} className='text-white font-light py-6'>
      <img src={imageSrc} alt={altText} />
      <h3 ref={titleRef} className='text-white font-bold text-[20px] mt-8 sm:mt-2'>
        {title}
      </h3>
      <p ref={descriptionRef} className='text-normal mt-2'>
        {description}
      </p>
    </div>
  );
};

export default Card;
