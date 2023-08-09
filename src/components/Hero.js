import "./Hero.css";

import React from 'react'
import world from '../assets/bw-map.jpeg'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="worldimg" src={world} alt="world"/>
        </div>
        <div className="content">
        <h1>Hi, I am Nahom</h1>
        <p>Lorem ipsum dolor sit amet.<br/>
consectetur adipisicing elit deleniti, voluptas.</p>
        <Link to="" className="button-56" role="button"> Resume</Link>

        </div>
        {/* <div>
        <Link to="" className="btn"> Resume</Link>

        </div> */}
    </div>
  )
}

export default Hero