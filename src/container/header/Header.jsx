import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id='home'>
      <div className="gpt3__header-content">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, eveniet.
        </p>
        <h1 className='gradient__text'> Let's Build Something Amazing With GPT3 OpenAi</h1>
        <div className="gpt3__header-content__input">

          <input type="email" name="Email" id="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>      
        <div className="gpt3__header-content__people">
          <img src={people} alt="" />
          <p>1600+ people Request access to visit in 24hrs</p>
        </div>
      </div>
        <div className="gpt3__header_image">
          <img src={ai} alt="" />
        </div>
    </div>
  )
}

export default Header