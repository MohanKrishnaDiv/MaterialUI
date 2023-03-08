import { Button, ButtonGroup, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import mobile4 from "../images/mobile-4.svg"
import DoneIcon from '@mui/icons-material/Done';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Features = () => {
  return (
    <div>
        <Box className ="features-main">
            <Box className="features-content">
                <Box className="features-app">
                    <Typography variant='h3'>App Features</Typography>
                    <Typography variant='body2' width="500px" color="GrayText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus nemo exercitationem tenetur alias distinctio. Fugiat nam ab consequatur illo voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum quidem adipisci laudantium, aut sunt? Sit reiciendis aperiam quidem maiores.</Typography>
                </Box>
                <Box className="features-buttongroup">
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" className='button-grp'>
                        <Button>Community</Button>
                        <Button>Self Service</Button>
                        <Button>Teamwork</Button>
                    </ButtonGroup>
                </Box>
                <Box className="service-content">
                    <Typography variant='h3'>Great Product Analytics</Typography>
                    <Typography variant='body2' width="500px" color="GrayText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</Typography>
                    <Box className="service-donelist">
                        <Typography variant='body2' width="600px" color="GrayText"><DoneIcon className='doneIcon'/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Typography>
                        <Typography variant='body2' width="600px" color="GrayText"><DoneIcon className='doneIcon'/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Typography>
                        <Typography variant='body2' width="600px" color="GrayText"><DoneIcon className='doneIcon'/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Typography>
                    </Box>
                    <Button variant='text'>Click to view more<ArrowForwardIosIcon/></Button>
                 </Box>
            </Box>
            <Box className="features-img">
                <img src={mobile4} alt="mobile4" />
            </Box>

        </Box>
      
    </div>
  )
}

export default Features
