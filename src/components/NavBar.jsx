import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul className='NavBar' >
        <li><a href="#ABOUT">ABOUT</a></li>
        <li><a href="#EXPERIENCE">EXPERIENCE</a></li>
        <li><a href="#EDUCATION">EDUCATION</a></li>
        <li><a href="#SKILLS">SKILLS</a></li>
        <li><a href="#CERTIFICATES">CERTIFICATES</a></li>
    </ul>
  )
}

export default NavBar