import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

export default function ContactMe() {
    return (
        <div>
            <section id='contact' class="bg-[#f5df4e]  mt-[100px]">
                <div class="container px-6 py-12  max-w-[1170px] mx-auto ">
                    <div class="lg:flex lg:items-center lg:-mx-6">
                        <div class="lg:w-1/2 lg:mx-6">
                            <h1 class="text-2xl font-semibold text-black capitalize dark:text-white lg:text-4xl">
                                Lets get in touch!
                            </h1>

                            <div class="mt-6 space-y-8 md:mt-8">
                                <p className='text-black '>I enjoy discussing new projects and challenges. Please <br /> share as much info, as possible so we can get the most out <br /> of our first catch-up.</p>

                                <p class="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-black dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>

                                    <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">+8801581865176</span>
                                </p>

                                <p class="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-black dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>

                                    <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">badar12041@gmail.com</span>
                                </p>
                            </div>

                            <div class="mt-6 w-80 md:mt-8">
                                <h3 class="text-gray-600 dark:text-gray-300 ">Follow Me</h3>

                                <div class="flex mt-4 -mx-1.5 ">

                                    <ul className="flex gap-4">
                                        <li ><a href='https://github.com/BadarHossain1' target='blank'><FaGithub className='text-black w-[30px] h-[30px]' /></a></li>
                                        <li><a href="https://www.linkedin.com/in/badar-hossain1" target='blank'><FaLinkedin className='text-black w-[30px] h-[30px]' /></a></li>
                                       


                                    </ul>






                                </div>
                            </div>
                        </div>

                        <div class="mt-8 lg:w-1/2 lg:mx-6">
                            <div
                                class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">


                                <form class="mt-6">
                                    <div class="flex-1">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Full Name</label>
                                        <input type="text" placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div class="flex-1 mt-6">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Email address</label>
                                        <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div class="w-full mt-6">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">How can I help you?</label>
                                        <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                    </div>

                                    <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#f5df4e] rounded-md btn btn-outline    focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        get in touch
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
