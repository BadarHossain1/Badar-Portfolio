import Image from 'next/image'
import React from 'react'

export default function Projects() {
    return (
        <div className='mt-16 text-white max-w-[1170px] mx-auto'>
            <div className='text-center flex justify-center mb-10'>
                <p className='text-5xl text-[#f5df4e] w-[250px] rounded-lg font-extrabold shadow-xl uppercase underline'> <span className='text-white '>My </span>Projects</p>

            </div>

            {/* cards */}

            <div className='mt-2'>
                <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 shadow-lg shadow-[#f5df4e] mb-8 bg-[#008080]">

                    <iframe
                        src="https://contestify.netlify.app/"
                        title="Contestify"
                        className=" object-cover w-full h-64 rounded sm:h-96 lg:col-span-8 "
                        sandbox="allow-scripts allow-same-origin"
                    ></iframe>

                    <div className="p-6 space-y-2 lg:col-span-3">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Contestify</h3>
                        <span className="text-xs dark:text-gray-600">A Contest Creation Platform</span>
                        <p>Contestify is a dynamic contest creation platform built using the MERN stack. It features comprehensive admin and contest creator dashboards for seamless management and customization, enabling users to easily create, manage, and participate in various contests.</p>
                        <a
                            className="group relative inline-block overflow-hidden border border-[#f5df4e] px-4 py-2 focus:outline-none focus:ring mr-4 rounded-lg"
                            href="https://contestify.netlify.app/" target='blank'
                        >
                            <span
                                className="absolute inset-y-0 left-0 w-[2px] bg-[#f5df4e] transition-all group-hover:w-full group-active:bg-[#f5df4e] "
                            ></span>

                            <span
                                className="relative text-sm font-medium text-[#f5df4e] transition-colors group-hover:text-white"
                            >
                                Live Link
                            </span>
                        </a>
                        <a
                            className="group relative inline-block overflow-hidden border border-[#f5df4e] px-4 py-2 focus:outline-none focus:ring  rounded-lg"
                            href="https://contestify.netlify.app/" target='blank'
                        >
                            <span
                                className="absolute inset-y-0 left-0 w-[2px] bg-[#f5df4e] transition-all group-hover:w-full group-active:bg-[#f5df4e] "
                            ></span>

                            <span
                                className="relative text-sm font-medium text-[#f5df4e] transition-colors group-hover:text-white"
                            >
                                Source Code
                            </span>
                        </a>
                    </div>
                </div>
                <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 shadow-lg shadow-[#f5df4e] mb-8 bg-[#008080]">

                    <iframe
                        src="https://prod-sphere.netlify.app/"
                        title="ProdSphere"
                        className=" object-cover w-full h-64 rounded sm:h-96 lg:col-span-8 "
                        sandbox="allow-scripts allow-same-origin"
                    ></iframe>

                    <div className="p-6 space-y-2 lg:col-span-3 ">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">ProdSphere</h3>
                        <span className="text-lg ">An Alternative Product Information System</span>
                        <p className='text-base'>ProdSphere is an innovative platform designed to bridge the gap between product queries and recommendations.  Users can post queries about various products and receive recommendations from other users.
                        </p>
                        <a
                            className="group relative inline-block overflow-hidden border border-[#f5df4e] px-4 py-2 focus:outline-none focus:ring mr-4 rounded-lg"
                            href="https://prod-sphere.netlify.app/" target='blank'
                        >
                            <span
                                className="absolute inset-y-0 left-0 w-[2px] bg-[#f5df4e] transition-all group-hover:w-full group-active:bg-[#f5df4e] "
                            ></span>

                            <span
                                className="relative text-sm font-medium text-[#f5df4e] transition-colors group-hover:text-white"
                            >
                                Live Link
                            </span>
                        </a>
                        <a
                            className="group relative inline-block overflow-hidden border border-[#f5df4e] px-4 py-2 focus:outline-none focus:ring  rounded-lg"
                            href="https://prod-sphere.netlify.app/" target='blank'
                        >
                            <span
                                className="absolute inset-y-0 left-0 w-[2px] bg-[#f5df4e] transition-all group-hover:w-full group-active:bg-[#f5df4e] "
                            ></span>

                            <span
                                className="relative text-sm font-medium text-[#f5df4e] transition-colors group-hover:text-white"
                            >
                                Source Code
                            </span>
                        </a>




                    </div>
                </div>
                <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 shadow-lg shadow-[#f5df4e] mb-8 bg-[#008080]">

                    <iframe
                        src="https://tourease-b114f.web.app/"
                        title="TourEase"
                        className=" object-cover w-full h-64 rounded sm:h-96 lg:col-span-8 "
                        sandbox="allow-scripts allow-same-origin"
                    ></iframe>

                    <div className="p-6 space-y-2 lg:col-span-3">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">TourEase</h3>
                        <span className="text-xs dark:text-gray-600">A Tourist spot Platform</span>
                        <p>A Tourism based website to navigate people choose their next holiday spot in Southeast Asia.
                            Used React JS and React Router to build the website structure and add functionalities. MongoDB is used to store the data and retrieve data like Spots and Countries.</p>
                        <a
                            className="group relative inline-block overflow-hidden border border-[#f5df4e] px-4 py-2 focus:outline-none focus:ring mr-4 rounded-lg"
                            href="https://tourease-b114f.web.app/" target='blank'
                        >
                            <span
                                className="absolute inset-y-0 left-0 w-[2px] bg-[#f5df4e] transition-all group-hover:w-full group-active:bg-[#f5df4e] "
                            ></span>

                            <span
                                className="relative text-sm font-medium text-[#f5df4e] transition-colors group-hover:text-white"
                            >
                                Live Link
                            </span>
                        </a>
                        <a
                            className="group relative inline-block overflow-hidden border border-[#f5df4e] px-4 py-2 focus:outline-none focus:ring  rounded-lg"
                            href="https://tourease-b114f.web.app/" target='blank'
                        >
                            <span
                                className="absolute inset-y-0 left-0 w-[2px] bg-[#f5df4e] transition-all group-hover:w-full group-active:bg-[#f5df4e] "
                            ></span>

                            <span
                                className="relative text-sm font-medium text-[#f5df4e] transition-colors group-hover:text-white"
                            >
                                Source Code
                            </span>
                        </a>
                    </div>
                </div>
                <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 shadow-lg shadow-[#f5df4e] mb-8 bg-[#008080]">

                    <iframe
                        src="https://royalty-estate-d7d9e.web.app/"
                        title="TourEase"
                        className=" object-cover w-full h-64 rounded sm:h-96 lg:col-span-8 "
                        sandbox="allow-scripts allow-same-origin"
                    ></iframe>

                    <div className="p-6 space-y-2 lg:col-span-3">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Royalty Estate</h3>
                        <span className="text-xs dark:text-gray-600">A Real Estate Platform</span>
                        <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                        <a
                            className="group relative inline-block overflow-hidden border border-[#f5df4e] px-4 py-2 focus:outline-none focus:ring mr-4 rounded-lg"
                            href="https://royalty-estate-d7d9e.web.app/" target='blank'
                        >
                            <span
                                className="absolute inset-y-0 left-0 w-[2px] bg-[#f5df4e] transition-all group-hover:w-full group-active:bg-[#f5df4e] "
                            ></span>

                            <span
                                className="relative text-sm font-medium text-[#f5df4e] transition-colors group-hover:text-white"
                            >
                                Live Link
                            </span>
                        </a>
                        <a
                            className="group relative inline-block overflow-hidden border border-[#f5df4e] px-4 py-2 focus:outline-none focus:ring  rounded-lg"
                            href="https://royalty-estate-d7d9e.web.app/" target='blank'
                        >
                            <span
                                className="absolute inset-y-0 left-0 w-[2px] bg-[#f5df4e] transition-all group-hover:w-full group-active:bg-[#f5df4e] "
                            ></span>

                            <span
                                className="relative text-sm font-medium text-[#f5df4e] transition-colors group-hover:text-white"
                            >
                                Source Code
                            </span>
                        </a>
                    </div>
                </div>


            </div>


        </div>
    )
}
