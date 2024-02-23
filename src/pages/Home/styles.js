import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  text1: {
    fontSize: "4.5em",
    lineHeight: "6rem",
    color: "white",
    paddingTop: theme.spacing(20),
    [theme.breakpoints.down('sm')]: {
        fontSize: '2.7rem',
        lineHeight: "3.5rem",
    }
  },
}));
