import { Button, Paper, Typography } from '@material-ui/core';
import HeroImage from "../../assets/images/heroimage.png";

const Hero = () => {
  return (
    <div className='herosection'>
        <div className='herofirstdiv'>
            <Paper className='heropaper'>
                <Typography className='herotypoh5' variant='h5'>Our Mission</Typography>
                <Typography className='herotypop' component={"p"}>To make delicious, healthy food accessible for everyone, from students, to families, join us and enjoy the freedom of stress-free, flavourful meals</Typography>
                <Button className='herobutton'>Discover Menu</Button>
            </Paper>
        </div>
        <div className='heroseconddiv'>
            <img src={HeroImage} alt='heroimage' />
        </div>
    </div>
  )
}

export default Hero