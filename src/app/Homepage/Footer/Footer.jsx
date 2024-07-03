import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
    const bannerStyle = {
        backgroundImage: `url('/background.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',


    };
    return (
        <div>
            <footer className="w-full py-14" style={bannerStyle}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <p className=' text-4xl font-mono font-extrabold text-center'><span className='text-[#f5df4e]'>Badar</span> Hossain</p>
                        <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
                            <li><a href="#banner" className="text-white hover:text-[#f5df4e]">Banner</a></li>
                            <li><a href="#about" className=" text-white hover:text-[#f5df4e]">About</a></li>
                            <li><a href="#skills" className=" text-white hover:text-[#f5df4e]">Skills</a></li>
                            <li><a href="#education" className=" text-white hover:text-[#f5df4e]">Education</a></li>
                            <li><a href="#contact" className=" text-white hover:text-[#f5df4e]">Contact Me</a></li>
                        </ul>
                        <div className="flex space-x-10 justify-center items-center mb-14">
                            <div>
                                <ul className="flex gap-2 mt-4">
                                    <li ><a href='https://github.com/BadarHossain1' target='blank'><FaGithub className='text-black w-[30px] h-[30px]' /></a></li>
                                    <li><a href="https://www.linkedin.com/in/badar-hossain1" target='blank'><FaLinkedin className='text-black w-[30px] h-[30px]' /></a></li>
                                    <li className='flex items-center gap-2 font-bold text-white'><MdEmail className='text-black w-[30px] h-[30px]' />badar12041@gmail.com</li>
                                </ul>
                            </div>                       </div>

                        <p className="text-lg text-white text-center block">Copyright © ${new Date().getFullYear()} - All right reserved by Badar Hossain</p>
                    </div>
                </div>
            </footer>


        </div>
    )
}
