import React from 'react'
import './blog.css'
import Artical from '../../components/artical/Artical'
import {blog01,blog02,blog03,blog04,blog05} from './import.js'

const Blog = () => {
  return (
    <div className='gpt3_blog section__paddinng'>
      <div className="gpt3_blog-heading">
        <h1 className='gradient__text'>A lot is happening , We are blogging about it.</h1>
      </div>
      <div className="gpt3_blog-container">
        <div className="gpt3_blog-container_groupA">
          <Artical imageUrl={blog01} date="26 July 2022" title="GPT-3 and Ai is the future. Let us explore how it is."/>
        </div>
        <div className="gpt3_blog-container_groupB">
          <Artical imageUrl={blog02} date="26 July 2022" title="GPT-3 and Ai is the future. Let us explore how it is."/>
          <Artical imageUrl={blog03} date="26 July 2022" title="GPT-3 and Ai is the future. Let us explore how it is."/>
          <Artical imageUrl={blog04} date="26 July 2022" title="GPT-3 and Ai is the future. Let us explore how it is."/>
          <Artical imageUrl={blog05} date="26 July 2022" title="GPT-3 and Ai is the future. Let us explore how it is."/>
        </div>
      </div>
    </div>
  )
}

export default Blog