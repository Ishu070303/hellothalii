import { Paper, Typography } from "@mui/material";
import { cards } from "../../shared/data";
import CardImage from "../../assets/images/cardimage.jpg";
import MoneyImage from "../../assets/images/cardmoney.jpg";
import CardBoy from "../../assets/images/cardboy.jpg";

const Cards = () => {
  return (
    <div className="card">
      <div className="carddiv">
        {cards.map((data) => (
          <div className="carddivchild" key={data.id}>
            <Paper className="cardpaper">
              {data.image === "cardimage" && (
                <img src={CardImage} alt="card-image" />
              )}
              {data.image === "cardmoney" && (
                <img src={MoneyImage} alt="card-money-image" />
              )}
              {data.image === "cardboy" && (
                <img src={CardBoy} alt="card-money-image" />
              )}
              <Typography className="cardtypoh5" variant="h5">
                {data.title}
              </Typography>
              <Typography className="cardtypop" component={"p"}>
                {data.description}
              </Typography>
            </Paper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
