import React, { useState } from "react";
import { Button, CircularProgress } from "@material-ui/core";

import "./style.css";
import { categoryItems } from "../../shared/data";

const Menu = () => {
  const [loading, setIsLoading] = useState(false);
  const [activeButton, setActiveButton] = useState("Thali");

  const handleButtonClick = (category) => {
    setIsLoading(true);
    setActiveButton(category);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const items = categoryItems[activeButton];

  return (
    <div>
      <div className="buttons-container">
        <Button
          variant={activeButton === "Thali" ? "contained" : "outlined"}
          color="primary"
          onClick={() => handleButtonClick("Thali")}
        >
          Thali
        </Button>

        <Button
          variant={activeButton === "Biryani" ? "contained" : "outlined"}
          color="primary"
          onClick={() => handleButtonClick("Biryani")}
        >
          Biryani
        </Button>

        <Button
          variant={activeButton === "DrinksSnaks" ? "contained" : "outlined"}
          color="primary"
          onClick={() => handleButtonClick("DrinksSnaks")}
        >
          Drinks & Snaks
        </Button>

        <Button
          variant={activeButton === "Pizza" ? "contained" : "outlined"}
          color="primary"
          onClick={() => handleButtonClick("Pizza")}
        >
          Pizza
        </Button>

        <Button
          variant={activeButton === "Noodles" ? "contained" : "outlined"}
          color="primary"
          onClick={() => handleButtonClick("Noodles")}
        >
          Noodles
        </Button>

        <Button
          variant={activeButton === "Burgers" ? "contained" : "outlined"}
          color="primary"
          onClick={() => handleButtonClick("Burgers")}
        >
          Burgers
        </Button>

        <Button
          variant={activeButton === "NonVeg" ? "contained" : "outlined"}
          color="primary"
          onClick={() => handleButtonClick("NonVeg")}
        >
          Non-Veg
        </Button>
      </div>

      <div className="items-container">
        {loading ? (
          <CircularProgress />
        ) : (
          items.map((item, index) => (
            <div key={index} className="item">
              <img src={item.image} alt={item.name} />
              <Button variant="contained" color="primary">
                {item.name}
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Menu;
