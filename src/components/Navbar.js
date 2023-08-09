import "./Navbar.css"

import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'


const Navbar = () => {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    
    <div className="header">
        <Link to="/">
        <h1>Nahom..</h1>

        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Projects</Link>
            </li>
            <li>
                <Link to="/">Skills</Link>
            </li>
            <li>
                <Link to="/">contact</Link>
            </li>
        </ul>

        <div className="humburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: "#000"}}/>) : (<FaBars size={20} style={{color: "#000"}}/>)}
        
        


        </div>
    </div>
  )
}

export default Navbar