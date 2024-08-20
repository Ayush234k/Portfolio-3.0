import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './Banner.css';
import Navbar from '../Components/Navbar'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

const Banner = () => {

  return (
    <>
    <Navbar/>
    <div className="Contain-1">
        <div class="content">
            <div class="name">
                <div class="text-box">
                    <div class="first">I'M</div>
                    <div class="second">
                        <h3>AYUSH</h3>
                        </div>
                    <div class="third">BUILDING DIGITAL PRODUCTS, BRANDS & EXPERIENCE</div> 
                </div>
                <div class="contact">
                    <div class="one"><a href= "#">Explore My Portfolio</a></div>
                    <div class="two"><a href= "https://www.linkedin.com/in/ayush-singh-6a3a37253/" target="_blank">Connect With Me</a></div>
                    <div class="three">You Can Explore More About My Portfolio And Personal Life Experience Here </div>
                </div>
            </div>
        <div class="icons">
            <a href="https://www.instagram.com/_ayushh_singh/" target="_blank"><InstagramIcon id='banner-icons' sx={{fontSize:45, color:"white"}}
            /></a>
            <a href="https://wa.me/7979887495" target="_blank"><WhatsAppIcon id='banner-icons' sx={{fontSize:45, color:"white"}}/></a>
            <a href="https://github.com/Ayush234k" target="_blank"><GitHubIcon id='banner-icons' sx={{fontSize:45, color:"white"}}/></a>
        </div>
    </div>
    </div>
    </>
  );
};

export default Banner;
