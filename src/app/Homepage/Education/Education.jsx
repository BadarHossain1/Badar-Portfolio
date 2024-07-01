import React from 'react'

export default function Education() {
    return (
        <div>
            <section className="bg-black dark:bg-gray-100 text-gray-100 dark:text-gray-800 mt-[100px]">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#f5df4e]  before:dark:bg-[#f5df4e] ">
                                <h3 className="text-3xl font-semibold">Education and Certifications</h3>
                                
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700 before:dark:bg-gray-300">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#f5df4e]  before:dark:bg-[#f5df4e] ">
                                    <h3 className="text-xl font-semibold tracking-wide">Leading University, Sylhet </h3>
                                    <time className="text-xs tracking-wide uppercase text-gray-400 dark:text-gray-600">2022-2026</time>
                                    <p className='text-base '>Current CGPA: 3.9</p>
                                    <p className="mt-3">Bachelors In Computer Science and Engineering. </p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#f5df4e]  before:dark:bg-[#f5df4e] ">
                                    <h3 className="text-xl font-semibold tracking-wide">Complete Web Development Course</h3>
                                    <time className="text-xs tracking-wide uppercase text-gray-400 dark:text-gray-600">Jan(2024)-June(2024)</time>
                                    <p className="mt-3">I have completed a comprehensive web development course, specializing in Front-end development, gaining expertise in creating dynamic, responsive web applications.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
