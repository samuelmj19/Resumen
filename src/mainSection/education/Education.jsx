import React from 'react'
import ExperienceArticle from '../experience/ExperienceArticle'

const Education = () => {
  return (
    <div className='Education sectionPage' id='EDUCATION'>
        <h2 className='section-title'>EDUCATION</h2>
        <ExperienceArticle 
            title={'UNIVERSITY OF COLORADO BOULDER'}
            subTitle={'BACHELOR OF SCIENCE'}
            description={'Computer Science - Web Development Track'}
            date={'August 2006 - May 2010'}
        />
        <ExperienceArticle 
            title={'UNIVERSITY OF COLORADO BOULDER'}
            subTitle={'BACHELOR OF SCIENCE'}
            date={'August 2006 - May 2010'}
        />
    </div>
  )
}

export default Education