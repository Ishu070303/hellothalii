import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { Footer, Navbar } from '../../pages';
import "./style.css";
import Menu from '../_menu/Menu';

const Explore = () => {
  return (
   <Box>
    <div className='explore-nav'>
        <Navbar />
    </div>
    <div className='explore-div'>
        <Typography className='explore-text-h4' variant='h4'>No Subscription, No Problem?</Typography>
        <Typography className='explore-text-p' component={"p"}>No Strings Attached, Just Pure Satisfaction: Experience GOAT Thall's Deliciousness.</Typography>
    </div>

    <div className='menu-div'>
        <Menu />
    </div>

    <Footer />
   </Box>
  )
}

export default Explore