import React from "react";
import { SiTailwindcss, SiNextDotJs, SiBootstrap, SiReact, SiDjango, SiAdobepremiere, SiAdobephotoshop } from "react-icons/si";

export const Technologies = () => {
    return (
        <>
        <div className="mb-32 p-6 max-w-2xl mx-auto items-center mt-24 flex flex-col justify-center">
            <a id='tech-stack' className="m-4 align-middle font-abel subpixel-antialiased text-4xl text-center font-bold">FAVORITE_TECH</a>
            <div className="flex-1">
                <div className="bg-coolGray-50 rounded-md shadow-2xl text-center p-5 mb-8">
                    <a className="title-techstack">FRONTEND</a>
                    <ul className="font-abel list-none flex-col items-center">
                        <li className="btn-techstack border-rose-500 hover:bg-rose-500">
                            <SiReact className="mr-2"/>
                            React.js
                        </li>
                        <li className="btn-techstack border-rose-500 hover:bg-rose-500">
                            <SiBootstrap className="mr-2"/>
                            Bootstrap
                        </li>
                        <li className="btn-techstack border-rose-500 hover:bg-rose-500">
                            <SiTailwindcss className="mr-2"/>
                            Tailwind
                        </li>
                    </ul>
                </div>
                <div className="bg-coolGray-50 rounded-md shadow-2xl text-center p-5 mb-8">
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
                <div className="bg-coolGray-50 rounded-md shadow-2xl text-center p-5 mb-8">
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