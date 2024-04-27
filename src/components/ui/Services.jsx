import React, { useEffect } from 'react'
import {Button,Card,Col,Row} from 'react-bootstrap'
import new1 from "../images/new1.jpg"
import new2 from "../images/new2.jpg"
import new3 from "../images/new3.jpg"
import { MdCamera } from "react-icons/md";
import { TbPencilStar } from "react-icons/tb";
import { TbMessageChatbot } from "react-icons/tb";
import '../styles/Services.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = () => {

    useEffect(() =>{
        Aos.init()
    })
  return (
    <>
    <div className='section'>
        <div className='title' data-aos = "fade-left">
            <h1>Our Services</h1>
        </div>

        <div className='services' >
            <div className='card' data-aos="zoom-in-up" >
                <div className='icon'>
                <MdCamera />
                </div>
                <h2>Studio</h2>
                <img  className="service_img" src= {new1}/>
                <p>VISUALIZE CONCEPTS & TRANSFORM THE BUSINESS TO SUCCESS </p>
                <ul className='list'>
                    <li>Model Photography</li>
                    <li>Video Editing</li>
                    <li>VFX Effect</li>
                    <li>Chroma Effect</li>
                    <li>Video Mixing</li>
                </ul>
                    <a href='' className='button'>Read more</a>
                </div>


                <div className='card' data-aos="zoom-in-up">
                <div className='icon'>
                <TbPencilStar />
                </div>
                <h2>Graphics</h2>
                <img className='service_img' src={new2}/>
                <img />
                <p>GRAPHICS CAN EXPLORE MORE THAN WORDS TO CUSTOMER</p>
                <ul className='list'>
                    <li>Illustartion</li>
                    <li>Logo design</li>
                    <li>Infographic</li>
                    <li>Signage</li>
                    <li>Flyers</li>
                </ul>
                    <a href='' className='button'>Read more</a>
                </div>

                <div className='card' data-aos="zoom-in-up">
                <div className='icon'>
                <TbMessageChatbot />
                </div>
                <h2>Branding</h2>
                <img className='service_img' src={new3}/>
                <img />
                <p>WITHIN A SECOND A VALUABLE CUSTOMER WILL TAKE A DECISION ABOUT BRAND</p>
                <ul className='list'>
                    <li>Define your brand</li>
                    <li>Content marketin</li>
                    <li>Monitor and adapt</li>
                    <li>Talent development</li>
                    <li>Integrated Creativity</li>
                </ul>
                    <a href='' className='button'>Read more</a>
                </div>
        </div>
    </div>
    </>
  )
}

export default Services;