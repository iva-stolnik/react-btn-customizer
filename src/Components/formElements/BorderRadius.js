import React from "react";

const BorderRadius = ({ setButtonStyle, units }) => {
  let unit, width;

  //border radius value change
  const handleBorderRadiusWidthChange = (e) => {
    unit = document.querySelector(".border-radius-unit").value;
    width = e.target.value;
    setTextDecoration();
  };

  //border radius unit change
  const handleUnitChange = (e) => {
    unit = e.target.value;
    width = document.querySelector(".border-radius-value").value || "5";

    setTextDecoration();
  };

  const setTextDecoration = () => {
    setButtonStyle((old) => {
      let newState = {
        ...old,
        borderRadius: width + unit,
      };

      return newState;
    });
  };

  return (
    <div>
      <label htmlFor="border-radius">Border-radius: </label>
      <input
        type="number"
        name="border-radius"
        placeholder="5"
        className="border-radius-value"
        onChange={handleBorderRadiusWidthChange}
      />
      <select
        id="border-radius-unit"
        className="border-radius-unit"
        name="unit"
        onChange={handleUnitChange}
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

export default BorderRadius;
