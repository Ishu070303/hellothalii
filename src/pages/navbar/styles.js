import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import {  styled } from '@mui/material';
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
}));

export const ColorButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}))