import React from "react";

const BackgroundColor = ({ setButtonStyle }) => {
  const handleColorChange = (e) => {
    setButtonStyle((old) => {
      let newState = {
        ...old,
        backgroundColor: e.target.value,
      };

      return newState;
    });
  };

  return (
    <div>
      <label htmlFor="color">Background color: </label>
      <input
        type="color"
        id="color-picker"
        defaultValue="#ededed"
        onChange={handleColorChange}
      />
    </div>
  );
};

export default BackgroundColor;
