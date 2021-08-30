import React from "react";

export const Roadmap = () => {
    return (
        <>
            <div id='timeline' className="pt-4 pb-16 mt-24 align-middle justify-center max-w-2xl mx-auto bg-gray-50 rounded-xl shadow-md items-center">
            <h1 className='my-6 align-middle font-abel subpixel-antialiased text-2xl text-center font-bold'>CAREER_TIMELINE</h1>
                <div className="w-auto align-middle justify-center items-center">
                    <div className="flex flex-col md:grid grid-cols-5 pr-10 text-gray-50">
                        <div className="flex md:contents">
                        <div className="col-start-1 col-end-2 mr-10 md:ml-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-700 shadow text-center">
                            <i className="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div className="max-w-xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none bg-gray-700 col-start-2 col-end-6 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 className="font-abel font-semibold text-2xl mb-1">Hewlett Packard Enterprise</h3>
                            <p className="font-abel leading-tight text-justify w-full text-lg">
                            Junior Sales Compensation Analyst
                            </p>
                        </div>
                        </div>

                        <div className="flex md:contents">
                        <div className="col-start-1 col-end-2 mr-10 md:ml-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-700 shadow text-center">
                            <i className="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div className="max-w-xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none bg-gray-700 col-start-2 col-end-6 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 className="font-abel font-semibold subpixel text-2xl mb-1">Piwik PRO</h3>
                            <p className="font-abel leading-tight text-justify text-lg">
                            Technical Support Engineer
                            </p>
                        </div>
                        </div>

                        <div className="flex md:contents">
                        <div className="col-start-1 col-end-2 mr-10 md:ml-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                            </div>
                            <div className="animate-ping w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                            <i className="fas fa-times-circle text-white"></i>
                            </div>
                        </div>
                        <div className="max-w-xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none bg-green-500 col-start-2 col-end-6 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 className="font-abel font-semibold text-2xl mb-1 text-gray-50">Ringier Axel Springer Polska</h3>
                            <p className="font-abel leading-tight text-lg text-justify">
                            E-commerce Technical Specialist
                            </p>
                        </div>
                        </div>

                        <div className="flex md:contents">
                        <div className="col-start-1 col-end-2 mr-10 md:ml-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                            <i className="fas fa-exclamation-circle text-gray-400"></i>
                            </div>
                        </div>
                        <div className="max-w-xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none bg-gray-300 col-start-2 col-end-6 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 className="font-abel font-semibold text-xl mb-1 text-gray-400">To be continued...</h3>
                            <p className="leading-tight text-justify">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};