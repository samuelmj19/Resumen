import React from 'react'
import MainSection from '../mainSection/MainSection'
import SideBar from '../components/SideBar'
import './layout.css'

const Layout = () => {
  return (
    <div className='Layout'>
        <SideBar/>
        <MainSection/>
    </div>
  )
}

export default Layout