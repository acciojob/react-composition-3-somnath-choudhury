
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <Tooltip text="This is an H2 tooltip">
        <h2>Hover over me!</h2>
      </Tooltip>
      <Tooltip text="This is a paragraph tooltip">
        <p>Hover over this too!</p>
      </Tooltip>
    </div>
  )
}

export default App
