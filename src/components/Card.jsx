import React from "react";
import "./card.css";
import patternDivider from "../assets/pattern-divider.svg";
import iconDice from "../assets/icon-dice.svg";

const Card = () => {
  return (
    <div className="card">
      <div className="number">#61 Advice</div>
      <div className="advice">Text of advice </div>
      <div className="wrapper">
        <img src={patternDivider} alt="divider image" />
        <button>
          <img src={iconDice} alt="dice icon image" />
        </button>
      </div>
    </div>
  );
};

export default Card;
