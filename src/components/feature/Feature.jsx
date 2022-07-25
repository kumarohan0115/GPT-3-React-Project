import React from 'react'
import './feature.css'

const Feature = ({text, title}) => {
  return (
    <div className="gpt3__feature-container__feature">
      <div className="gpt3__feature-container__feature-title">
        <div className='blank'></div>
        <h1>{title}</h1>
        <div className="gpt3__feature-container_feature-text">
          {text}
        </div>
      </div>
    </div>
  )
}

export default Feature