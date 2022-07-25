import React from 'react'
import './footer.css'
import gpt3_logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt3_footer section__padding'>
      <div className="gpt3_footer-heading">
        <h1 className='gradient__text'>Do you want step into future before others.</h1>
      </div>

      <div className="gpt3_footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3_footer-link">
        <div className="gpt3_footer-link_logo">
          <img src={gpt3_logo} alt="logo" />
          <p>Crechterwoord k12 182 DK Alknjkcb, All rights Reserved.</p>
        </div>

        <div className="gpt3_footer-links-div">
          <h4>Linkes</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3_footer-links-div">
          <h4>Company</h4>
          <p>Term & condition</p>
          <p>Contact</p>
        </div>
        <div className="gpt3_footer-links-div">
          <h4>Get in Touch</h4>
          <p>Crechterwoord k12 182 DK Alknjkcb</p>
          <p>887-654321</p>
          <p>inof@payme.net</p>
        </div>
      </div> 

        <div className="gpt3_footer-copyright">
          <p>© 2022 GPT-3 All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer