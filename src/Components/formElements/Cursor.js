import React from "react";

const Cursor = ({ setButtonStyle }) => {
  let borderStyle = ["pointer", "default", "help", "wait", "none"];

  const handleCursorChange = (e) => {
    setButtonStyle((old) => {
      let newState = { ...old, cursor: e.target.value };
      return newState;
    });
  };

  return (
    <div>
      <label htmlFor="cursor">Cursor: </label>
      <select id="cursor" name="cursor" onChange={handleCursorChange}>
        {borderStyle.map((e) => {
          return (
            <option key={e} value={e}>
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Cursor;
