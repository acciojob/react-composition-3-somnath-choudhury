
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div id="main" style={{ padding: "50px" }}>
      

      <Tooltip text="This is a tooltip">
        <button>Hover over me</button>
      </Tooltip>

      <Tooltip text="This is another tooltip">
        <button>Hover over me to see another tooltip</button>
      </Tooltip>

      
    </div>
  )
}

export default App
