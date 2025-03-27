import React, { useState } from "react";
import "./Collapse.css";
import chevron from "../../assets/chevron-up-solid.svg";

const Collapse = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="dropdownWrapper">
      <div className="dropdown">
        <p className="dropdownTitle">{props.title}</p>
        <img
          className={`chevron ${!isCollapsed ? "rotate" : ""}`}
          onClick={() => setIsCollapsed(!isCollapsed)}
          src={chevron}
          alt="Déplier"
        />
      </div>
      <div className={`dropdownOpen ${!isCollapsed ? "open" : ""}`}>
        {!isCollapsed && (
          <div className="dropdownSubtitle">{props.subtitle}</div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
