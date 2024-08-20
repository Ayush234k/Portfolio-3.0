// import { Link } from "react-router-dom";
import React from 'react';
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
                            <a href="https://github.com/Ayush234k/Project-3.0" target="_blank">
                        <CallMadeIcon id='project-icons' sx={{fontSize:35, color:"#007FFF"}}/>
                        </a>
                    </div>
                </div>
                <p data-aos="zoom-in-up"><b>ECODINE</b></p>
                <p>A sustainable food portal that allows hostel residents to skip meals, reducing food waste and promoting eco-conscious eating habits.</p>
            </div>
            <div class="card" data-aos="zoom-in-up">
                <div class="links">
                    <div class="L">
                        <FolderIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                    </div>
                    <div class="R">
                        <AccountTreeIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                            <a href="https://github.com/Ayush234k/NewsApp" target="_blank">
                        <CallMadeIcon id='project-icons' sx={{fontSize:35, color:"#007FFF"}}/>
                        </a>
                    </div>
                </div>
                <p data-aos="zoom-in-up"><b>NEWS APP</b></p>
                <p>Stay informed with a user-friendly news app that delivers the latest headlines and personalized content directly to your fingertips.</p>
            </div>
            <div class="card" data-aos="zoom-in-up">
                <div class="links">
                    <div class="L">
                        <FolderIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                    </div>
                    <div class="R">
                        <AccountTreeIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                            <a href="https://github.com/Ayush234k/Expense-Tracker" target="_blank">
                        <CallMadeIcon id='project-icons' sx={{fontSize:35, color:"#007FFF"}}/>
                        </a>
                    </div>
                </div>
                <p data-aos="zoom-in-up"><b>EXPENSE TRACKER</b></p>
                <p>Take control of your finances with an intuitive expense tracker that helps you monitor spending, set budgets, and achieve your financial goals.</p>
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
                            <a href="https://github.com/Ayush234k/Weather-App" target="_blank">
                        <CallMadeIcon id='project-icons' sx={{fontSize:35, color:"#007FFF"}}/>
                        </a>
                    </div>
                </div>
                <p data-aos="zoom-in-up"><b>WEATHER APP</b></p>
                <p>Plan your day with confidence using a reliable weather app that provides accurate forecasts, real-time updates, and severe weather alerts.</p>
            </div>
            <div class="card">
                <div class="links">
                    <div class="L">
                        <FolderIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                    </div>
                    <div class="R">
                        <AccountTreeIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                            <a href="https://github.com/Ayush234k/Car_Webpage" target="_blank">
                        <CallMadeIcon id='project-icons' sx={{fontSize:35, color:"#007FFF"}}/></a>
                    </div>
                </div>
                <p data-aos="zoom-in-up"><b>CAR UI</b></p>
                <p>Enhance your driving experience with a sleek and intuitive car UI that seamlessly integrates navigation, entertainment, and vehicle controls.</p>
            </div>
            <div class="card">
                <div class="links">
                    <div class="L">
                        <FolderIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                    </div>
                    <div class="R">
                        <AccountTreeIcon id='project-icons' sx={{fontSize:35, color:"white"}}/>
                            <a href="https://github.com/Ayush234k/To-Do-List" target="_blank">
                        <CallMadeIcon id='project-icons' sx={{fontSize:35, color:"#007FFF"}}/>
                        </a>
                    </div>
                </div>
                <p data-aos="zoom-in-up"><b>TO-DO LIST</b></p>
                <p>Boost your productivity with a simple yet powerful to-do list app that helps you organize tasks, set reminders, and stay on top of your goals.</p>
            </div>
        </div>
    </div>
    </div>
  );
};
export default Projects;