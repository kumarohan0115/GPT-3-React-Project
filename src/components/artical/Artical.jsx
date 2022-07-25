import React from 'react'
import './artical.css'
const Artical = ({imageUrl, date, title}) => {
  return (
    <div className='gpt3_blog-container_artical'>
      <div className="gpt3_blog-container_artical-image">
        <img src={imageUrl} alt="blog" />
      </div>
      <div className="gpt3_blog-container_artical-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Artical</p>
      </div>
    </div>
  )
}

export default Artical