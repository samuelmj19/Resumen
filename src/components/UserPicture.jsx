import React from 'react'
import userImage from '../assets/userImage.jpg'

const UserPicture = () => {
  return (
    <div className='UserPicture'>
        <img src={userImage} alt="User Image" />
    </div>
  )
}

export default UserPicture