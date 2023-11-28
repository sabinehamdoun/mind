import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineCancel } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { gsap } from "gsap";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const underAbout = useRef(null);
  const underWork = useRef(null);
  const underClients = useRef(null);
  const underTeam = useRef(null);
  const underContact = useRef(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [router.asPath]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkHover = (e, underRef) => {
    gsap.fromTo(
      underRef.current,
      {
        width: "0%",
      },
      {
        width: "50%",
        duration: 0.3,
        ease: "ease-in",
      }
    );
  };

  const handleLinkLeave = (e, underRef) => {
    if (!router.pathname.includes(e.currentTarget.getAttribute("href"))) {
      gsap.to(underRef.current, {
        width: "0%",
        duration: 0.3,
        ease: "ease-in",
      });
    }
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
                <Link href="/about" onMouseEnter={(e) => handleLinkHover(e, underAbout)} onMouseLeave={(e) => handleLinkLeave(e, underAbout)}>
                    about us
                    <hr className={`underline mx-auto border-b-2 rounded-lg border-[#fe424c] ${router.pathname === "/about" ? "w-1/2" : " w-0"}`} ref={underAbout} />
                </Link>
              </li>
              <li className={`hover:text-white text-[#FFFFFFB2] ${router.pathname === "/" ? "text-white" : ""}`}>
                <Link href="/" onMouseEnter={(e) => handleLinkHover(e, underWork)} onMouseLeave={(e) => handleLinkLeave(e, underWork)}>
                    our work
                    <hr className={`underline mx-auto border-b-2 rounded-lg border-[#fe424c] ${router.pathname === "/" ? "w-1/2" : " w-0"}`} ref={underWork} />
                </Link>
              </li>
              <li className={`hover:text-white text-[#FFFFFFB2] ${router.pathname === "/clients" ? "text-white" : ""}`}>
                  <Link href="/clients" onMouseEnter={(e) => handleLinkHover(e, underClients)} onMouseLeave={(e) => handleLinkLeave(e, underClients)}>
                    our clients
                    <hr className={`underline mx-auto border-b-2 rounded-lg border-[#fe424c] ${router.pathname === "/clients" ? "w-1/2" : " w-0"}`} ref={underClients} />
                </Link>
              </li>
              <li className={`hover:text-white text-[#FFFFFFB2] ${router.pathname === "/teams" ? "text-white" : ""}`}>
                <Link href="/teams" onMouseEnter={(e) => handleLinkHover(e, underTeam)} onMouseLeave={(e) => handleLinkLeave(e, underTeam)}>
                    our team
                    <hr className={`underline mx-auto border-b-2 rounded-lg border-[#fe424c] ${router.pathname === "/teams" ? "w-1/2" : " w-0"}`} ref={underTeam} />
                </Link>
              </li>
              <li className={`hover:text-white text-[#FFFFFFB2] ${router.pathname === "/contact" ? "text-white" : ""}`}>
                <Link href="/contact" onMouseEnter={(e) => handleLinkHover(e, underContact)} onMouseLeave={(e) => handleLinkLeave(e, underContact)}>
                    contact us
                    <hr className={`underline mx-auto border-b-2 rounded-lg border-[#fe424c] ${router.pathname === "/contact" ? "w-1/2" : " w-0"}`} ref={underContact} />
                </Link>
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
