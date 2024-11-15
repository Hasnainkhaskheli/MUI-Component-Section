import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from '..//..//assests/Illustration.png'

const HeroSection = () => {
  return (
    <>
     <Box sx={{display:"flex"}}>
        <Box sx={{marginTop:"150px", marginLeft:"150px"}}>
            <Typography sx={{fontWeight:"600"}} variant="h3">Lessons and insights
            </Typography>
            <Typography sx={{color:"green", fontWeight:"600"}} variant="h3">from 8 years</Typography>
            <Typography sx={{marginTop:"30px"}} variant="body1">Where to grow your business as a photographer: site or social media?</Typography>
            <br/>
        <Button sx={{backgroundColor:"green", color:"white", marginTop:"50px"}}>Register</Button>

        </Box>

        <Box sx={{marginTop:"75px", marginLeft:"150px"}} >
            <image src={Image} alt="illustraction image" />
        </Box>
    </Box>
  </>
  );
};

export default HeroSection;
