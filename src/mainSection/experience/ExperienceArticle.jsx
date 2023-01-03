import React from 'react'

const ExperienceArticle = ({title, subTitle, description, date}) => {
  return (
    <div className='ExperienceArticle'>
      <div>
      <h3 className='Experience-title'>{title}</h3>
      <h5 className='Experience-institution'>{subTitle} </h5>
      <p className='Experience-description'>
        {description}
        </p>  
      </div>
      <p className='Experience-date'>{date} </p>
    </div>
  )
}

export default ExperienceArticle