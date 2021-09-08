import React from "react";

const Fonts = ({ setButtonStyle, buttonStyle, units }) => {
  let size, unit;

  //toggle dropdown visibility
  const handleFontClick = () => {
    let dropdown = document.querySelector(".font-family-dropdown");
    dropdown.classList.toggle("font-dropdown-visible");
  };

  //font family change
  const handleFontFamilyChange = (e) => {
    setButtonStyle((old) => {
      let newState = { ...old, fontFamily: `\n\t ${e.target.value}` };
      return newState;
    });
  };

  //font size change
  const handleFontSizeChange = (e) => {
    unit = document.getElementById("font-size-unit").value;
    size = e.target.value;
    setFontSize();
  };

  //font size unit change
  const handleUnitChange = (e) => {
    size = document.getElementById("font-size-input").value || "0";
    unit = e.target.value;

    setFontSize();
  };

  //font weight change
  const handleFontWeightSlider = (e) => {
    setButtonStyle((old) => {
      let newState = { ...old, fontWeight: e.target.value };
      return newState;
    });
  };

  const setFontSize = () => {
    setButtonStyle((old) => {
      let newState = { ...old, fontSize: size + unit };
      return newState;
    });
  };

  return (
    <div>
      <h4 className="font-before" onClick={handleFontClick}>
        Fonts &nbsp;
      </h4>
      <div className="font-dropdown font-family-dropdown">
        <br />
        <label htmlFor="font-family">Font family: </label>
        <select
          id="font-family"
          name="font-family"
          onChange={handleFontFamilyChange}
        >
          <option value="'Times New Roman', serif">Serif</option>
          <option value="cursive">Cursive</option>
          <option value="'Segoe UI', sans-serif">San serif</option>
          <option value="'Courier New', monospace">Monospace</option>
          <option value="fantasy">Fantasy</option>
        </select>
        <br />
        <br />

        <label htmlFor="font-size">Font size: </label>
        <input
          type="number"
          name="font-size"
          id="font-size-input"
          placeholder="16"
          onChange={handleFontSizeChange}
        />
        <select
          id="font-size-unit"
          className="font-size-unit"
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

        <br />
        <br />
        <label htmlFor="font-weight">
          Font weight <small>({buttonStyle.fontWeight})</small>:&nbsp;
        </label>
        <input
          type="range"
          name="font-weight"
          min="100"
          max="900"
          value={buttonStyle.fontWeight}
          className="slider"
          onChange={handleFontWeightSlider}
          step={100}
        />
      </div>
    </div>
  );
};

export default Fonts;
