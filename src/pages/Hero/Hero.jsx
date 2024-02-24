import { Button, Paper, Typography } from "@material-ui/core";

const Hero = () => {
  return (
    <div className="herosection">
      <div className="herofirstdiv">
        <Paper className="heropaper">
          <Typography className="herotypoh5" variant="h5">
            Our Mission
          </Typography>
          <Typography className="herotypop" component={"p"}>
            To make delicious, healthy food accessible for everyone, from
            students, to families, join us and enjoy the freedom of stress-free,
            flavourful meals
          </Typography>
          <Button className="herobutton">Discover Our Menu</Button>
        </Paper>
      </div>
      <div className="heroseconddiv">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
      </div>
    </div>
  );
};

export default Hero;
