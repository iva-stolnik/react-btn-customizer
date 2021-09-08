import "./App.css";
import { useState } from "react";
import Custominput from "./Components/Custominput";
import CustomResult from "./Components/CustomResult";
import CustomCode from "./Components/CustomCode";

const initialState = {
  text: "Click me!",
  margin: "0px",
  padding: "16px",
  border: "1px solid #000000",
  borderRadius: "5px",
  color: "#000000",
  backgroundColor: "#ededed",
  fontFamily: `\n\t'Times New Roman', serif`,
  fontWeight: "500",
  fontSize: "16px",
  cursor: "pointer",
  HTMLtypeAttribute: "",
  HTMLotherAttributes: "",
  textDecoration: "none",
};

function App() {
  const [buttonStyle, setButtonStyle] = useState(initialState);

  return (
    <div className="App">
      <h1>Button customizer</h1>
      <br />
      <div className="app-container">
        <Custominput
          setButtonStyle={setButtonStyle}
          buttonStyle={buttonStyle}
        />
        <CustomResult buttonStyle={buttonStyle} />
        <CustomCode buttonStyle={buttonStyle} />
      </div>
    </div>
  );
}

export default App;
