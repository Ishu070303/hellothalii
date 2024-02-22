import { AppBar, Box, Typography } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { navbar_list } from "../../shared/data";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Logo from "../../assets/logo/logo.png";
import { BlurredIconButton, ColorButton } from "./styles";

const Navbar = () => {
  return (
    <Box sx={{ width: "100vw" }}>
      <AppBar
        position="static"
        sx={{ padding: "10px", backgroundColor: "#0F5132" }}
      >
        <Box
          sx={{
            display: "flex",
            height: "50%",
            width: "90%",
            m: "auto",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <img alt="logo" src={Logo} width={40} height={40} />
            <ul style={{ display: "flex", marginLeft: "1rem" }}>
              {navbar_list.map((listname) => (
                <li
                  style={{ listStyle: "none", fontSize: "1em" }}
                  key={listname.id}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      padding: "15px",
                      color: "lightgray",
                    }}
                    href={`${listname.name.toLowerCase()}`}
                  >
                    {listname.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <LocalPhoneOutlinedIcon sx={{ marginRight: ".5rem", color: "lightgray" }} />
            <Typography
              sx={{ fontSize: "16px", marginRight: "2rem", color: "lightgray", }}
              variant="h6"
            >
              +91 836218462
            </Typography>
            <BlurredIconButton >
              <ShoppingCartRoundedIcon fontSize="small" />
            </BlurredIconButton>
            <BlurredIconButton>
              <SearchRoundedIcon fontSize="small" />
            </BlurredIconButton>

            <ColorButton variant="contained">Login</ColorButton>
          </div>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;
