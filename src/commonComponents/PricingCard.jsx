import { Button, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';


const PricingCard = ({image,title,price}) => {
  return (
        <Box className="pricingCard-main">
            <Box className="pricingCard-top">
                <img src={image} alt="img" width="60px" height="60px" />
                <Box>
                    <Typography variant='h6' sx={{color:"#3f51b5"}}>{title}</Typography>
                    <Typography variant='body2' className='pricing-in'>$<Typography variant='h6' sx={{color:"#3f51b5"}}>{price}</Typography>/mo</Typography>
                </Box>
            </Box>
            <Divider sx={{color:"#3f51b5" ,border:"1px solid",width:"100%"}}/>
            <Box className="pricing-content">
                <Typography variant='body2' color={'GrayText'}><DoneIcon className='doneIcon'/> Full access</Typography>
                <Typography variant='body2' color={'GrayText'}><DoneIcon className='doneIcon'/> Source Files</Typography>
                <Typography variant='body2' color={'GrayText'}><DoneIcon className='doneIcon'/> Code Upload</Typography>
                <Typography variant='body2' color={'GrayText'}><DoneIcon className='doneIcon'/> Enhanced Security</Typography>
                <Typography variant='body2' color={'GrayText'}><DoneIcon className='doneIcon'/> Free Installment</Typography>
            </Box>
            <Button variant='contained' sx={{backgroundColor:"#3f51b5"}}>Buy Now</Button>
        </Box>
  )
}

export default PricingCard
