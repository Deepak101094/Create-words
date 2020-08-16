import React from "react";
import Button from "./button";
import "./style.css";

//const Alphabets = ["P", "L", "P", "T", "S", "A", "C", "E", "H", "D"];
const Alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const Buttons = ({ handleClick }) => {
  return (
    <div className="buttons">
      {Alphabets.map((alphabet) => (
        <Button alphabet={alphabet} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Buttons;
