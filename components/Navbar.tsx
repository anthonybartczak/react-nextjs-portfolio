import React, {useState, useEffect} from "react";
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {FiSun, FiMoon} from 'react-icons/fi';

export const Navbar = () => {

  const [navbar, setNavbar] = useState(false);
  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (!mounted) return null;
    if (currentTheme === 'dark') {
      return (
        <FiSun
          onClick={() => setTheme('light')}
          role="button"
          className="w-4 h-4 md:w-6 md:h-6 text-gray-500 dark:text-gray-50 absolute left-0 top-0 my-1 xl:my-4"
        />
      )
    } else {
      return (
        <FiMoon
          onClick={() => setTheme('dark')}
          role="button"
          className="w-4 h-4 md:w-6 md:h-6 text-gray-500 dark:text-gray-50 absolute left-0 top-0 my-1 xl:my-4"
        />
      )
    }
  }

  const changeBackground = () => {
    if(window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  function onClickMobile() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <>
      <nav id="navbar" className={navbar ? 'bg-gray-50 dark:bg-slate-800 shadow-lg sticky top-0 z-50 transition-duration-400' : ''}>
        <div className="max-w-16xl mx-auto px-4">
          <div className="relative">
            {renderThemeChanger()}
          </div>
          <div className="flex justify-center">
            <div className="flex space-x-16">
              <div className="hidden md:flex items-center space-x-1">
                <Link href={"/"} as={"/"} passHref><a className="font-abel text-lg py-3 px-6 dark:text-gray-50 text-gray-500 font-semibold hover:text-gray-700 transition duration-300 border-b-2 hover:border-green-400">Home</a></Link>
                <Link href={"/projects"} as={"/projects"} passHref><a className="font-abel text-lg py-3 px-6 dark:text-gray-50 text-gray-500 font-semibold hover:text-gray-700 transition duration-300 border-b-2 hover:border-green-400">Github</a></Link>
                <Link href={"/contact"} as={"/contact"} passHref><a className="font-abel text-lg py-3 px-6 dark:text-gray-50 text-gray-500 font-semibold hover:text-gray-700 transition duration-300 border-b-2 hover:border-green-400">Contact</a></Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={onClickMobile} className="outline-none mobile-menu-button">
              <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
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
        <div className="hidden mobile-menu">
          <ul className="">
            <Link href={"/"} as={"/"} passHref><li><a className="font-abel subpixel-antialiased text-md text-center font-bold block px-2 py-4 hover:bg-green-500 transition duration-300">Home</a></li></Link>
            <Link href={"/projects"} as={"/projects"} passHref><li><a className="font-abel subpixel-antialiased text-md text-center font-bold block px-2 py-4 hover:bg-green-500 transition duration-300">Github</a></li></Link>
            <Link href={"/contact"} as={"/contact"} passHref><li><a className="font-abel subpixel-antialiased text-md text-center font-bold block px-2 py-4 hover:bg-green-500 transition duration-300">Contact</a></li></Link>
          </ul>
        </div>
      </nav>
    </>
  );
};