import {Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const Home = () => {

  const classes = useStyles();

  return (
   <div className="container">
        <Typography className={classes.text1} variant='h3'>No Time to Cook? <br/> No Problem!</Typography>
        <Typography className="text2" variant='h6'>Subscribe To HelloThali for Healthy, Hassle-Free Meals.</Typography>
   </div>
  )
}

export default Home