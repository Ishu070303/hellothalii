import { Button, IconButton } from "@mui/material";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({}));

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "white",
  color: "black",
  "&:hover": {
    backgroundColor: "white",
  },
}));

export const BlurredIconButton = styled(IconButton)({
  padding: ".5rem",
  marginRight: "2rem",
  backdropFilter: "invert(10%)",
  color: "white",
  transition: "backdrop-filter 0.3s ease",
  '&:hover': {
    backdropFilter: "invert(30%)",
  }
  
});
