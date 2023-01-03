import React from 'react'
import About from './about/About'
import Certificates from './Certificates/Certificates'
import Education from './education/Education'
import Experience from './experience/Experience'
import Skills from './skills/Skills'

const MainSection = () => {
  return (
    <div className='MainSection'>
        <About/>
        <Experience/>
        <Education/>
        <Skills/>
        <Certificates/>
    </div>
  )
}

export default MainSection