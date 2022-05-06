import React from 'react';

import { Grid, Typography, Button, Box } from '@mui/material';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

import useStyles from './styles';

export const Exam = () => {
  
  const classes = useStyles();

  return (
      <div className={classes.mainContainer}>
        <Grid container spacing={2}>
          <Grid item xs={9}>

              <Typography style={{marginRight:'76%'}} variant='h4'><AccessTimeOutlinedIcon /> 01:33:33</Typography>
              <Typography style={{marginRight:'76%',marginTop: '44px'}} variant='h4'>Question 1</Typography>

              <Box className={classes.contentBox} >
                <Typography >Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Velit in id diam tortor. 
                  Volutpat ipsum accumsan ut euismod pulvinar ut placerat gravida. 
                  Dolor velit sed non in semper. 
                  Enim etiam sem nunc fermentum sollicitudin tellus. 
                  Sagittis cum nec justo leo semper ut sollicitudin. 
                  Gravida pellentesque dis.</Typography>
                  
              </Box>

              <Box className={classes.contentBox} >
              <FiberManualRecordRoundedIcon style={{marginRight:'5px'}}/>
                <Typography gutterBottom="false">Lorem ipsum dolor</Typography>
              </Box>
              <Box className={classes.contentBox} >
              <FiberManualRecordRoundedIcon  style={{marginRight:'5px'}}/>
                <Typography gutterBottom="false">Lorem ipsum dolor</Typography>
              </Box>
              <Box className={classes.contentBox} >
              <FiberManualRecordRoundedIcon  style={{marginRight:'5px'}}/>
                <Typography gutterBottom="false">Lorem ipsum dolor</Typography>
              </Box>
              <Box className={classes.contentBox} >
              <FiberManualRecordRoundedIcon  style={{marginRight:'5px'}}/>
                <Typography gutterBottom="false">Lorem ipsum dolor</Typography>
              </Box>
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={-10}>
              <Grid item xs={5}>
                <Button style={{textTransform: "none"}} variant="contained" fullwidth>Exit</Button>
              </Grid>
              <Grid item xs={5}>
                <Button style={{textTransform: "none"}} variant="contained" fullwidth>Submit</Button>
              </Grid>
            </Grid>

            <Grid sx={{marginTop: '70px'}} container spacing={-10}>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'4px',backgroundColor: '#FFFFFF',color: 'black'}}>1</Typography>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'4px',backgroundColor: '#A7F93F',color: 'black'}}>1</Typography>

                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'4px',backgroundColor: '#FF5555',color: 'black'}}>1</Typography>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'4px',backgroundColor: '#FF5555',color: 'black'}}>1</Typography>
                </Box>
              </Grid>
              
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>

                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>
                </Box>
              </Grid>

              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>

                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>
                </Box>
              </Grid>

              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>

                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Box className={classes.numberBox} >
                  <Typography sx={{paddingTop:'5px'}}>1</Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid sx={{marginTop: '10px'}} item xs={3}>
                <Typography>&#60; 1 2 3 &#62;</Typography>
            </Grid>

            <Grid sx={{marginTop: '10px'}} container spacing={-10}>
              <Grid item xs={6}>
                <Button style={{textTransform: "none"}} color='secondary' variant="contained" fullwidth>&#60; Previous</Button>
              </Grid>
              <Grid item xs={6}>
                <Button style={{textTransform: "none"}} variant="contained" fullwidth>Next &#62;</Button>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </div>
  )
}
