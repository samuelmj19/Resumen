import React from 'react'
import NavBar from './NavBar'
import UserPicture from './UserPicture'
import './SideBar.css'

const SideBar = () => {
  return (
    <div className='SideBar-container'>
    <div className='SideBar'>
        <UserPicture/>
        <NavBar/>
    </div>
    </div>
  )
}

export default SideBar