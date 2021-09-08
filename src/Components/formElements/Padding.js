import React from "react";

const ButtonPadding = ({ setButtonStyle, units }) => {
  let unit, width;

  //width change
  const handlePaddingChange = (e) => {
    unit = document.getElementById("paddingUnit").value;
    width = e.target.value;

    setButtonPadding();
  };

  //unit change
  const handlePaddingUnitChange = (e) => {
    width = document.querySelector(".padding-value").value || "0";
    unit = e.target.value;

    setButtonPadding();
  };

  const setButtonPadding = () => {
    setButtonStyle((old) => {
      let newState = { ...old, padding: width + unit };
      return newState;
    });
  };

  return (
    <div>
      <label htmlFor="padding">Padding: </label>
      <input
        type="number"
        name="padding"
        className="padding-value"
        placeholder="16"
        onChange={handlePaddingChange}
      />
      <select
        id="paddingUnit"
        name="paddingUnit"
        onChange={handlePaddingUnitChange}
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

export default ButtonPadding;
