import React from "react";
import "./card.css";
import patternDivider from "../assets/pattern-divider.svg";
import iconDice from "../assets/icon-dice.svg";
import { useState, useEffect } from "react";

const Card = () => {
  const URL = "https://api.adviceslip.com/advice";
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setContent(data.slip);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="card">
      <div className="number">{content.id}</div>
      <div className="advice">{content.advice} </div>
      <div className="wrapper">
        <img src={patternDivider} alt="divider image" />
        <button onClick={fetchData}>
          <img src={iconDice} alt="dice icon image" />
        </button>
      </div>
    </div>
  );
};

export default Card;
