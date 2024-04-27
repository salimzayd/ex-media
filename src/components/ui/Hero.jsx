import React from 'react';
import '../styles/Hero.css' // Import your CSS file

function Hero() {
  return (
    <div className="App" style={{backgroundColor:"white"}}>
      

      <section id="hero">
        <div className="container">
          <h2>Welcome to EXMEDIA</h2>
          <p>Your trusted partner in marketing solutions</p>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <h1>Our Services</h1>
        <h2>Studio</h2>
        <p>PRODUCT PHOTOGRAPHY<br />
        VFX EFFECT<br/> 
        CHROMA EFFECT <br />
        MODEL PHOTOGRAPHY<br/>
        VIDEO CAPTURING<br />
        HIGH-QUALITY PHOTOGRAPHS & VIDEOS<br />
        DIGITAL AND DOLBY EFFECTS<br />
        VIDEO EDITING<br />
        VIDEO MIXING<br />
        SOUND EFFECT<br />
        VFX EFFECT<br/>
        CHROMA EFFECT</p>
          
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 Agency Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Hero;
