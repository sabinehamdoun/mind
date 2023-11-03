import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#fe424c]">
      <div className="2xl:container mx-auto px-5 sm:px-12 lg:px-28 py-20 flex flex-col justify-center sm:justify-start sm:flex-row gap-20 md:gap-24">
        <div className="flex flex-col mx-auto sm:mx-0 ">
          <h3 className="text-lg font-light pb-8">sitemap</h3>
          <ul className="whitespace-nowrap">
            <Link href="/about">
              <li className="text-sm">about us</li>
            </Link>
            <Link href="/">
              <li className="text-sm">our work</li>
            </Link>
            <Link href="/clients">
              <li className="text-sm">our clients</li>
            </Link>
            <Link href="/teams">
              <li className="text-sm">our team</li>
            </Link>
            <Link href="/">
              <li className="text-sm">contact us</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center justify-center sm:justify-end gap-5 sm:ml-auto">
          <Link href="/">
            <h3 className="text-3xl">PixelPulse</h3>
          </Link>
          <div className="border-l border-white h-8"></div>
          <BsInstagram className="text-[25px]" />
          <BiLogoLinkedin className="text-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
