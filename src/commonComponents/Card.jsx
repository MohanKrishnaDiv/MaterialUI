import { CardActionArea, CardContent,  Typography,Card } from '@mui/material'
import React from 'react'


const CardX = ({image,heading}) => {
  return (
    <Card sx={{ maxWidth: 220, maxHeight:250 , boxShadow:0}}>
      <CardActionArea>
        <img src={image} alt="img" height={80}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:20}}>
           {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardX
