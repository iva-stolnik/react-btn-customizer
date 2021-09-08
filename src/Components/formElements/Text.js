import React from "react";

const Text = ({ setButtonStyle }) => {
  let txtStyle, txtColor, txtLine;
  let textStyles = ["solid", "dotted", "dashed", "double"];
  let textLines = ["none", "underline", "overline", "line-through"];

  //toggle dropdown visibility
  const handleTextClick = () => {
    let dropdown = document.querySelector(".text-style-dropdown");
    dropdown.classList.toggle("font-dropdown-visible");
  };

  //text color change
  const handleTextColorChange = (e) => {
    setButtonStyle((old) => {
      let newState = {
        ...old,
        color: e.target.value,
      };

      return newState;
    });
  };

  //text decoration line change
  const handleDecorLineChange = (e) => {
    txtStyle = document.getElementById("txt-decoration-style");
    txtColor = document.getElementById("txt-decoration-color");
    txtLine = e.target.value;

    //when line is "none", hide all other attributes
    if (e.target.value === "none") {
      txtStyle.classList.add("hidden");
      txtColor.classList.add("hidden");

      setButtonStyle((old) => {
        let newState = {
          ...old,
          textDecoration: "none",
        };
        return newState;
      });

      return;
    } else {
      txtStyle.classList.remove("hidden");
      txtColor.classList.remove("hidden");
    }
    txtStyle = txtStyle.value;
    txtColor = txtColor.value;
    setTextDecoration();
  };

  //text decoration style or color change
  const handleChange = (e, attr) => {
    getAllValues();
    attr = e.target.value;
    setTextDecoration();
  };

  const setTextDecoration = () => {
    setButtonStyle((old) => {
      let newState = {
        ...old,
        textDecoration: `\n\t${txtLine} ${txtColor} ${txtStyle}`,
      };

      return newState;
    });
  };

  const getAllValues = () => {
    txtLine = document.getElementById("txt-decoration-line").value;
    txtColor = document.getElementById("txt-decoration-color").value;
    txtStyle = document.getElementById("txt-decoration-style").value;
  };

  return (
    <div>
      <h4 className="font-before" onClick={handleTextClick}>
        Text &nbsp;
      </h4>
      <div className="font-dropdown text-style-dropdown">
        <div>
          <label htmlFor="color">Color: </label>
          <input
            type="color"
            id="color-picker"
            defaultValue="#000000"
            onChange={handleTextColorChange}
          />
        </div>
        <br />
        <div>
          Decoration:
          <br />
          <div>
            <select
              id="txt-decoration-line"
              name="txt-decoration-line"
              onChange={handleDecorLineChange}
            >
              {textLines.map((e) => {
                return (
                  <option key={e} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
            <select
              id="txt-decoration-style"
              name="txt-decoration-style"
              className="hidden"
              onChange={(e) => handleChange(e, txtStyle)}
            >
              {textStyles.map((e) => {
                return (
                  <option key={e} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
            <input
              type="color"
              id="txt-decoration-color"
              className="hidden"
              defaultValue="#000000"
              onChange={(e) => handleChange(e, txtColor)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
