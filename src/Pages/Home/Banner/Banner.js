import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bike from '../../../images/bike.jpg'
import { Button, Container, Typography } from '@mui/material';


const Banner = () => {
    return (
        <Container style={{marginBottom:'20px'}} >
      <Grid container spacing={2}>  
        <Grid item style={{ textAlign:'left'}} xs={12} md={4}> 
         <Box style={{paddingTop:'100px'}}>
         <Typography variant="h3">
        Your New Smile <br />
        Starts Here
         </Typography>
         <Typography variant="h6" sx={{my: 3,fontSize: 13, fontWeight: 300, color: 'black'}}>
         Touring has always been my passion. In my opinion, this is the best grand tourer there is. Although the Ducati Multistrada is a tested and proven bike in this segment, the heart is inclined towards the KTM.
         </Typography>
         <Button style={{backgroundColor: '#40F8CB'}} sx={{m:3}} variant="contained">Get Started</Button>
         </Box>
        </Grid>
        <Grid item xs={12} md={8}>
            <img style={{width:'100%'}} src={bike} alt="" />
          </Grid>
        </Grid>
    </Container>
    );
};

export default Banner;