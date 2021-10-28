import React from "react";
import { SiTailwindcss, SiFigma, SiPrisma, SiChakraui, SiAdobexd, SiApollographql, SiNextdotjs, SiBootstrap, SiReact, SiDjango, SiAdobepremierepro, SiAdobephotoshop, SiNodedotjs } from "react-icons/si";

export const Technologies = () => {
    return (
        <>
        <div className="pb-64 max-w-4xl mx-auto items-center mt-24 flex flex-col justify-center">
            <a className="m-8 align-middle font-abel subpixel-antialiased text-4xl text-center font-bold">MY_TECH_STACK</a>
            <div className="flex justify-around flex-wrap lg:flex-row md:flex-col lg:space-x-8 place-content-stretch">
                <div className="item-techstack">
                    <a className="title-techstack">FRONTEND</a>
                    <ul className="font-abel list-none">
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
                        <li className="btn-techstack border-rose-500 hover:bg-rose-500 justify-center">
                            <SiChakraui className="mr-2"/>
                            <p>Chakra UI</p>
                        </li>
                    </ul>
                </div>
                <div className="item-techstack">
                    <a className="title-techstack">BACKEND</a>
                    <ul className="font-abel list-none text-center">
                        <li className="btn-techstack border-teal-600 hover:bg-teal-600">
                            <SiDjango className="mr-2"/>
                            <p>Django</p>
                        </li>
                        <li className="btn-techstack border-teal-600 hover:bg-teal-600">
                            <SiNextdotjs className="mr-2"/>
                            <p>Next.js</p>
                        </li>
                        <li className="btn-techstack border-teal-600 hover:bg-teal-600">
                            <SiNodedotjs className="mr-2"/>
                            <p>Node.js</p>
                        </li>
                        <li className="btn-techstack border-teal-600 hover:bg-teal-600">
                            <SiApollographql className="mr-2"/>
                            <p>Apollo</p>
                        </li>
                        <li className="btn-techstack border-teal-600 hover:bg-teal-600">
                            <SiPrisma className="mr-2"/>
                            <p>Prisma</p>
                        </li>
                    </ul>
                </div>
                <div className="item-techstack">
                    <a className="title-techstack">DESIGN</a>
                    <ul className="font-abel list-none text-center">
                        <li className="btn-techstack border-indigo-600 hover:bg-indigo-600">
                            <SiAdobephotoshop className="mr-2"/>
                            <p>Adobe Ps</p>
                        </li>
                        <li className="btn-techstack border-indigo-600 hover:bg-indigo-600">
                            <SiAdobexd className="mr-2"/>
                            <p>Adobe XD</p>
                        </li>
                        <li className="btn-techstack border-indigo-600 hover:bg-indigo-600">
                            <SiFigma className="mr-2"/>
                            <p>Figma</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};