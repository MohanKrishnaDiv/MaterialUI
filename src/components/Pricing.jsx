import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PricingCard from '../commonComponents/PricingCard'
import pr1 from "../images/pricing1.PNG"
import pr2 from "../images/pricing2.PNG"
import pr3 from "../images/pricing3.PNG"
import pr4 from "../images/pricing4.PNG"

const Pricing = () => {

  const pricingList = [
    {
      imagUrl:pr1,
      title:"Free",
      price:'0'
    },
    {
      imagUrl:pr2,
      title:"Starter",
      price:'19'
    },
    {
      imagUrl:pr3,
      title:"Business",
      price:'49'
    },
    {
      imagUrl:pr4,
      title:"Ultimate",
      price:'69'
    }
  ]
  return (
    <div>
      <Box className="pricing-main">
        <Box className="pricing-heaidng">
            <Typography variant='h3'>Our Services</Typography>
            <Typography variant='body2' width="500px" color="GrayText">Lorem nemo exercitationem tenetur alias distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum quidem adipisci laudantium, aut sunt? Sit reiciendis aperiam quidem maiores.</Typography>      
        </Box>
        <Box className="pricingList-Individual">
            {
              pricingList.map((items)=>(
                <PricingCard image={items.imagUrl} title={items.title} price={items.price}/>
              ))
            }
        </Box>
      </Box>
    </div>
  )
}

export default Pricing
