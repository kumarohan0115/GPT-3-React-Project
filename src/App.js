import React from 'react'

import {Footer, Blog, Possibility,Features, GPT,Header} from './container';
import {Brand, CTA, Navbar} from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className="gradient__bg">
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <GPT/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App