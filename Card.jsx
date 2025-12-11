import React from "react";

const Card = ({ title, content, bg }) => {
  return (
    <div
      style={{
        backgroundColor: bg,
        padding: "20px",
        borderRadius: "12px",
        width: "250px",
        margin: "10px",
        color: "#000"
      }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
