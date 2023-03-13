import { Button, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import CustomerCard from '../commonComponents/CustomerCard'
import pr1 from "../images/profile1.png"
import pr2 from "../images/profile2.png"
import pr3 from "../images/profile3.png"
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

const customerArray = [
  {
    imgUrl:pr1,
    title:"John Doe",
    role:"Product Manager"
  },
  {
    imgUrl:pr2,
    title:"Adam Smith",
    role:"CEO"
  },
  {
    imgUrl:pr3,
    title:"John White",
    role:"Software Engineer"
  },
  {
    imgUrl:pr1,
    title:"John Doe",
    role:"Product Manager"
  }

]
const Customers = () => {
  return (
    <Container className="customers-main">
        <Box className="pricing-heaidng">
            <Typography variant='h3'>What our Customers Have to Say</Typography>
            <Typography variant='body2' width="500px" color="GrayText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua..</Typography>      
        </Box>
        <Box className='customer-details'> 
            {
              customerArray.map((items) => (
                <CustomerCard image={items.imgUrl} Title={items.title} role={items.role}/>
              ))
            }
        </Box>
        <div className='xcq'>
          <div className='grayleft'></div>
            <Box className='customer-download'>        
                <Box className="pricing-heaidng">
                    <Typography variant='h3'>Download Now!</Typography>
                    <Typography variant='body2' width="500px" color="GrayText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua..</Typography>      
                </Box>
                <Box className="home-content-buttons customer-btns">
                    <Button variant='contained' className='home-buttons'><AndroidIcon/> Play Store</Button>
                    <Button variant='contained' className='home-buttons'><AppleIcon/> App Store</Button>
                </Box>
            </Box>
            <div className='grayright'></div>
        </div>
    </Container>
  )
}

export default Customers
