import React from "react";

const CustomResult = ({ buttonStyle }) => {
  let style = {
    margin: buttonStyle.margin,
    padding: buttonStyle.padding,
    border: buttonStyle.border,
    borderRadius: buttonStyle.borderRadius,
    color: buttonStyle.color,
    backgroundColor: buttonStyle.backgroundColor,
    cursor: buttonStyle.cursor,
    fontFamily: buttonStyle.fontFamily,
    fontWeight: buttonStyle.fontWeight,
    fontSize: buttonStyle.fontSize,
    textDecoration: buttonStyle.textDecoration,
  };
  return (
    <div className="result-container">
      <button style={style}>{buttonStyle.text}</button>
    </div>
  );
};

export default CustomResult;
