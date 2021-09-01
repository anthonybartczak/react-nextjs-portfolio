import React from "react";
import { SiTailwindcss, SiNextDotJs, SiBootstrap, SiReact, SiDjango, SiAdobepremiere, SiAdobephotoshop } from "react-icons/si";

export const Technologies = () => {
    return (
        <>
        <div id='tech-stack' className="mb-32 p-6 max-w-2xl mx-auto items-center mt-24 flex flex-col justify-center">
            <a className="m-4 align-middle font-abel subpixel-antialiased text-4xl text-center font-bold">TECH_STACK</a>
            <div className="flex">
                <div className="bg-coolGray-50 rounded-md shadow-2xl text-center p-5 mb-12 w-4xl">
                    <a className="m-4 align-middle font-abel subpixel-antialiased text-2xl text-center flex-col">FRONTEND</a>
                    <ul className="font-abel list-none flex-col items-center">
                        <li className="btn-techstack border-rose-500 hover:bg-rose-500">
                            <SiReact className="mr-1"/>
                            React.js
                        </li>
                        <li className="btn-techstack border-rose-500 hover:bg-rose-500">
                            <SiBootstrap className="mr-1"/>
                            Bootstrap
                        </li>
                        <li className="btn-techstack border-rose-500 hover:bg-rose-500">
                            <SiTailwindcss className="mr-1"/>
                            Tailwind
                        </li>
                    </ul>
                </div>
                <div className="bg-coolGray-50 rounded-md shadow-2xl text-center p-5 mb-12 mx-6">
                    <a className="m-4 align-middle font-abel subpixel-antialiased text-2xl text-center flex-col">BACKEND</a>
                    <ul className="font-abel list-none flex-col text-center">
                        <li className="btn-techstack border-teal-600 hover:bg-teal-600">
                            <SiDjango className="mr-1"/>
                            Django
                        </li>
                        <li className="btn-techstack border-teal-600 hover:bg-teal-600">
                            <SiNextDotJs className="mr-1"/>
                            Next.js
                        </li>
                    </ul>
                </div>
                <div className="bg-coolGray-50 rounded-md shadow-2xl text-center p-5 mb-12">
                    <a className="m-4 align-middle font-abel subpixel-antialiased text-2xl text-center flex-col">DESIGN</a>
                    <ul className="font-abel list-none flex-col text-center">
                        <li className="btn-techstack border-indigo-600 hover:bg-indigo-600">
                            <SiAdobephotoshop className="mr-1"/>
                            Photoshop
                        </li>
                        <li className="btn-techstack border-indigo-600 hover:bg-indigo-600">
                            <SiAdobepremiere className="mr-1"/>
                            Premiere
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};