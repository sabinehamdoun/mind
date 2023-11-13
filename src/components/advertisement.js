import React, { useState, useEffect } from "react";
import Card from "./card";
import axios from "axios";
import Link from "next/link";

const CardGrid = () => {
  const [data, setData] = useState();

  const fetchLinksData = async () => {
    await axios
      .get("/api/fetchLinks")
      .then((res) => {
        setData(res.data.data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchLinksData();
  }, []);

  return (
    <div className="2xl:container mx-auto px-5 sm:px-12 lg:px-28 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-8">
        {data &&
          data.map((card, index) => (
            <Link key={card.id} href={`/projects/${index}`}>
              <Card
                imageSrc={card.image}
                title={card.title}
                description={card.text}
                index={index}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CardGrid;
