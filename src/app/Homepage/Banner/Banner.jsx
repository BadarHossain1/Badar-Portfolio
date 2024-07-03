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
        backgroundImage: `url('/background.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',


    };

    const Navlink = <>

        <li className='hover:bg-[#f5df4e] hover:text-white'><a href="#about">About</a></li>
        <li className='hover:bg-[#f5df4e] hover:text-white'><a href="#skills">Skills</a></li>
        <li className='hover:bg-[#f5df4e] hover:text-white'><a href="#projects">Projects</a></li>
        <li className='hover:bg-[#f5df4e] hover:text-white'><a href="#education">Education</a></li>
        <li className='hover:bg-[#f5df4e] hover:text-white'><a href="#contact">Hire Me</a></li>




    </>

    return (
        <div id='banner' className=' min-h-screen text-white ' >
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {Navlink}
                        </ul>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {Navlink}
                        </ul>
                    </div>
                </div>
                <a className="btn btn-ghost text-3xl font-serif shadow-[#f5df4e] bg-transparent shadow-xl rounded-lg">Badar</a>
                <div className="navbar-end">
                    <ul className="flex gap-2 mt-4">
                        <li ><a href='https://github.com/BadarHossain1' target='blank'><FaGithub className='text-[#f5df4e] w-[30px] h-[30px] hover:scale-110' /></a></li>
                        <li><a href="https://www.linkedin.com/in/badar-hossain1" target='blank'><FaLinkedin className='text-[#f5df4e] w-[30px] h-[30px] hover:scale-110' /></a></li>
                        {/* <li className='flex items-center gap-2 font-bold '><MdEmail className='text-[#f5df4e] w-[30px] h-[30px]' />badar12041@gmail.com</li> */}
                    </ul>
                </div>
            </div>



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
                        <p className='uppercase text-4xl lg:text-4xl font-extrabold mt-3 shadow-lg pl-5 shadow-[#f5df4e]'>-Front End Developer

                        </p>
                        <p data-aos="fade-up" className='mt-6 font-normal font-mono text-white'>I am a Front-end developer focused on crafting and building clean & user-friendly websites. I am passionate about building excellent software that is of use to everyone around me and for the organization I work for.

                        </p>
                        {/* <div>
                            <ul className="flex gap-2 mt-4">
                                <li ><a href='https://github.com/BadarHossain1' target='blank'><FaGithub className='text-[#f5df4e] w-[30px] h-[30px]' /></a></li>
                                <li><a href="https://www.linkedin.com/in/badar-hossain1" target='blank'><FaLinkedin className='text-[#f5df4e] w-[30px] h-[30px]' /></a></li>
                                {/* <li className='flex items-center gap-2 font-bold '><MdEmail className='text-[#f5df4e] w-[30px] h-[30px]' />badar12041@gmail.com</li> 
                                </ul>
                                </div> */}





                        {/* Base */}


                        <div className='pb-8'>
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
                                className="group relative inline-flex items-center overflow-hidden rounded  border-current px-10 py-[12px] text-[#f5df4e] font-semibold border lg:text-[#f5df4e] focus:outline-none focus:ring active:text-[#f5df4e] ml-4 scroll-smooth"
                                href="#contact"
                            >
                                <span className="absolute -start-full transition-all group-hover:start-4">
                                    <FaArrowDown className='size-5 rtl:rotate-180' />
                                </span>

                                <span className="text-sm font-medium transition-all group-hover:ms-4 "> Contact Me </span>
                            </a>
                        </div>








                    </div>
                </div>
            </div>
        </div >
    )
}
