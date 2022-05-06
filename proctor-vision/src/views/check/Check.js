import React from 'react';
import man from '../../assets/man.png';
import { Grid, Typography, Button, Box } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';

import useStyles from './styles';

export const Check = () => {
  
  const classes = useStyles();

  return (
      <Box className={classes.mainContainer}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
              <Typography variant='h4'>&#60; Graduate Record Examination</Typography>
              <img className={classes.middleBox} width='425.96px' height='427px' src={man}/>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.clock}>
              <div className={classes.date}>17th Dec 2020</div>
              <div className='expense-date__year'>9:00 am - 12:00 pm</div>
            </div>

            <div className={classes.middleBox}>
              <div style={{display: 'flex'}}>
                <DoneIcon className={classes.done}/>
                <Typography style={{fontSize: '25px'}} gutterBottom="false">Webcam check</Typography>
              </div>
              <div className={classes.progress}>
                <DoneIcon className={classes.done}/>
                <Typography style={{fontSize: '25px'}} gutterBottom="false">Mic testing</Typography>
              </div>
              <div className={classes.progress}>
                <ClearIcon className={classes.fail}/>
                <Typography style={{fontSize: '25px'}} gutterBottom="false">α Iris sync</Typography>
              </div>
              <div className={classes.progress}>
                <ClearIcon className={classes.fail}/>
                <Typography style={{fontSize: '25px'}} gutterBottom="false">BT / Alien hardware detection</Typography>
              </div>
              <div className={classes.progress}>
                <DoneIcon className={classes.done}/>
                <Typography style={{fontSize: '25px'}} gutterBottom="false">QR / Virtual Machine detection</Typography>
              </div>
              <div className={classes.progress}>
                <RefreshOutlinedIcon className={classes.reload}/>
                <Typography style={{fontSize: '25px'}} gutterBottom="false">Browser lock</Typography>
              </div>
              <div className={classes.progress}>
                <RefreshOutlinedIcon className={classes.reload}/>
                <Typography style={{fontSize: '25px'}} gutterBottom="false">Screen capture</Typography>
              </div>
              <div className={classes.progress}>
                <RefreshOutlinedIcon className={classes.reload}/>
                <Typography style={{fontSize: '25px'}} gutterBottom="false">Identity authentication</Typography>
              </div>
            </div>

            <Box className={classes.btnstyle} >            
              <Button style={{textTransform: "none"}} type='submit' variant="contained">Start Exam</Button>
            </Box>

            <Grid sx={{marginTop: '50px'}} container spacing={-12} elevation={10}>
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
      </Box>
  )
}
