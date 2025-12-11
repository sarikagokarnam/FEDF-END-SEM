import React from "react";

const Button = ({ text, color, bg, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: bg,
        color: color,
        borderRadius: "8px",
        border: "none",
        cursor: "pointer"
      }}
    >
      {text}
    </button>
  );
};

export default Button;
