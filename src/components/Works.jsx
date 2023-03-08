import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CardX from '../commonComponents/Card'
import mobile2 from '../images/mobile-2.svg'
import image1 from '../images/work1.PNG'
import image2 from '../images/work2.PNG'
import image3 from '../images/work3.PNG'
import image4 from '../images/work4.PNG'
import image5 from '../images/work5.PNG'
import image6 from '../images/work6.PNG'


const Works = () => {

    const workImagesArray=[
        {
        imageUrl:image1,
        Title:'Use on Any Device'
        },
        {
        imageUrl:image2,
        Title:'Material Design Icon'
        },
        {
        imageUrl:image3,
        Title:'Retina Ready'
        },
        {
        imageUrl:image4,
        Title:'W3c Valid Code'
        },
        {
        imageUrl:image5,
        Title:'Fully Responsive'
        },
        {
        imageUrl:image6,
        Title:'Browser Compatibility'
        }

    ]
  return (
    <div>
        <Box className="works-main">
            <Box className="work-features">
                <Typography variant='h3'>App Features</Typography>
                <Typography variant='body2' width="500px" color="GrayText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus nemo exercitationem tenetur alias distinctio. Fugiat nam ab consequatur illo voluptatibus?</Typography>
                <div className='cardsIndividual'>
                {
                workImagesArray.map((item) => (
                    <CardX image = {item.imageUrl} heading ={item.Title} key={item.imageUrl}/>
                ))
                }
                </div>
                
            </Box>
            <Box className="work-image">
                <img src={mobile2} alt="mobile" />
            </Box>

        </Box>
    </div>
  )
}

export default Works
