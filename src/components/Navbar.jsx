import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
//import { animateScroll as scroll} from 'react-scroll'
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div
      className={`fixed w-screen h-[80px] z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-zinc-200 backdrop-blur-sm drop-shadow-lg"
      }`}
    >
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4 ml-6">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <svg
                className="w-8 h-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="21.152%"
                    cy="86.063%"
                    fx="21.152%"
                    fy="86.063%"
                    r="79.941%"
                    id="header-logo"
                  >
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  fill="url(#header-logo)"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </div>
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
            <li>
              <Link
                className="link-underline-black link-underline rounded hover:bg-gray-300 sm:py-2 sm:px-3"
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="link-underline-black link-underline rounded hover:bg-gray-300 sm:py-2 sm:px-3"
                to="about"
                smooth={true}
                offset={-200}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="link-underline-black link-underline rounded hover:bg-gray-300 sm:py-2 sm:px-3"
                to="support"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                className="link-underline-black link-underline rounded hover:bg-gray-300 sm:py-2 sm:px-3"
                to="platforms"
                smooth={true}
                offset={-100}
                duration={500}
              >
                Platforms
              </Link>
            </li>
            <li>
              <Link
                className="link-underline-black link-underline rounded hover:bg-gray-300 sm:py-2 sm:px-3"
                to="pricing"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="text-black mr-4 items-center bg-zinc-200 border-1 py-3 px-8 focus:outline-none hover:bg-indigo-600 hover:text-white text-base mt-4 md:mt-0">
            Sign In
          </button>
          <button className="inline-flex px-8 py-3 mt-4 md:mt-0">
            Sign Up{" "}
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent border-1 text-black px-8 py-3 mb-4 focus:outline-none hover:bg-indigo-600 hover:text-white">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
