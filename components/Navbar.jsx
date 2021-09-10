import React, {useState} from "react";
import Link from 'next/link'


export const Navbar = () => {

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

  function scrollToID(id) {
    const element = document.getElementById(id)
    element.scrollIntoView()
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  })
  
  return (
    <>
      <nav id="navbar" className={navbar ? 'bg-gray-50 shadow-lg sticky top-0 z-50 transition-duration-400' : ''}>
        <div className="max-w-16xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex space-x-16">
              <div className="hidden md:flex items-center space-x-1">
                <a onClick={() => scrollToID("home")} className="font-abel text-lg py-3 px-6 text-gray-500 font-semibold hover:text-gray-700 transition duration-300 border-b-2 hover:border-green-400">Home</a>
                <a onClick={() => scrollToID("timeline")} className="font-abel text-lg py-3 px-6 text-gray-500 font-semibold hover:text-gray-700 transition duration-300 border-b-2 hover:border-green-400">Timeline</a>
                <a onClick={() => scrollToID("tech-stack")} className="font-abel text-lg py-3 px-6 text-gray-500 font-semibold hover:text-gray-700 transition duration-300 border-b-2 hover:border-green-400">Tech</a>
                <Link href={"/projects"} as={"/projects"} passHref><a className="font-abel text-lg py-3 px-6 text-gray-500 font-semibold hover:text-gray-700 transition duration-300 border-b-2 hover:border-green-400">Projects</a></Link>
                <Link href={"/contact"} as={"/contact"} passHref><a className="font-abel text-lg py-3 px-6 text-gray-500 font-semibold hover:text-gray-700 transition duration-300 border-b-2 hover:border-green-400">Contact</a></Link>
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
            <li><a onClick={() => scrollToID("home")} className="font-abel subpixel-antialiased text-md text-center font-bold block px-2 py-4 hover:bg-green-500 transition duration-300">Home</a></li>
            <li><a onClick={() => scrollToID("timeline")} className="font-abel subpixel-antialiased text-md text-center font-bold block px-2 py-4 hover:bg-green-500 transition duration-300">Timeline</a></li>
            <li><a onClick={() => scrollToID("tech-stack")} className="font-abel subpixel-antialiased text-md text-center font-bold block px-2 py-4 hover:bg-green-500 transition duration-300">Tech</a></li>
            <Link href={"/contact"} as={"/contact"} passHref><li><a className="font-abel subpixel-antialiased text-md text-center font-bold block px-2 py-4 hover:bg-green-500 transition duration-300">Projects</a></li></Link>
            <Link href={"/contact"} as={"/contact"} passHref><li><a className="font-abel subpixel-antialiased text-md text-center font-bold block px-2 py-4 hover:bg-green-500 transition duration-300">Contact</a></li></Link>
          </ul>
        </div>
      </nav>
    </>
  );
};