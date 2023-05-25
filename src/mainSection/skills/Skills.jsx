import React from 'react'
import Lists from '../../components/Lists'

function Skills() {
  let list = [
    "JavaScript",
    "React",
    "Next.JS",
    "JavaScript",
    "React",
    "Next.JS",
    "JavaScript",
    "React",
    "Next.JS",
  ]
  return (
    <div className='Skills sectionPage' id='SKILLS'>
      <h2 className="section-title">Skills</h2>
      <Lists list={list}/>
    </div>
  )
}

export default Skills