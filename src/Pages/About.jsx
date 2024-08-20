// import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import './About.css';

const About = () => {

  return (
    <div className='Contain-2'>
    <Navbar/>
    <div id="part-2">
        <div class="al">
            <div class="ab">About Me</div>
            <div class="ac">
            I'm Ayush Singh, a final-year Computer Science student at KIIT University, where I'm immersing myself in the dynamic world of technology. My passion lies in web development, where I blend creativity with functionality to bring digital experiences to life.
            <br/><br/>
            One of my greatest strengths is my ability to adapt and thrive in rapidly changing environments. Technology evolves at a breakneck pace, and I'm always eager to learn and grow alongside it. Whether it's mastering a new programming language, exploring emerging web development trends, or tackling complex coding challenges, I embrace every opportunity to expand my skill set.
            </div>
        </div>
        <div class="ar">
            <div class="pic"></div>
        </div>
    </div>
    </div>
  );
};

export default About;