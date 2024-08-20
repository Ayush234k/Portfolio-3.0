import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';


import '../Pages/Contact.css'
import Navbar from '../Components/Navbar';
import PersonIcon from '@mui/icons-material/Person';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const Contact = () =>  {

  const form = useRef();

  const [fname, setFname ] = useState('');
  const [email, setEmail ] = useState('');
  const [msg, setMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lcua6ni', 'template_ceikdtd', form.current, {
        publicKey: 'peokadoi9P55zrkEX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      setFname('');
      setEmail('');
      setMsg('');
  };
    

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const notify = () =>{
    toast.success('Email sent!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <div>
      <div className='Contain-5'>
            <Navbar/>
        <div id="part-5">
            <div class="g1">
                Get In Touch
            </div>
                <div class="gc">
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </div>
                <div class="gb">
                    <div onClick={handleOpen} class="bt">
                        Say Hello
                    </div>
                </div>
                <div class="ft">
                    Designed & Built by Ayush Singh
                </div>
        </div>
        <ToastContainer
          position="bottom-left"
          autoClose={10000000000000000000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className='Box'>
          <Typography id="transition-modal-title" variant="h6" component="h2">
              For more information. Please complete this form.            
          </Typography>
          <form ref={form} onSubmit={sendEmail} id='transition-modal-description'>
            <div className="wrapper">
            <PersonIcon id='contact-icons' sx={{fontSize:30}} className='ER'/>              
            <input 
                type="text" 
                className="contact-input"
                placeholder="Enter name"
                name='from_name'
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                />
            </div>




            {/* <div className="wrapper">
            <PersonIcon sx={{fontSize:30}} className='ER'/>              
            <TextField
              className='contact-inputt'
              required
              id="outlined-required"
              label="Enter name"
              variant="standard"
              InputProps={{
                disableUnderline: true, 
              }}
              InputLabelProps={{
                style: { color: '#fff' },
              }}
            />
            </div> */}



            
            <div className="wrapper">
            <EmailRoundedIcon id='contact-icons' sx={{fontSize:30}} className='ER'/>
            <input 
                type="email" 
                className="contact-input"
                placeholder="Enter email"
                name='from_email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              className="contact-textarea"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <input 
            onClick={notify}
            type="submit" 
            value="Send" 
            id='btn-1'/>
          </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}


export default Contact;