import Footer from '@/components/footer';
import Header from '@/components/header';
import Person from '@/components/person';
import Report from '@/components/report';
import React from 'react';

const Team = () => {
  const teamMembers = [
    { imageSrc: '/images/person.webp', borderColor: 'border-[#38bdf8]', bgColor: 'bg-[#38bdf8]', name:'michel bou jawdeh', role: 'Studio Manager' },
    { imageSrc: '/images/person.webp', borderColor: 'border-[#38bdf8]', bgColor: 'bg-[#38bdf8]', name:'vincent villy', role: 'Senior Project Manager' },
    { imageSrc: '/images/person.webp', borderColor: 'border-red-500', bgColor: 'bg-red-500', name:'hossam talhouk', role: '3D Designer' },
    { imageSrc: '/images/person.webp', borderColor: 'border-[#38bdf8]', bgColor: 'bg-[#38bdf8]', name:'elie chidiac', role: 'Group IT Manager' },
    { imageSrc: '/images/person.webp', borderColor: 'border-[#38bdf8]', bgColor: 'bg-[#38bdf8]', name:'lee el sayed', role: 'Account Executive' },
    { imageSrc: '/images/person.webp', borderColor: 'border-red-500', bgColor: 'bg-red-500', name:'munah zahr', role: 'Regional Executive Creative Director' },
    { imageSrc: '/images/person.webp', borderColor: 'border-[#38bdf8]', bgColor: 'bg-[#38bdf8]', name:'mariam akar', role: 'Community Manager || Content Writer' },
    { imageSrc: '/images/person.webp', borderColor: 'border-[#38bdf8]', bgColor: 'bg-[#38bdf8]', name:'georgette emmanuel', role: 'Senior Traffic Manager' },
  ];

  return (
    <div>
      <Header />
      <Report />
      <div className="2xl:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-5 sm:px-12 lg:px-28 pb-20 gap-2">
        {teamMembers.map((person, index) => (
          <Person key={index} {...person} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Team;
