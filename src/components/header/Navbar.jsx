import React, { useEffect } from 'react';
import './Navbar.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Navbar = () => {

    useEffect(() =>{
        Aos.init()
    })
  return (
    <nav className="navbar">
      <div className="container1" data-aos = "fade-down">
        <a href="/" className="logo" data-text="EXMEDIA">EXMEDIA</a>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
