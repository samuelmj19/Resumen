import React from 'react'
import SocialMediaList from './SocialMediaList'
import UserInfo from './UserInfo'

const About = () => {
  return (
    <div className='About'>
        <UserInfo/>
        <div className='User-description'>
          <p>I´m a Web Developer actually in the area of Front-End using html, css, vanilla JavaScript and React.JS.
              I´m a self taught programmer who´s always looking for the best updates for my stack.</p>
        </div>
        <SocialMediaList/>
    </div>
  )
}

export default About