import React,{useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import  "../styles/About.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() =>{
    Aos.init();
})
  return (
    <>
      <div className='about-section' style={{background:'#F6F5F2',width:"100%",height:"950px"}}>
       <div className='contents' data-aos="fade-down">
       <h1 style={{display:"flex",justifyContent:"center", fontFamily:'roboto', marginBottom:"10px", textDecoration:"underline"}} data-aos = "fade-up"> ABOUT US </h1>
        <p style={{fontSize:"19px", fontFamily:"revert"}} data-aos="fade-right">Welcome to EXMEDIA, where creativity meets strategy. At EXMEDIA, we are passionate about helping businesses thrive in today's competitive market. a dedicated team of experts in studio, branding, and graphic design, we bring your brand to life and make it stand out from the crowd.
        <br/>

Our <span className='span'>Studio</span> is a hub of innovation, where ideas are born and transformed into impactful campaigns. Whether it's crafting compelling visuals or producing engaging content, our studio team works tirelessly to ensure your brand's message resonates with your audience.
<br />
<span className='span'>Branding</span> is at the core of what we do. We believe that a strong brand identity is essential for building trust and loyalty with your customers. 
Our branding specialists work closely with you to develop a unique identity that reflects your values and resonates with your target audience.
<br />
<span className='span'>Graphic design</span> is where art meets functionality. Our talented graphic designers combine creativity with technical expertise to create stunning visuals that capture attention and leave a lasting impression. From logo design to marketing collateral, we take care of all your graphic design needs.
<br />
At EXMEDIA, we don't just create campaigns; we create experiences. With a focus on creativity, innovation, and collaboration, we are committed to delivering results that exceed your expectations. Partner with us and take your brand to new heights.</p>

            <button className='btn-1'> READ MORE </button>
       </div>

       <div className='img1' data-aos = "fade-up" >
  
       </div>

       <div className='img2' data-aos = "fade-down">
        
       </div>

       <div className='img3' data-aos = "fade-left">
       
       </div>


      </div>

    </>
  )
}

export default About