import React from "react";
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";

export const Technologies = () => {
    return (
        <>
        <div id='tech-stack' className="p-6 max-w-xl mx-auto bg-gray-50 rounded-xl shadow-md items-center mt-24 flex flex-col justify-center">
            <a className="m-4 align-middle font-abel subpixel-antialiased text-2xl text-center font-bold">TECH_STACK</a>
            <div className="flex space-x-8">
                <div className="text-center">
                    <a className="m-4 align-middle font-abel subpixel-antialiased text-xl text-center flex-row">FRONTEND</a>
                    <ul className="font-abel list-none flex-col text-center">
                        <li className="border border-indigo-600 rounded-xl px-3 mt-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">React.js</li>
                        <li className="border border-indigo-600 rounded-xl px-3 mt-2">Bootstrap</li>
                        <li className="border border-indigo-600 rounded-xl px-3 mt-2">Tailwind</li>
                    </ul>
                </div>
                <div className="text-center">
                    <a className="m-4 align-middle font-abel subpixel-antialiased text-xl text-center flex-row">BACKEND</a>
                    <ul className="font-abel list-none flex-col text-center">
                        <li className="border border-indigo-600 rounded-xl px-3 mt-2">Django</li>
                        <li className="border border-indigo-600 rounded-xl px-3 mt-2">Next.js</li>
                    </ul>
                </div>
                <div className="text-center">
                    <a className="m-4 align-middle font-abel subpixel-antialiased text-xl text-center flex-row">DESIGN</a>
                    <ul className="font-abel list-none flex-col text-center">
                        <li className="border border-indigo-600 rounded-xl px-3 mt-2">Adobe Photoshop</li>
                        <li className="border border-indigo-600 rounded-xl px-3 mt-2">Adobe Premiere</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};