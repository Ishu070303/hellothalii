import { AppBar, Box, IconButton, Typography } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { navbar_list } from "../../shared/data";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Logo from "../../assets/logo/logo.png";
import { BlurredIconButton, ColorButton, useStyles } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const classes = useStyles();

  return (
    <Box sx={{ width: "100vw" }}>
      <AppBar position="static" className={classes.appbar}>
        <Box
          sx={{
            display: "flex",
            height: "50%",
            width: "90%",
            m: "auto",
            justifyContent: 'space-between'
          }} 
        >
          <div className={classes.navdiv}>
            <img alt="logo" src={Logo} width={40} height={40} />
            <ul className={classes.navul}>
              {navbar_list.map((listname) => (
                <li className={classes.navlist} key={listname.id}>
                  <a
                    className={classes.navlink}
                    href={`${listname.name.toLowerCase()}`}
                  >
                    {listname.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.navseconddiv}>
            <LocalPhoneOutlinedIcon
              sx={{ marginRight: ".5rem", color: "lightgray" }}
              className={classes.phoneIcon}
            />
            <Typography
              sx={{ marginRight: "2rem" }}
              className={classes.text}
              component={"li"}
            >
              +91 8003357044
            </Typography>
            <BlurredIconButton>
              <ShoppingCartRoundedIcon fontSize="small" />
            </BlurredIconButton>
            <BlurredIconButton>
              <SearchRoundedIcon fontSize="small" />
            </BlurredIconButton>

            <ColorButton variant="contained">Login</ColorButton>
          </div>
          <IconButton className="menuIcon">
            <MenuIcon />
          </IconButton>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;
