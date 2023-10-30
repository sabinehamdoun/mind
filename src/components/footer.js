import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-[#fe424c]">
      <div className="2xl:container mx-auto px-5 sm:px-20 py-20 flex flex-col sm:flex-row gap-20 md:gap-24">
        <div className="flex flex-row gap-14 sm:gap-8 lg:gap-28">
          <div>
            <h3 className="text-lg font-light pb-8">sitemap</h3>
            <ul className="whitespace-nowrap">
              <li className="text-sm">about us</li>
              <li className="text-sm">our work</li>
              <li className="text-sm">our clients</li>
              <li className="text-sm">our team</li>
              <li className="text-sm">contact us</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg font-light pb-8">offices</h3>
            <ul className="whitespace-nowrap">
              <li className="text-sm">dubai, UAE</li>
              <li className="text-sm">beirut, LEBANON</li>
              <li className="text-sm">paris ,FRANCE</li>
              <li className="text-sm">cairo, EGYPT</li>
              <li className="text-sm">riyadh, KSA</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-5 sm:ml-auto">
          <h3 className="text-3xl">mindspace</h3>
          <div className="border-l border-white h-8"></div>
          <BsInstagram className="text-[25px]" />
          <BiLogoLinkedin className="text-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
