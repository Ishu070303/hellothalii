import { Link, Typography } from "@material-ui/core";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const icons = [
    {
      id: 1,
      icon: <GitHubIcon />,
    },

    {
      id: 2,
      icon: <TwitterIcon />,
    },

    {
      id: 3,
      icon: <InstagramIcon />,
    },

    {
      id: 4,
      icon: <LinkedInIcon />,
    },
  ];

  return (
    <div className="footer">
      <div className="footer_div">
        <div className="footer_first_div">
          <Typography className="footer_first_texth6" variant="h6">
            About Us!
          </Typography>
          <Typography className="footer_first_textp" component={"p"}>
            HelloThali delivers fresh, authentic thalis straight to your door.✅
            Affordable weekly/monthly plans, diverse menus, cooked with love.
            Say goodbye to kitchen chaos, hello to stress-free flavor! Join us &
            simplify your life, one delicious thali at a time ➡️
          </Typography>
        </div>
        <div className="footer_second_div">
          <div style={{ display: "flex" }}>
            <LocalPhoneIcon className="footer_icon" />
            <Link className="footer_second_link">
              <Typography className="footer_second_textp1" component={"p"}>
                +91 8003357044
              </Typography>
            </Link>
          </div>
          <div style={{ display: "flex", marginTop: ".2rem" }}>
            <EmailIcon className="footer_icon" />
            <Link className="footer_second_link">
              <Typography className="footer_second_textp1" component={"p"}>
                support@hellothali.com
              </Typography>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "1rem",
              justifyContent: "space-between",
            }}
          >
            {icons.map((icon) => (
              <Link className="footer_link" key={icon.id}>
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="footer_last">
        <Typography className="footer_last_text" component={"p"}>
          Copyright © Hellothali
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
