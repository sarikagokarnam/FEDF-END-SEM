import React from "react";

const Input = ({ placeholder, width, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      style={{
        padding: "10px",
        width: width,
        border: "1px solid gray",
        borderRadius: "6px"
      }}
    />
  );
};

export default Input;
