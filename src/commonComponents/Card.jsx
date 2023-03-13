import { CardActionArea, CardContent,  Typography,Card } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeContexts } from '../App'

const CardX = ({image,heading}) => {
  const {theme} = useContext(ThemeContexts)
  return (
    <Card sx={{ maxWidth: 220, maxHeight:250 , boxShadow:0}} id={theme}>
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
