import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import './Navbar.css';

const Navbar = () => {


  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} className='nav-box'>
      <ul>
        <HomeRoundedIcon/>
        <Link to="/">Home</Link>
      </ul><Divider/>
      <ul>
        <Person2RoundedIcon/>
        <Link to="/about">About</Link>
      </ul><Divider/>
      <ul>
        <DescriptionIcon/>
        <Link to="/skills">Skills</Link>
      </ul><Divider/>
      <ul>
        <WorkspacesIcon/>
        <Link to="/projects">Work</Link>
      </ul><Divider/>
      <ul>
        <EmailIcon/>
        <Link to="/contact">Contact</Link>
      </ul><Divider/>
    </Box>
  );

  return (
      <nav className='navbar'>
      <div className="navbar-brand"></div>
      <div className="navbar-toggle" onClick={toggleDrawer(true)}>
      <MenuIcon sx={{fontSize:35, color:"white"}}/>
      </div>
      <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Works</Link>
          <Link to="/contact">Contact</Link>
          {/* <Link to="/parallax">Parallax</Link> */}
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
      </Drawer>
    </nav>

  );
};

export default Navbar;