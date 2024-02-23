import { Button, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import AboutImg from "../../assets/images/aboutimage.png";

const About = () => {

  const classes = useStyles();

  return (
    <div className="aboutdiv">
      <div className="aboutfirstdiv">
        <img src={AboutImg} class="jelly" />
      </div>
      <div className="aboutseconddiv">
        <Typography className={classes.aboutfirsttext}>What We Do!</Typography>
        <Typography className={classes.aboutfirsttypo}>Why We Do!</Typography>
        <Typography className="aboutsecondtext" component={"p"}>
        HelloThali delivers authentic, delicious Indian thalis straight to your door. Forget expensive restaurants or grocery shopping - enjoy affordable weekly/monthly plans with the diverse menus curated by experts. Let us simplify your life, one delicious meal at a time.
        </Typography>
        <Button className={classes.aboutbutton}>Discover MORE</Button>
      </div>
    </div>
  );
};

export default About;
