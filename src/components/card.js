import React from 'react';

const Card = ({ index, imageSrc, altText, title, description }) => {
  return (
    <div className='text-white font-light py-6'>
      <img src={imageSrc} alt={altText} />
      <h3 className='text-white font-bold text-[20px] mt-8 sm:mt-2'>{title}</h3>
      <p className='text-normal mt-2'>{description}</p>
    </div>
  );
};

export default Card;
