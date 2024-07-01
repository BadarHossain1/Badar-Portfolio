"use client"
import React from 'react'
import Banner from './Banner/Banner'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Education from './Education/Education'
import ContactMe from './ContactMe/ContactMe'
import Footer from './Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

export default function HomePage() {
  return (
    <div>
        <Banner></Banner>
        <Skills></Skills>
        <Projects></Projects>
        <Education></Education>
        <ContactMe></ContactMe>
        <Footer></Footer>
    </div>
  )
}
