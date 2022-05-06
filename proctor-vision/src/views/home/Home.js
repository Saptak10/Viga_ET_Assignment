import React from 'react';

import man from '../../assets/man.png';

import { Grid, Typography, Box, Button, Link, } from '@mui/material';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';

import useStyles from './styles';

export const Home = () => {
  
  const classes = useStyles();

  return (
      <div className={classes.mainContainer}>
        <Grid container spacing={2}>

          <Typography style={{marginLeft:'80px'}} variant='h4'>My Classes</Typography>

          <div className={classes.contentBox}>
            <Grid container spacing={2} elevation={10}>
              <Grid item xs={6} >
                <Typography >Neural Networks and Fuzzy Control</Typography> 
                <Typography sx={{color: 'rgba(255, 255, 255, 0.523)'}}>CSE3013</Typography> 
              </Grid>
              <Grid style={{textAlign:'right'}} item xs={6} >
                <KeyboardArrowDownOutlinedIcon />
              </Grid>
            </Grid>
          </div>

          <div className={classes.contentBox}>
            <Grid container spacing={2} elevation={10}>
              <Grid item xs={6} >
                <Typography>IOT System Architecture</Typography> 
                <Typography sx={{color: 'rgba(255, 255, 255, 0.523)'}}>ECE1029</Typography> 
              </Grid>
              <Grid style={{textAlign:'right'}} item xs={6} >
                <KeyboardArrowUpSharpIcon />
              </Grid>
            </Grid>
            <Box className={classes.examBox} >
                <Grid container spacing={2}>
                  <Grid item xs={4} md={4}>
                    <Typography>CAT 1</Typography> 
                  </Grid>
                  <Grid style={{textAlign:'center'}} item xs={4} md={4}>
                    <Typography>22nd Dec 2020 . 9:00 am - 12:00 pm <NotificationsOffOutlinedIcon  sx={{color: 'rgba(255, 255, 255, 0.523)'}}/></Typography> 
                  </Grid>
                  <Grid style={{textAlign:'right', paddingRight: '20px'}} item xs={4} md={4}>
                    <Button type='submit' variant="contained" 
                      color='secondary' style={{textTransform: "none"}}>Completed</Button>
                  </Grid>
                </Grid>
              </Box>
              <Box className={classes.examBox} >
                <Grid container spacing={2}>
                  <Grid item xs={4} md={4}>
                    <Typography>CAT 2</Typography> 
                  </Grid>
                  <Grid style={{textAlign:'center'}} item xs={4} md={4}>
                    <Typography>12th Jan 2021 . 9:00 am - 12:00 pm <NotificationsOutlinedIcon /></Typography> 
                  </Grid>
                  <Grid style={{textAlign:'right', paddingRight: '20px'}} item xs={4} md={4}>
                    <Button type='submit' variant="contained" style={{textTransform: "none"}} >Join Exam</Button>
                  </Grid>
                </Grid>
              </Box>
              <Box className={classes.examBox} >
                <Grid container spacing={2}>
                  <Grid item xs={4} md={4}>
                    <Typography>Lab FAT</Typography> 
                  </Grid>
                  <Grid style={{textAlign:'center'}} item xs={4} md={4}>
                    <Typography>22nd Mar 2021 . 9:00 am - 12:00 pm <NotificationsOutlinedIcon /></Typography> 
                  </Grid>
                  <Grid style={{textAlign:'right', paddingRight: '20px'}} item xs={4} md={4}>
                    <Button type='submit' variant="contained" 
                      color='secondary' style={{textTransform: "none"}}>Yet to start</Button>
                  </Grid>
                </Grid>
              </Box>
          </div>
        </Grid>
        <Grid sx={{marginTop: '20px'}} container spacing={2} elevation={10}>
          <Grid item xs={6} >
            <Typography style={{textAlign:'left', paddingLeft: '80px'}}><Link>Take Demo Exam</Link></Typography> 
          </Grid>
          <Grid item xs={6} >
            <Grid container spacing={-12} elevation={10}>
              <Grid className={classes.expense} item xs={11} >
                  <Typography>Samuel Doe</Typography>
                  <div style={{color: 'rgba(255, 255, 255, 0.523)'}}>18BIS1241</div>
              </Grid>
              <Grid item xs={1} >
                  <img style={{borderRadius:'70px'}}
                  width='60px' height='60px' src={man}/>
              </Grid>
            </Grid> 
          </Grid>
        </Grid> 
      </div>
  )
}
