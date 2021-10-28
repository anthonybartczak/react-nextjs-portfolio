import {useState, useEffect} from "react";
import Link from 'next/link'

export const NavbarProjects = () => {

  const [navbar, setNavbar] = useState(false)

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

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <>
      <nav id="navbar" className={navbar ? 'dark-bg shadow-lg sticky top-0 z-50 transition-duration-400' : ''}>
        <div className="max-w-16xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex space-x-16">
              <div className="hidden md:flex items-center space-x-1">
                <Link href={"/"} as={"/"} passHref><a className="font-abel text-lg py-2 px-6 text-coolGray-300 font-semibold hover:text-purple-100 transition duration-300 border-b-2 hover:border-purple-400">Home</a></Link>
                <Link href={"/contact"} as={"/contact"} passHref><a className="font-abel text-lg py-2 px-6 text-coolGray-300 font-semibold hover:text-teal-100 transition duration-300 border-b-2 hover:border-teal-400">Contact</a></Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={onClickMobile} className="outline-none mobile-menu-button">
              <svg className=" w-6 h-6 text-gray-500 hover:text-purple-500"
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
            <Link href={"/"} as={"/"} passHref><li><a className="text-coolGray-300 font-abel subpixel-antialiased text-md text-center font-bold block px-2 py-4 bg-gradient-to-r hover:from-teal-500 hover:via-blue-600 hover:to-purple-600 transition duration-300">Home</a></li></Link>
            <Link href={"/contact"} as={"/contact"} passHref><li><a className="text-coolGray-300 font-abel subpixel-antialiased text-md text-center font-bold block px-2 py-4 bg-gradient-to-r hover:from-teal-500 hover:via-blue-600 hover:to-purple-600 transition duration-300">Contact</a></li></Link>
          </ul>
        </div>
      </nav>
    </>
  );
};