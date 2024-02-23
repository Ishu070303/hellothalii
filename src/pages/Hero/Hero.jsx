import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';

const Hero = () => {
  return (
    <div className='herosection'>
        <div className='herofirstdiv'>
            <Paper className='heropaper'>
                <Typography variant='h5'>Our Mission</Typography>
                <Typography component={"p"}></Typography>
                <Button>Discover Menu</Button>
            </Paper>
        </div>
        <div className='heroseconddiv'>
            <img src='' />
        </div>
    </div>
  )
}

export default Hero