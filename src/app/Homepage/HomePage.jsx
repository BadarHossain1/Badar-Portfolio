import React from 'react'
import Banner from './Banner/Banner'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Education from './Education/Education'
import ContactMe from './ContactMe/ContactMe'

export default function HomePage() {
  return (
    <div>
        <Banner></Banner>
        <Skills></Skills>
        <Projects></Projects>
        <Education></Education>
        <ContactMe></ContactMe>
    </div>
  )
}
