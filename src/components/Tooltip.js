import React, { useState } from "react";
import "./../styles/Tooltip.css";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);
        // console.log(children);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <span className="tooltiptext">{text}</span>}
      
    </div>
  );
}

export default Tooltip;
