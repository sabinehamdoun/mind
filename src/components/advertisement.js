import React, { useState, useEffect } from 'react';
import Card from './card';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const CardGrid = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchLinksData = async () => {
    try {
      const res = await axios.get('/api/fetchLinks');
      setData(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLinksData();
  }, []);

  const filteredData = data.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="2xl:container mx-auto px-5 sm:px-12 lg:px-28 py-20">
      <div className="flex justify-end items-center mb-4">
        <div className="relative">
          <input
            placeholder="Search"
            id="search"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`border-1 rounded-lg py-4 px-4 w-full sm:w-96`}
          />
          <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500">
            <FaSearch />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-8">
        {filteredData.length > 0 ? (
          filteredData.map((card, index) => (
            <Link key={card.id} href={`/projects/${card.id}`}>
              <Card
                imageSrc={card.image}
                title={card.title}
                description={card.text}
                index={index}
              />
            </Link>
          ))
        ) : (
          <div className="text-center text-gray-600 font-bold text-xl py-10">
            No results found for "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
};

export default CardGrid;
