"use client"
import Link from 'next/link'
import React from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { Typewriter } from 'react-simple-typewriter'
import { FaArrowDown } from "react-icons/fa";



export default function Banner() {
    const bannerStyle = {
        backgroundImage: "url('https://i.ibb.co/3c6cbgp/cool-background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',


    };

    return (
        <div className=' min-h-screen text-white ' >


            <div className='mt-[100px] max-w-[1100px] mx-auto'>
                <div className='flex flex-col lg:flex-row  '>
                    <div className='w-full  lg:w-1/2  flex justify-center items-center'>
                        <div className="avatar">
                            <div className="ring-offset-8  rounded-full border-8 shadow-lg  shadow-[#f5df4e]">
                                <Image src='https://i.ibb.co/Gk9v1M0/proff-pic.jpg' alt='Badar' width={300} height={300}></Image>
                            </div>
                        </div>
                    </div>

                    {/* right side */}

                    <div className='mt-10 lg:mt-8 w-full lg:w-1/2 px-5 text-center lg:text-start '>
                        <p className='uppercase text-4xl  font-semibold text-[#f5df4e]'>HI, I AM BADAR HOSSAIN</p>
                        <p className='uppercase text-4xl lg:text-4xl font-extrabold mt-3 shadow-lg pl-5 shadow-[#f5df4e]'>-{' '}
                            <span style={{ color: 'white', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Front End Developer', 'React Developer']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    
                                />
                            </span>
                        </p>
                        <p data-aos="fade-up" className='mt-6 font-normal font-mono'>I am a Front-end developer focused on crafting and building clean & user-friendly websites. I am passionate about building excellent software that is of use to everyone around me and for the organization I work for.

                        </p>
                        {/* <div>
                            <ul className="flex gap-2 mt-4">
                                <li ><a href='https://github.com/BadarHossain1' target='blank'><FaGithub className='text-[#f5df4e] w-[30px] h-[30px]' /></a></li>
                                <li><a href="https://www.linkedin.com/in/badar-hossain1" target='blank'><FaLinkedin className='text-[#f5df4e] w-[30px] h-[30px]' /></a></li>
                                {/* <li className='flex items-center gap-2 font-bold '><MdEmail className='text-[#f5df4e] w-[30px] h-[30px]' />badar12041@gmail.com</li> 
                                </ul>
                                </div> */}





                        {/* Base */}

                        <a data-aos="fade-up" className="group relative inline-block focus:outline-none focus:ring  mt-5" href="https://drive.google.com/file/d/1An1OVcvYotTx_X_nZT_TbMBb_N2xUaNe/view?usp=sharing" target='blank'>
                            <span
                                className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                            ></span>

                            <span
                                className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75"
                            >
                                <span className='text-black'>Resume</span>
                            </span>
                        </a>

                        <a
                            className="group relative inline-flex items-center overflow-hidden rounded border border-current px-10 py-[12px] text-[#f5df4e] focus:outline-none focus:ring active:text-[#f5df4e] ml-6 scroll-smooth"
                            href="#contact"
                        >
                            <span className="absolute -start-full transition-all group-hover:start-4">
                                <FaArrowDown className='size-5 rtl:rotate-180' />
                            </span>

                            <span className="text-sm font-medium transition-all group-hover:ms-4"> Contact Me </span>
                        </a>







                    </div>
                </div>
            </div>
        </div >
    )
}
