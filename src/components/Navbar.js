import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import navbar from "./navbar.css"

function Navbar() {
    const[toggle, setToggle] = useState(false)
  return (
    <nav className='app_navbar'>
        <div className='app_navbar-logo'>
            <img src='https://raw.githubusercontent.com/adrianhajdin/project_modern_ui_ux_restaurant/main/starter_src/assets/gericht.png' alt='logo' />
        </div>
        <ul className='app_navbar-links'>
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#about">About</a></li>
            <li className="p__opensans"><a href="#menu">Menu</a></li>
            <li className="p__opensans"><a href="#awards">Awards</a></li>
            <li className="p__opensans"><a href="#contact">Contact</a></li>
        </ul>
        <div className="app_navbar-login">
            <a href="#login" className="p__opensans">Log In / Registration</a>
            <div />
            <a href="/" className="p__opensans">Book Table</a>
        </div>
        <div className="app__navbar-smallscreen">
            {toggle===false && (<GiHamburgerMenu color="#fff" className='hamburger' fontSize={27} onClick={() => setToggle(true)} />)}  
            {toggle && (
            <div className='app_navbar-smalscreen'>
                <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggle(false)} />
                <ul className='app_navbar-smalscreen-link'>
                    <li><a href="#home" onClick={() => setToggle(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setToggle(false)}>About</a></li>
                    <li><a href="#menu" onClick={() => setToggle(false)}>Menu</a></li>
                    <li><a href="#awards" onClick={() => setToggle(false)}>Awards</a></li>
                    <li><a href="#contact" onClick={() => setToggle(false)}>Contact</a></li>
                 </ul>
            </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar