import React from "react";

const ButtonType = ({ setButtonStyle, buttonStyle }) => {
  //toggle dropdown visibility
  const handleAttrClick = () => {
    let dropdown = document.querySelector(".btn-type-dropdown");
    dropdown.classList.toggle("font-dropdown-visible");
  };

  //change button type
  const handleBtnTypeChange = (e) => {
    let buttonType = `type="${e.target.value}" `;

    setButtonStyle((old) => {
      let newState = { ...old, HTMLtypeAttribute: buttonType };
      return newState;
    });
    console.log(buttonStyle);
  };

  //drag and drop events
  const drag = (e) => {
    let attribute = e.target.getAttribute("name");

    //handle empty entery for VALUE attr
    if (attribute === "value") return;

    //handle multiple value enteries if it already exist in state
    if (
      buttonStyle.HTMLotherAttributes.includes("value") &&
      attribute.includes("value")
    )
      return;

    e.dataTransfer.setData("text", `${attribute} `);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const drop = (e) => {
    e.preventDefault();

    let data = e.dataTransfer.getData("text");
    let itemClass = data;
    let inputValueField = document.getElementById("input-value-attr");
    let element;

    if (data === "") return;
    //change data into specific class if starts with one of keywords below
    if (data.startsWith("value")) {
      itemClass = "value";
    }
    if (data.startsWith("method: 'get'")) {
      itemClass = "get";
    }
    if (data.startsWith("method: 'post'")) {
      itemClass = "post";
    }

    //changing style and attr "draggable" for dropped item
    //post/get attr - disable other if one is dropped
    if (data.startsWith("method: 'post'")) {
      let secondElem = document.querySelector(`.get`);
      secondElem.style = "color:grey";
      secondElem.setAttribute("draggable", false);
    }
    if (data.startsWith("method: 'get'")) {
      let secondElem = document.querySelector(`.post`);
      secondElem.style = "color:grey";
      secondElem.setAttribute("draggable", false);
    }
    element = document.querySelector(`.${itemClass}`);
    element.style = "color:red";
    element.setAttribute("draggable", false);

    //disable input field when attr "value" is dropped
    if (element.className === "value") {
      inputValueField.disabled = true;
    }

    //style for drop area after first drop
    e.target.style = "background-color: white; padding: 0.2em;";

    //if there are multiple attributes add them together in 1 string
    if (buttonStyle.HTMLotherAttributes !== "") {
      data = buttonStyle.HTMLotherAttributes += data;
    }

    setButtonStyle((old) => {
      let newState = { ...old, HTMLotherAttributes: data };
      return newState;
    });
  };

  //value field change (value="xyz")
  const handleInputValuAttrChange = (e) => {
    let attrElement = document.getElementById("input-value-attr").parentElement;
    let attr = `value="${e.target.value}"`;

    attrElement.setAttribute("name", attr);
  };

  //reset all
  const handleResetAttributes = () => {
    let container = document.getElementById("other-attributes").childNodes;
    let inputValueField = document.getElementById("input-value-attr");

    container.forEach((element, i) => {
      //reset style and attr for all children but last (which is "reset" button)
      if (i === container.length - 1) return;

      //reset color and draggable attr
      element.style = "color:black";
      element.setAttribute("draggable", true);

      //reset disabled on input field and clear input field
      inputValueField.disabled = false;

      //reset value for name attr
      if (element.className === "value") {
        element.setAttribute("name", "value");
      }
      inputValueField.value = "";
    });
    //reset state
    setButtonStyle((old) => {
      let newState = { ...old, HTMLtypeAttribute: "", HTMLotherAttributes: "" };
      return newState;
    });
  };
  return (
    <div>
      <h4 className="font-before" onClick={handleAttrClick}>
        Add attributes &nbsp;
      </h4>
      <div className="font-dropdown btn-type-dropdown">
        <br />
        <label htmlFor="btn-type">Type: &nbsp;</label>
        <select id="btn-type" name="btn-type" onChange={handleBtnTypeChange}>
          <option value="submit">submit</option>
          <option value="button">button</option>
          <option value="reset">reset</option>
        </select>
        <br />
        <br />
        <label htmlFor="other-attributes">Other: </label>
        <div
          type="text"
          name="other-attributes"
          id="input-attributes"
          value="test"
          onDrop={drop}
          onDragOver={allowDrop}
        >
          {buttonStyle.HTMLotherAttributes}
        </div>
        <div id="other-attributes">
          <div
            name="autofocus"
            draggable="true"
            className="autofocus"
            onDragStart={drag}
          >
            autofocus
          </div>
          <div
            name="disabled"
            draggable="true"
            className="disabled"
            onDragStart={drag}
          >
            disabled
          </div>
          <div
            name="formnovalidate"
            draggable="true"
            className="formnovalidate"
            onDragStart={drag}
          >
            formnovalidate
          </div>
          <div
            name="method: 'get'"
            draggable="true"
            className="get"
            onDragStart={drag}
          >
            get
          </div>
          <div
            name="method: 'post'"
            draggable="true"
            className="post"
            onDragStart={drag}
          >
            post
          </div>
          <div
            name="value"
            draggable="true"
            className="value"
            onDragStart={drag}
          >
            value:
            <input
              type="text"
              id="input-value-attr"
              onChange={handleInputValuAttrChange}
            />
          </div>
          <div className="reset-attributes">
            <div onClick={handleResetAttributes}>Reset</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonType;
