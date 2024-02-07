import React from "react";
import { useState } from "react";

const Button = ({ bgColor }) => {
  const [color, setColor] = useState("olive");
  return (
    <button
      className="outline -none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: bgColor }}
      onClick={() => setColor(bgColor)}
    >
      {bgColor}
    </button>
  );
};

export default Button;
