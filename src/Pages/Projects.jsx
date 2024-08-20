// import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import CallMadeIcon from '@mui/icons-material/CallMade';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FolderIcon from '@mui/icons-material/Folder';
import './Projects.css';

const Projects = () => {
 
  return (
    <div className='Contain-4'>
    <Navbar/>
    <div id="part-4">
        <div class="part-4-0">Work</div>
        <div class="part-4-1">
            <div class="card" data-aos="zoom-in-up">
                <div class="links">
                    <div class="L">
                        <FolderIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                    </div>
                    <div class="R">
                        <AccountTreeIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                        <a href="./Project Links/Weather App/index.html" target="_blank">
                            <CallMadeIcon id='project-icons' sx={{fontSize:35, color:"#007FFF"}}/>
                        </a>
                    </div>
                </div>
                <p data-aos="zoom-in-up"><b>WEATHER APP</b></p>
            </div>
            <div class="card" data-aos="zoom-in-up">
                <div class="links">
                    <div class="L">
                        <FolderIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                    </div>
                    <div class="R">
                        <AccountTreeIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                        <a href="./projectLinks/carWebpage/car.html" target="_blank">
                            <CallMadeIcon id='project-icons' sx={{fontSize:35, color:"#007FFF"}}/>
                        </a>
                    </div>
                </div>
                <p data-aos="zoom-in-up"><b>CAR WEBSITE</b></p>
            </div>
            <div class="card" data-aos="zoom-in-up">
                <div class="links">
                    <div class="L">
                        <FolderIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                    </div>
                    <div class="R">
                        <AccountTreeIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                        <a href="./Project Links/Dashboard/asg2.html" target="_blank">
                            <CallMadeIcon id='project-icons' sx={{fontSize:35, color:"#007FFF"}}/>
                        </a>
                    </div>
                </div>
                <p data-aos="zoom-in-up"><b>RESPONSIVE DASHBOARD</b></p>
            </div>
        </div>
        <div class="part-4-2">
            <div class="card" data-aos="zoom-in-up">
                <div class="links">
                    <div class="L">
                        <FolderIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                    </div>
                    <div class="R">
                        <AccountTreeIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                        <a href="./Project Links/Registration Form/form.html" target="_blank">
                            <CallMadeIcon id='project-icons' sx={{fontSize:35, color:"#007FFF"}}/>
                        </a>
                    </div>
                </div>
                <p data-aos="zoom-in-up"><b>REGISTRATION FORM</b></p>
            </div>
            <div class="card">
                <div class="links">
                    <div class="L">
                        <FolderIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                    </div>
                    <div class="R">
                        <AccountTreeIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                        <a href="#"><CallMadeIcon id='project-icons' sx={{fontSize:35, color:"#007FFF"}}/></a>
                    </div>
                </div>
                <p><b>FOOD PORTAL</b></p>
            </div>
            {/* <div class="card">
                <div class="links">
                    <div class="L">
                        <FolderIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                    </div>
                    <div class="R">
                        <AccountTreeIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                        <a href="#">
                        <CallMadeIcon id='project-icons' sx={{fontSize:35, color:"#6E00C8"}}/>
                        </a>
                    </div>
                </div>
                <p></p>
            </div> */}
        </div>
    </div>
    </div>
  );
};
export default Projects;