import React from "react";

const ButtonMargin = ({ setButtonStyle, units }) => {
  let width, unit;
  //width change
  const handleMarginChange = (e) => {
    width = e.target.value;
    unit = document.getElementById("marginUnit").value;

    setMargin();
  };

  //unit change
  const handleMarginUnitChange = (e) => {
    width = document.querySelector(".margin-value").value || "0";
    unit = e.target.value;

    setMargin();
  };

  const setMargin = () => {
    setButtonStyle((old) => {
      let newState = { ...old, margin: width + unit };
      return newState;
    });
  };

  return (
    <div>
      <label htmlFor="margin">Margin: </label>
      <input
        type="number"
        name="margin"
        className="margin-value"
        placeholder="0"
        onChange={handleMarginChange}
      />
      <select
        id="marginUnit"
        name="marginUnit"
        onChange={handleMarginUnitChange}
      >
        {units.map((e) => {
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

export default ButtonMargin;
