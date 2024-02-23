import { Button, Typography } from '@material-ui/core'
import { useStyles } from './style'

const About = () => {
  
  const classes = useStyles();

  return (
    <div className={classes.aboutdiv} >
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <Typography>What We Do!</Typography>
            <Typography>Why We Do!</Typography>
            <Typography component={"p"}>HelloThali deilivers authentic, deliciuous indian thalis
                straight to your door. Forget expensive restaurants or grocery shopping - enjoy affordable weekly/monthly
                plans with the diverse menus curated by experts. Let us simplify your life, one deliciuous
                meal at a time.
            </Typography>
            <Button>Discover our story and philosphy</Button>
        </div>
    </div>
  )
}

export default About