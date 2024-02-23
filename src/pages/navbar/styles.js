import { Button, IconButton } from "@mui/material";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appbar: {
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.primary.main,
  },

  navdiv: {
    width: "50%",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },

  navlist: {
    listStyle: "none",
    fontSize: "1em",
  },

  navlink: {
    textDecoration: "none",
    cursor: "pointer",
    padding: theme.spacing(1.9),
    color: "lightgray",
  },

  navseconddiv: {
    width: "50%",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "end",
  },

  text: {
    display: "inline",
    fontSize: "1em",
    color: "lightgray",
  },
}));

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "white",
  color: "black",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
}));

export const BlurredIconButton = styled(IconButton)({
  padding: ".5rem",
  marginRight: "2rem",
  backdropFilter: "invert(10%)",
  color: "white",
  transition: "backdrop-filter 0.3s ease",
  "&:hover": {
    backdropFilter: "invert(30%)",
  },
});
