import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TextBlock from './ParallaxText';
import Navbar from '../Components/Navbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Parallax.css';

const parallax = () => {
  
  return (
    <>
    <Parallax pages={2} style={{ top: '0', left: '0' }} className='animation'>
      <ParallaxLayer offset={0} speed={0.45} id='Maskgroup'>
            <Navbar/>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.9}>
            <div className='animation_layer parallax' id='Maskgroup-1'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.7}>
            <div className='animation_layer parallax' id='Maskgroup-2'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.3}>
      <div class="name" id='Maskgroup-3'>
                <div class="text-box">
                    <div class="first">I'M</div>
                    <div class="second"><h3>AYUSH</h3></div>
                    <div class="third">BUILDING DIGITAL PRODUCTS, BRANDS & EXPERIENCE</div> 
                </div>
                <div class="contact">
                    <div class="one"><a href= "#">Explore My Portfolio</a></div>
                    <div class="two"><a href= "https://www.linkedin.com/in/ayush-singh-6a3a37253/" target="_blank">Connect With Me</a></div>
                    <div class="three">You Can Explore More About My Portfolio And Personal Life Experience Here </div>
                </div>
            </div>
            {/* <div className='animation_layer parallax' id='Maskgroup-3'></div> */}
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.7}>
            <div className='animation_layer parallax' id='Maskgroup-4'></div>
      </ParallaxLayer> 
      <ParallaxLayer offset={1} speed={0.60}>
            <TextBlock/>
      </ParallaxLayer>
    </Parallax>
    </>
  );
};

export default parallax;