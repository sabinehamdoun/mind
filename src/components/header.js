import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineCancel } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { gsap } from "gsap";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [router.asPath]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkHover = (e) => {
    gsap.to(e.target, {
      borderBottom: "4px solid #fe424c", 
      duration: 0.3,
    });
  };

  const handleLinkLeave = (e) => {
    gsap.to(e.target, {
      borderBottom: "none",
      duration: 0.3,
    });
  };

  return (
    <div>
      <div className="2xl:container mx-auto font-semibold py-10 sm:py-16 sm:px-12 lg:px-28">
        <div className="flex justify-between gap-5 px-7 sm:px-0">
          <Link href="/" className="font-bold text-2xl sm:text-4xl text-white flex">
            PixelPulse
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
              className={`hidden sm:flex list-none gap-4 sm:gap-3 md:gap-8 xl:12 mr-5 sm:mr-0 whitespace-nowrap overflow-hidden `}
            >
              <li className={`text-[#FFFFFFB2] hover:text-white ${router.pathname === "/about" ? "text-white" : ""}`}>
                <Link href="/about" onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>about us</Link>
              </li>
              <li className={`hover:text-white text-[#FFFFFFB2] ${router.pathname === "/" ? "text-white" : ""}`}>
                <Link href="/" onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>our work</Link>
              </li>
              <li className={`hover:text-white text-[#FFFFFFB2] ${router.pathname === "/clients" ? "text-white" : ""}`}>
                <Link href="/clients" onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>our clients</Link>
              </li>
              <li className={`hover:text-white text-[#FFFFFFB2] ${router.pathname === "/teams" ? "text-white" : ""}`}>
                <Link href="/teams" onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>our team</Link>
              </li>
              <li className={`hover:text-white text-[#FFFFFFB2] ${router.pathname === "/contact" ? "text-white" : ""}`}>
                <Link href="/contact" onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>contact us</Link>
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
                <Link href="/about">about us</Link>
              </li>
              <li>
                <Link href="/">our work</Link>
              </li>
              <li>
                <Link href="/clients">our clients</Link>
              </li>
              <li>
                <Link href="/teams">our team</Link>
              </li>
              <li>
                <Link href="/contact">contact us</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
