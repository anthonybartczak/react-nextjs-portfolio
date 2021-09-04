import React from "react";

export const Roadmap = () => {
    return (
        <>
        <h1 id='timeline' className='mt-32 mb-4 font-abel subpixel-antialiased text-4xl text-center font-bold'>CAREER_TIMELINE</h1>
                <div className="w-auto align-middle items-center justify-center max-w-xl mx-auto">
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
                        <div className="block-timeline bg-gray-700">
                            <h3 className="font-abel font-semibold text-2xl mb-1">Hewlett Packard Enterprise</h3>
                            <p className="font-abel leading-tight w-full text-lg">
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
                        <div className="block-timeline bg-gray-700">
                            <h3 className="font-abel font-semibold subpixel text-2xl mb-1">Piwik PRO</h3>
                            <p className="font-abel leading-tight text-lg">
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
                        <div className="block-timeline bg-green-500">
                            <h3 className="font-abel font-semibold text-2xl mb-1 text-gray-50">Ringier Axel Springer Polska</h3>
                            <p className="font-abel leading-tight text-lg">
                            Technical Service Specialist (E-commerce)
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
                        <div className="block-timeline bg-gray-300">
                            <h3 className="font-abel font-semibold text-xl mb-1 text-gray-400">To be continued...</h3>
                            <p className="leading-tight">
                            </p>
                        </div>
                    </div>
            </div>
            </div>
        </>
    );
};