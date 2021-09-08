import React from "react";
import ButtonText from "./formElements/innerBtnText";
import ButtonMargin from "./formElements/Margin";
import ButtonPadding from "./formElements/Padding";
import ButtonBorder from "./formElements/Border";
import BorderRadius from "./formElements/BorderRadius";
import Cursor from "./formElements/Cursor";
import BackgroundColor from "./formElements/BackgroundColor";
import Fonts from "./formElements/Fonts";
import ButtonType from "./htmlAttributes/ButtonType";
import Text from "./formElements/Text";

const Custominput = ({ setButtonStyle, buttonStyle }) => {
  let units = ["px", "em", "rem", "%", "vw", "vh"];

  return (
    <div className="input-container">
      <form action="">
        <ButtonText setButtonStyle={setButtonStyle} />
        <br />
        <ButtonType setButtonStyle={setButtonStyle} buttonStyle={buttonStyle} />
        <br />
        <BackgroundColor setButtonStyle={setButtonStyle} />
        <br />
        <Text setButtonStyle={setButtonStyle} />
        <br />
        <Fonts
          setButtonStyle={setButtonStyle}
          buttonStyle={buttonStyle}
          units={units}
        />
        <br />
        <ButtonMargin setButtonStyle={setButtonStyle} units={units} />
        <br />
        <ButtonPadding setButtonStyle={setButtonStyle} units={units} />
        <br />
        <ButtonBorder setButtonStyle={setButtonStyle} units={units} />
        <br />
        <BorderRadius setButtonStyle={setButtonStyle} units={units} />
        <br />
        <Cursor setButtonStyle={setButtonStyle} />
        <br />
      </form>
    </div>
  );
};

export default Custominput;
