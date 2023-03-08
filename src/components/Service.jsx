import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import mobile3 from '../images/mobile-3.svg'
import DoneIcon from '@mui/icons-material/Done';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Service = () => {
  return (
    <div className='service-main'>
        <Box className="service-image">
            <img src={mobile3} alt="mobile3" />
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
      
    </div>
  )
}

export default Service
