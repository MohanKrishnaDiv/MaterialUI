import { Button, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (
    <Box className="footer-main" id="contactNav">
     <Container className="footer-imp">
        <div className='rrr'>
        <Box className="footer-aboutUs">
            <Typography variant='h6'>About Us</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam? dolor sit amet, consectetur adipisicing elit consectetur adipisicing.</Typography>
            <div className='aboutus-icons'>
                <TwitterIcon sx={{height:"20px",width:"20px",color:"white"}}/>
                <TwitterIcon sx={{height:"20px",width:"20px",color:"white"}}/>
                <TwitterIcon sx={{height:"20px",width:"20px",color:"white"}}/>
                <TwitterIcon sx={{height:"20px",width:"20px",color:"white"}}/>
            </div>
        </Box>
        <Box className="footer-company footer-common">
            <Typography variant='h6' className='xyz'>Company</Typography>
            <Typography variant='body2'><ArrowForwardIosIcon sx={{color:"white"}} /> About Us</Typography>
            <Typography variant='body2'><ArrowForwardIosIcon sx={{color:"white"}} /> Services</Typography>
            <Typography variant='body2'><ArrowForwardIosIcon sx={{color:"white"}} /> Team</Typography>
            <Typography variant='body2'><ArrowForwardIosIcon sx={{color:"white"}} /> Pricing</Typography>
            <Typography variant='body2'><ArrowForwardIosIcon sx={{color:"white"}} /> Project</Typography>
        </Box>
        <Box className="footer-usefulLinks footer-common">
            <Typography variant='h6' className='xyz'>Useful Links</Typography>
            <Typography variant='body2'><ArrowForwardIosIcon sx={{color:"white"}} /> Terms of Services</Typography>
            <Typography variant='body2'><ArrowForwardIosIcon sx={{color:"white"}} /> Privacy Policy</Typography>
            <Typography variant='body2'><ArrowForwardIosIcon sx={{color:"white"}} /> Documentation</Typography>
            <Typography variant='body2' ><ArrowForwardIosIcon sx={{color:"white"}} /> ChangeLog</Typography>
            <Typography variant='body2'><ArrowForwardIosIcon sx={{color:"white"}} /> Documentation</Typography>
        </Box>
        <Box className="footer-newsletter">
            <Typography variant='h6' >Newsletter</Typography>
            <Typography variant='body2'>Sign Up for the latest news</Typography>
            <div className='emailInput'><EmailIcon/><input type="text" placeholder='Email' className='inpEmail'/></div>
            <Button variant='contained' sx={{backgroundColor:"#3f51b5"}}>SUBSCRIBE</Button>
        </Box>
        </div>
      </Container>
    </Box>
  )
}

export default Footer
