import React from "react";

const ButtonText = ({ setButtonStyle }) => {
  //update state when button text is changed
  const handleTextChange = (e) => {
    setButtonStyle((old) => {
      let newState = { ...old, text: e.target.value };
      return newState;
    });
  };

  return (
    <div>
      <label htmlFor="button-text">Text: </label>
      <input
        type="text"
        name="button-text"
        placeholder="Click me!"
        onChange={handleTextChange}
      />
    </div>
  );
};

export default ButtonText;
