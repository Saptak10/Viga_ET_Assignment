import React from 'react';
import { Grid, Typography, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnRoundedIcon from '@mui/icons-material/ToggleOnRounded';

import man from '../../assets/man.png';

import useStyles from './styles';
import { Box } from '@mui/system';

export const Settings = () => {

  const text = {
    fontSize: '20px',
    color: 'white',
  }

  const toggle = {
    fontSize: '30px',
    color: 'white',
  }
  
  const classes = useStyles();

  return (
      <div className={classes.mainContainer}>
        <Grid container spacing={2}>
          <Grid sx={{marginTop: '20px', marginBottom: '50px'}} container spacing={0}>
            <Grid className={classes.heading} item xs={6} >
                <Typography sx={{marginRight: '20px',paddingTop: '10px'}} variant='h4'>&#60;</Typography>
                <img className={classes.imgStyle} width='60px' height='60px' src={man}/>
                <Typography sx={{marginRight: '20px',paddingTop: '10px'}} variant='h4'>Samuel Doe</Typography>
                <Typography sx={{paddingTop: '25px'}}>18BIS1241</Typography>
            </Grid>
            <Grid className={classes.heading2} item xs={6}>
              <DriveFileRenameOutlineOutlinedIcon sx={{marginRight: '10px'}}/>
              <Typography>Edit Profile Picture</Typography>
            </Grid>
          </Grid>

          <Typography style={{marginLeft:'100px'}} variant='h4'>General Settings</Typography>

          <Box className={classes.settingsBox}>
            <TableContainer style={{color: 'white'}}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    <TableRow>
                      <TableCell sx={text} component="th" scope="row">Settings 1</TableCell>
                      <TableCell sx={toggle} align="right"><KeyboardArrowDownOutlinedIcon sx={toggle}/></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={text} component="th" scope="row">Settings 2</TableCell>
                      <TableCell align="right"><ToggleOffOutlinedIcon sx={toggle} /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={text} component="th" scope="row">Settings 3</TableCell>
                    <TableCell sx={toggle} align="right"><ToggleOnRoundedIcon sx={toggle}/></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Typography style={{marginLeft:'100px'}} variant='h4'>General Settings</Typography>

          <Box className={classes.settingsBox}>
            <TableContainer style={{color: 'white'}}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    <TableRow>
                      <TableCell sx={text} component="th" scope="row">Settings 1</TableCell>
                      <TableCell sx={text} align="right">View More</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell sx={text} component="th" scope="row">Settings 2</TableCell>
                    <TableCell sx={toggle} align="right"><ToggleOffOutlinedIcon sx={toggle}/></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          
        </Grid>
      </div>
  )
}
