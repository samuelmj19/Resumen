import React from 'react'
import './components.css'

function Lists({list}) {
    console.log("sad", list)
  return (
    <div className='Lists'>
        <ul className='Lists-container'>
            {list.map(item => (
                <li key={item}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Lists