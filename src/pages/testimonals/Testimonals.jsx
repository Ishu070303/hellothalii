import { Avatar, Card, Typography } from "@mui/material";
import { testimonals } from "../../shared/data";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import TestimonalImage from "../../assets/avatars/testimonal_girl.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonals = () => {

  const settings = {
    dots: true,
    infinte: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonals">
      <div className="testimonals_first_child">
        <Slider className="slider" {...settings}>
          {testimonals.map((data) => (
            <Card key={data.id} className="testimonals_card">
              <div className="testimonals_card_first_child">
                <div className="testimonal_quote">
                  <FormatQuoteIcon />
                </div>
                <Typography
                  className="testimonals_card_first_p"
                  component={"p"}
                >
                  "{data.description}"
                </Typography>
              </div>
              <div className="testimonals_card_second_child">
                {data.image === "monika" && (
                  <Avatar className="testimonal_image" src={TestimonalImage} />
                )}
                <Typography className="text_first" component={"p"}>
                  {data.name}
                </Typography>
                <span>-</span>
                <Typography className="text_second" component={"p"}>
                  {data.designation}
                </Typography>
              </div>
            </Card>
          ))}
        </Slider>
      </div>

      <svg
        className="curvy"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#A38F98"
          fillOpacity="1"
          d="M0,96L48,128C96,160,192,224,288,224C384,224,480,160,576,128C672,96,768,96,864,128C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Testimonals;
