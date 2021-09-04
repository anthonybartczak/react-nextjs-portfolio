import React from "react";
import { SiTailwindcss, SiNextDotJs, SiBootstrap, SiReact, SiDjango, SiAdobepremiere, SiAdobephotoshop } from "react-icons/si";

export const Technologies = () => {
    return (
        <>
        <div className="mb-32 max-w-4xl mx-auto items-center mt-24 flex flex-col justify-center">
            <a id='tech-stack' className="m-8 align-middle font-abel subpixel-antialiased text-4xl text-center font-bold">MY_TECH_STACK</a>
            <div className="flex flex-wrap lg:flex-row sm:flex-col justify-center md:space-x-8">
                <div className="bg-coolGray-50 rounded-md shadow-2xl text-center p-5 mb-8 w-48">
                    <a className="title-techstack">FRONTEND</a>
                    <ul className="font-abel list-none flex-col">
                        <li className="btn-techstack border-rose-500 hover:bg-rose-500 justify-center">
                            <SiReact className="mr-2"/>
                            <p>React.js</p>
                        </li>
                        <li className="btn-techstack border-rose-500 hover:bg-rose-500 justify-center">
                            <SiBootstrap className="mr-2"/>
                            <p>Bootstrap</p>
                        </li>
                        <li className="btn-techstack border-rose-500 hover:bg-rose-500 justify-center">
                            <SiTailwindcss className="mr-2"/>
                            <p>Tailwind</p>
                        </li>
                    </ul>
                </div>
                <div className="bg-coolGray-50 rounded-md shadow-2xl text-center p-5 mb-8 w-48">
                    <a className="title-techstack">BACKEND</a>
                    <ul className="font-abel list-none flex-col text-center">
                        <li className="btn-techstack border-teal-600 hover:bg-teal-600">
                            <SiDjango className="mr-2"/>
                            Django
                        </li>
                        <li className="btn-techstack border-teal-600 hover:bg-teal-600">
                            <SiNextDotJs className="mr-2"/>
                            Next.js
                        </li>
                    </ul>
                </div>
                <div className="bg-coolGray-50 rounded-md shadow-2xl text-center p-5 mb-8 w-48">
                    <a className="title-techstack">DESIGN</a>
                    <ul className="font-abel list-none flex-col text-center">
                        <li className="btn-techstack border-indigo-600 hover:bg-indigo-600">
                            <SiAdobephotoshop className="mr-2"/>
                            Photoshop
                        </li>
                        <li className="btn-techstack border-indigo-600 hover:bg-indigo-600">
                            <SiAdobepremiere className="mr-2"/>
                            Premiere
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};