import React from "react";
import { Mycard } from "./second";
import star from "../../assets/images/starsingle.png";
import card1 from "../../assets/images/card1.jpg";
import card2 from "../../assets/images/card2.jpg";
import card3 from "../../assets/images/card3.jpg";
import card4 from "../../assets/images/card4.jpg";
import card5 from "../../assets/images/card5.jpg";
import card6 from "../../assets/images/card6.jpg";
const SecondPage = () => {
  return (
    <Mycard>
      <div>
        <img src={card1} alt="" />
        <span>
          <h1>Leather Court Shoes</h1>
          <p>
            14 reviews <img src={star} alt="" />
          </p>
        </span>
        <h3>$39.00</h3>
      </div>
      <div>
        <img src={card2} alt="" />
        <span>
          <h1>Leather Court Shoes</h1>
          <p>
            14 reviews <img src={star} alt="" />
          </p>{" "}
        </span>
        <h3>$39.00</h3>
      </div>
      <div>
        <img src={card3} alt="" />
        <span>
          <h1>Leather Court Shoes</h1>
          <p>
            14 reviews <img src={star} alt="" />
          </p>{" "}
        </span>
        <h3>$39.00</h3>
      </div>
      <div>
        <img src={card4} alt="" />
        <span>
          <h1>Leather Court Shoes</h1>
          <p>
            14 reviews <img src={star} alt="" />
          </p>{" "}
        </span>
        <h3>$39.00</h3>
      </div>
      <div>
        <img src={card5} alt="" />
        <span>
          <h1>Leather Court Shoes</h1>
          <p>
            14 reviews <img src={star} alt="" />
          </p>{" "}
        </span>
        <h3>$39.00</h3>
      </div>
      <div>
        <img src={card6} alt="" />
        <span>
          <h1>Leather Court Shoes</h1>
          <p>
            14 reviews <img src={star} alt="" />
          </p>{" "}
        </span>
        <h3>$39.00</h3>
      </div>
    </Mycard>
  );
};

export default SecondPage;
