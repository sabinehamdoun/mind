import React from "react";
import Card from "./card";

const cardData = [
  {
    id: 1,
    imageSrc: "images/pepsi.jpg",
    altText: "Alt text 1",
    title: "Fizz the World",
    description: "Pepsi Expo 2022 campaign",
  },
  {
    id: 2,
    imageSrc: "images/puck.jpg",
    altText: "Alt text 2",
    title: "A Display To Inspire The Every Day Chef",
    description:
      "We created our bespoke, modular displays can be arranged in countless configurations",
  },
  {
    id: 3,
    imageSrc: "images/pepsi.jpg",
    altText: "Alt text 2",
    title: "A Display To Inspire The Every Day Chef",
    description:
      "We created our bespoke, modular displays can be arranged in countless configurations",
  },
  {
    id: 4,
    imageSrc: "images/pepsi.jpg",
    altText: "Alt text 2",
    title: "A Display To Inspire The Every Day Chef",
    description:
      "We created our bespoke, modular displays can be arranged in countless configurations",
  },
  {
    id: 5,
    imageSrc: "images/pepsi.jpg",
    altText: "Alt text 2",
    title: "A Display To Inspire The Every Day Chef",
    description:
      "We created our bespoke, modular displays can be arranged in countless configurations",
  },
  {
    id: 6,
    imageSrc: "images/pepsi.jpg",
    altText: "Alt text 2",
    title: "A Display To Inspire The Every Day Chef",
    description:
      "We created our bespoke, modular displays can be arranged in countless configurations",
  },
];

const CardGrid = () => {
  return (
    <div className="2xl:container mx-auto px-5 sm:px-28 lg:px-52 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
