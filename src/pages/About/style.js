import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  aboutdiv: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#F0F5F3",
  },

  aboutfirstdiv: {
    marginTop: "2rem",
  },

  aboutfirsttext: {
    fontFamily: "Cormorant Garamond",
    fontSize: "48px",
    fontWeight: "900",
    color: "#10271C",
    lineHeight: "4rem",
    marginTop: "44px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      width: "169px",
      marginTop: "8px",

    }
  },

  aboutfirsttypo: {
    fontFamily: "Cormorant Garamond",
    fontSize: "48px",
    fontWeight: "900",
    color: "#10271C",
    lineHeight: "4rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      width: "169px",
      lineHeight: "2rem",
      marginBottom: "1rem",
    }
  },

  aboutbutton: {
    fontFamily: "Questrial",
    backgroundColor: "#A38F98",
    padding: "10px",
    color: "white",
    textAlign: "left",
    marginLeft: "-8rem",
    borderRadius: "7px",
    marginTop: "15px",
    fontWeight: "500",
    marginBottom: '2rem',
    "&:hover": {
      backgroundColor: "#A38F98",
      color: "white",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "-5.3rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-5rem",
    },
  },
}));
