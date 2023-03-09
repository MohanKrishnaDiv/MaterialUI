import { Divider, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import TwitterIcon from '@mui/icons-material/Twitter';
const CustomerCard = ({image,Title,role}) => {
  return (
    <Container className="CC-main">
      <fieldset className='CC-fieldset'>
        <legend><img src={image} alt="profile" height={100}/></legend>
        <Typography variant='body2' color={'GrayText'}>"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."</Typography>
        <Divider/>
        <Box className="CC-icons"> 
            <EastIcon sx={{height:"20px",width:"20px",color:"#3f51b5"}}/>
            <EastIcon sx={{height:"20px",width:"20px",color:"#3f51b5"}}/>
            <EastIcon sx={{height:"20px",width:"20px",color:"#3f51b5"}}/>
            <EastIcon sx={{height:"20px",width:"20px",color:"#3f51b5"}}/>
            <EastIcon sx={{height:"20px",width:"20px",color:"#3f51b5"}}/>
        </Box>
        <Box className="CC-profile">
            <div>
            <Typography variant='h6' fontSize={15} fontWeight={600}>{Title}</Typography>
            <Typography variant='body2' color={'GrayText'}>{role}</Typography>
            </div>
            <TwitterIcon sx={{height:"20px",width:"20px"}}/>
        </Box>

      </fieldset>
    </Container>

    
  )
}

export default CustomerCard
