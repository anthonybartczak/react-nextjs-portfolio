/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (!mounted) return null;
    if (currentTheme === "dark") {
      return (
        <FiSun
          onClick={() => setTheme("light")}
          role="button"
          className="absolute left-0 top-0 my-1 h-4 w-4 text-gray-500 dark:text-gray-50 md:h-6 md:w-6 xl:my-4"
        />
      );
    } else {
      return (
        <FiMoon
          onClick={() => setTheme("dark")}
          role="button"
          className="absolute left-0 top-0 my-1 h-4 w-4 text-gray-500 dark:text-gray-50 md:h-6 md:w-6 xl:my-4"
        />
      );
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const generateDlEvent = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: "login",
        login_domain: "requests.anteriam.com"
      });
    }
  };


  function onClickMobile() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  }

  React.useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <nav
        id="navbar"
        className={
          navbar
            ? "transition-duration-400 sticky top-0 z-50 bg-gray-50 shadow-lg dark:bg-slate-800"
            : ""
        }
      >
        <div className="max-w-16xl mx-auto px-4">
          <div className="relative">{renderThemeChanger()}</div>
          <div className="flex justify-center">
            <div className="flex space-x-16">
              <div className="hidden items-center space-x-1 md:flex">
                <Link href={"/"} as={"/"} passHref>
                  <a className="border-b-2 py-3 px-6 font-abel text-lg font-semibold text-gray-500 transition duration-300 hover:border-green-400 hover:text-gray-700 dark:text-gray-50">
                    Home
                  </a>
                </Link>
                <Link href={"/projects"} as={"/projects"} passHref>
                  <a className="border-b-2 py-3 px-6 font-abel text-lg font-semibold text-gray-500 transition duration-300 hover:border-green-400 hover:text-gray-700 dark:text-gray-50">
                    Github
                  </a>
                </Link>
                <Link href={"/contact"} as={"/contact"} passHref>
                  <a className="border-b-2 py-3 px-6 font-abel text-lg font-semibold text-gray-500 transition duration-300 hover:border-green-400 hover:text-gray-700 dark:text-gray-50">
                    Contact
                  </a>
                </Link>
                <a
                  onClick={() => generateDlEvent()}
                  href="https://requests.anteriam.com"
                  className="border-b-2 py-3 px-6 font-abel text-lg font-semibold text-gray-500 transition duration-300 hover:border-green-400 hover:text-gray-700 dark:text-gray-50"
                >
                  Debugger
                </a>
              </div>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={onClickMobile}
                className="mobile-menu-button outline-none"
              >
                <svg
                  className=" h-6 w-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mobile-menu hidden">
          <ul className="">
            <Link href={"/"} as={"/"} passHref>
              <li>
                <a className="text-md block px-2 py-4 text-center font-abel font-bold subpixel-antialiased transition duration-300 hover:bg-green-500">
                  Home
                </a>
              </li>
            </Link>
            <Link href={"/projects"} as={"/projects"} passHref>
              <li>
                <a className="text-md block px-2 py-4 text-center font-abel font-bold subpixel-antialiased transition duration-300 hover:bg-green-500">
                  Github
                </a>
              </li>
            </Link>
            <Link href={"/contact"} as={"/contact"} passHref>
              <li>
                <a className="text-md block px-2 py-4 text-center font-abel font-bold subpixel-antialiased transition duration-300 hover:bg-green-500">
                  Contact
                </a>
              </li>
            </Link>
            <li>
              <a
                href="https://requests.anteriam.com"
                className="text-md block px-2 py-4 text-center font-abel font-bold subpixel-antialiased transition duration-300 hover:bg-green-500"
              >
                Debugger
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
