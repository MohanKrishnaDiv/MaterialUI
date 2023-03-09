import { Box } from '@mui/system'
import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import image1 from "../images/image.svg"
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

const Home = () => {
  return (
    <Container id="homeNav"> 
    <Box className="home-main">
        <Box className="home-image">
            <img src={image1} alt="playing" />
        </Box>
        <Box className="home-content">
            <Typography variant='h5' color="#3f51b5">Evalynn Music</Typography>
            <Typography variant='h3'>Best Music App 2020</Typography>
            <Typography variant='body2' color="GrayText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia id officiis nihil quibusdam corporis enim vitae obcaecati eaque explicabo.</Typography>
            <Button variant='outlined' className='videoBtn' sx={{color:"black", borderColor:"black"}}>CLICK TO WATCH A VIDEO</Button>
            <Box className="home-content-buttons">
                <Button variant='contained' className='home-buttons'><AndroidIcon/> Play Store</Button>
                <Button variant='contained' className='home-buttons'><AppleIcon/> App Store</Button>
            </Box>
            <path id="Path_2425" data-name="Path 2425" d="M74.834,113.539l-3.891-3.51C57.123,97.341,48,89.106,48,78.848A14.593,14.593,0,0,1,62.759,64a15.874,15.874,0,0,1,12.075,5.67A15.874,15.874,0,0,1,86.909,64a14.593,14.593,0,0,1,14.759,14.848c0,10.258-9.123,18.493-22.942,31.181Z" transform="translate(-48 -64)"></path>
        </Box>
    </Box>
    </Container>
  )
}

export default Home