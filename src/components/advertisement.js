import React, { useState, useEffect } from "react";
import Card from "./card"; 
import axios from 'axios';

const CardGrid = () => {
  const [data, setData] = useState();

  const fetchLinksData = async () => {
    await axios
      .get("/api/fetchLinks")
      .then((res) => { 
        setData(res.data.data);
      })
      .catch(console.error)
      .finally(() => {
    
      });
  };
  
  useEffect(() => {
    fetchLinksData();
  }, []);

  useEffect(() => {
    console.log(data)
  }, [data]);

  return (
    <div className="2xl:container mx-auto px-5 sm:px-28 lg:px-52 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-8">
        {data && data.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.image}
            title={card.title}
            description={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;

