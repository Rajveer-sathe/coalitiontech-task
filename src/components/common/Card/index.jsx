import React from "react";
import "./index.css";

function Card({ child, width, height, padding }) {
  return (
    <div
      className="card"
      style={{ width: `${width}`, height: `${height}`, padding: `${padding}` }}
    >
      {child}
    </div>
  );
}

export default Card;
