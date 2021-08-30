import React from "react";

export const Technologies = () => {
    return (
        <>
        <div id='tech-stack' className="p-6 max-w-xl mx-auto bg-gray-50 rounded-xl shadow-md items-center mt-24 flex flex-col justify-center">
            <a className="m-4 align-middle font-abel subpixel-antialiased text-2xl text-center font-bold">TECH_STACK</a>
            <div className="flex space-x-8">
                <div className="text-center">
                    <a className="m-4 align-middle font-abel subpixel-antialiased text-xl text-center flex-row">FRONTEND</a>
                    <ul className="font-abel list-none flex-col text-center">
                        <li className="btn-techstack">React.js</li>
                        <li className="btn-techstack">Bootstrap</li>
                        <li className="btn-techstack">Tailwind</li>
                    </ul>
                </div>
                <div className="text-center">
                    <a className="m-4 align-middle font-abel subpixel-antialiased text-xl text-center flex-row">BACKEND</a>
                    <ul className="font-abel list-none flex-col text-center">
                        <li className="btn-techstack">Django</li>
                        <li className="btn-techstack">Next.js</li>
                    </ul>
                </div>
                <div className="text-center">
                    <a className="m-4 align-middle font-abel subpixel-antialiased text-xl text-center flex-row">DESIGN</a>
                    <ul className="font-abel list-none flex-col text-center">
                        <li className="btn-techstack">Adobe Photoshop</li>
                        <li className="btn-techstack">Adobe Premiere</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};