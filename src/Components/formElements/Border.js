import React from "react";

const ButtonBorder = ({ setButtonStyle, units }) => {
  let width, unit, color, style;
  let borderStyle = [
    "solid",
    "dotted",
    "dashed",
    "double",
    "inset",
    "outset",
    "hidden",
    "none",
  ];

  const getAllValues = () => {
    width = document.querySelector(".border-width").value || "1";
    unit = document.querySelector(".border-unit").value;
    color = document.getElementById("color-picker2").value || "#000000";
    style = document.getElementById("border-style").value;
  };

  const handleChange = (e, attr) => {
    getAllValues();
    attr = e.target.value;
    setButtonBorder();
  };

  const setButtonBorder = () => {
    setButtonStyle((old) => {
      let newState = {
        ...old,
        border: `${width}${unit} ${style} ${color}`,
      };

      return newState;
    });
  };

  return (
    <div>
      <label htmlFor="border">Border: </label>
      <input
        type="number"
        name="border"
        placeholder="1"
        className="border-width"
        onChange={(e) => handleChange(e, width)}
      />
      <select
        id="unit"
        className="border-unit"
        name="unit"
        onChange={(e) => handleChange(e, unit)}
      >
        {units.map((e) => {
          return (
            <option key={e} value={e}>
              {e}
            </option>
          );
        })}
      </select>
      <select
        id="border-style"
        name="border-style"
        onChange={(e) => handleChange(e, style)}
      >
        {borderStyle.map((e) => {
          return (
            <option key={e} value={e}>
              {e}
            </option>
          );
        })}
      </select>
      <input
        type="color"
        id="color-picker2"
        defaultValue="#000000"
        onChange={(e) => handleChange(e, color)}
      />
    </div>
  );
};

export default ButtonBorder;
