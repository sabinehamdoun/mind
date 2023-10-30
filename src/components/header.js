import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineCancel } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="2xl:container mx-auto font-semibold py-10 sm:py-16 px-7 sm:px-20">
        <div className="flex justify-between">
          <Link href="/" className="font-bold text-2xl sm:text-4xl text-white flex">
            mindspace
          </Link>
          <div className="flex items-center">
            {!isMobileMenuOpen ? (
              <button
                className="block sm:hidden text-2xl"
                onClick={toggleMobileMenu}
              >
                <HiOutlineMenuAlt4 className=" text-white p-0.5 rounded-[4px] w-[40px] h-[35px]" />
              </button>
            ) : (
              <button
                className="block sm:hidden text-3xl"
                onClick={toggleMobileMenu}
              >
                <MdOutlineCancel className="text-gray-400" />
              </button>
            )}
            <ul
              className={`hidden sm:flex list-none gap-4 sm:gap-3 md:gap-8 xl:12 mr-5 sm:mr-14 whitespace-nowrap overflow-hidden `}
            >
              <li className="hover:text-white text-[#FFFFFFB2]">
                <Link href="/">about us</Link>
              </li>
              <li className="hover:text-white text-[#FFFFFFB2]">
                <Link href="/">our work</Link>
              </li>
              <li className="hover:text-white text-[#FFFFFFB2]">
                <Link href="/">our clients</Link>
              </li>
              <li className="hover:text-white text-[#FFFFFFB2]">
                <Link href="/">our team</Link>
              </li>
              <li className="hover:text-white text-[#FFFFFFB2]">
                <Link href="/">contact us</Link>
              </li>
            </ul>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden absolute pt-14 pb-20 w-screen bg-[#000] flex flex-col items-center justify-center z-50 overflow-hidden">
            <ul
              className={`flex flex-col sm:hidden list-none gap-7 text-xl text-center`}
            >
              <li>
                <Link href="/">about us</Link>
              </li>
              <li>
                <Link href="/">our work</Link>
              </li>
              <li>
                <Link href="/">our clients</Link>
              </li>
              <li>
                <Link href="/">our team</Link>
              </li>
              <li>
                <Link href="/">contact us</Link>
              </li>
            </ul>
          </div>
        )}
      </div> 
    </div>
  );
};

export default Header;
