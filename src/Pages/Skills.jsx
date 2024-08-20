// import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar'
import './Skills.css';
import AOS from 'aos';


// document.querySelector('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click",function(e){
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behaviour : "smooth"
//         });
//     });
//   });

const Skills = () => {

    useEffect(() => {
        AOS.init({
            offset: 50,
            duration: 1000,
         });
    }, [])
 
  return (
    <div className='Contain-3'>
    <Navbar/>
    <div id="part-3">
        <div class="skill">Skills</div>
        <div class="skill-1">
            <div class="skill-1-L">
                <div class="skill-1-L-2">
                    <div class="Lang" data-aos="slide-right"><b>HTML</b></div>
                    <div class="Progress">
                        <div class="Progress-1"></div>
                    </div>
                </div>
                <div class="skill-1-L-2">
                    <div class="Lang" data-aos="slide-right"><b>JAVA SCRIPT</b></div>
                    <div class="Progress">
                        <div class="Progress-2"></div>
                    </div>
                </div>
                <div class="skill-1-L-2">
                    <div class="Lang" data-aos="slide-right"><b>NODE JS</b></div>
                    <div class="Progress">
                        <div class="Progress-3"></div>
                    </div>
                </div>
                <div class="skill-1-L-2">
                    <div class="Lang" data-aos="slide-right"><b>C</b></div>
                    <div class="Progress">
                        <div class="Progress-6"></div>
                    </div>
                </div>
                <div class="skill-1-L-2">
                    <div class="Lang" data-aos="slide-right"><b>JAVA</b></div>
                    <div class="Progress">
                        <div class="Progress-7"></div>
                    </div>
                </div>
            </div>

            <div class="skill-1-L">
                <div class="skill-1-L-2">
                    <div class="Lang" data-aos="slide-right"><b>CSS</b></div>
                    <div class="Progress">
                        <div class="Progress-1"></div>
                    </div>
                </div>
                <div class="skill-1-L-2">
                    <div class="Lang" data-aos="slide-right"><b>REACT</b></div>
                    <div class="Progress">
                        <div class="Progress-10"></div>
                    </div>
                </div>
                <div class="skill-1-L-2">
                    <div class="Lang" data-aos="slide-right"><b>MongoDB</b></div>
                    <div class="Progress">
                        <div class="Progress-3"></div>
                    </div>
                </div>
                <div class="skill-1-L-2">
                    <div class="Lang" data-aos="slide-right"><b>C++</b></div>
                    <div class="Progress">
                        <div class="Progress-8"></div>
                    </div>
                </div>
                <div class="skill-1-L-2">
                    <div class="Lang" data-aos="slide-right"><b>PYTHON</b></div>
                    <div class="Progress">
                        <div class="Progress-9"></div>
                    </div>
                </div>
            </div>


            <div class="skill-1-R"/>
        </div>
    </div>
    </div>
  );
};
export default Skills;