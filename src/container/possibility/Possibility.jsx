import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3_possibility section_padding" id='possibility'>
      <div className="gpt3_possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className="gpt3_possibility-content">
        <h4>Request early Access to Get Started</h4>
        <h1 className='gradient__text'>The Possibilities are beyond your Imagination</h1>
        <p>
          Yet only for travelling assistance indulgence umplessing Not thoght all exercise blessing.
          Indulgence way everything joy alteration biostercus the attatchment.
          Party we years to order allow asked of.
        </p>
        <h4>Request early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility