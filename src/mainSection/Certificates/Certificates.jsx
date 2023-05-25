import React from 'react'
import Lists from '../../components/Lists'

function Certificates() {
    const certificateList = [
        "Curso definitivo de HTML y CSS",
        "Curso Profesional de JavaScript",
        "Curso Profesional de JavaScript",
        "Curso Profesional de JavaScript",
        "Curso Profesional de JavaScript",
        "Curso Profesional de JavaScript",
        "Curso Profesional de JavaScript",
        "Curso Profesional de JavaScript",
        "Curso Profesional de JavaScript",
        "Curso Profesional de JavaScript",
        "Curso Profesional de JavaScript",
    ]
  return (
    <div>
        <div className='Skills sectionPage' id='CERTIFICATES'>
            <h2 className="section-title">Certificates</h2>
            <Lists list={certificateList}/>
        </div>
    </div>
  )
}

export default Certificates