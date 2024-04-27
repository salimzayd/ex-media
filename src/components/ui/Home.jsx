import React, { useEffect } from 'react'
import "../styles/Home.css"
import ai from "../images/ai.jpg"
import newone from "../images/newone.jpg"
import studio from "../images/studio.jpg"
import { FaWhatsappSquare } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

useEffect(() =>{
    Aos.init();
})
 
  return (
    <>
        <div class="container" >
            
  

  <div className='scndpd' data-aos="fade-up-left" style={{marginLeft:"400px"}}>
    <h1>WHO WE ARE </h1>
    </div>

    <div className='scndcd' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" >
    <h2 style={{color:"gold"}}>EXMEDIA</h2>
        <h4 style={{color:"black", fontFamily:"serif"}}>Since 2006, Exmedia has been a trailblazing Advertisement agency, driving brand success through innovation, 
        creativity, and strategic excellence. With an illustrious history, we've honed our craft to deliver impactful 
        campaigns that transcend conventional boundaries. From dynamic visuals to compelling narratives, 
        our diverse expertise in advertising, design, and branding has fueled the growth of numerous clients. 
        We're not just an agency; we're your partners in shaping brand legacies. With a deep understanding of market dynamics, 
        consumer behavior, and emerging trends, Exmedia is your compass to navigate the ever-evolving advertising landscape, 
        ensuring your brand remains at the forefront of industry innovation.</h4>
    </div>

    <div className='scndcd2' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
        <h4 style={{color:"black", fontFamily:"serif", marginTop:'20px'}}>Based on our strategy work, we create distinctive brand Your Ultimate Advertisement Company, where innovation meets creativity to redefine your brand's journey. Our agency stands as a pillar of excellence, providing a comprehensive suite of services including Studio, Graphics, and Branding. Step into our cutting-edge studio, a hub of ingenuity where ideas take shape. From brainstorming sessions to concept realization, our team collaborates to bring your vision to life. Our studio is the birthplace of dynamic campaigns that captivate and resonate.</h4>
    </div>

    <div className='wtsp'>
      <h4 className='wttxt'>Chat with us</h4>
      <a href='https://www.whatsapp.com/'><FaWhatsappSquare  className='iconwt'/></a>
      
    
    </div>

    <div className='hm_imgs' >
        <img src={ai} alt='ai' data-aos="fade-right" />
        <img src={studio} alt='studio' data-aos="fade-up"/>
        <img  src={newone} alt='cam' data-aos="fade-left"/>
    </div>


</div>  
    
    </>
  )
}

export default Home