import React from "react";
import "./Banner.css";

function Banner(props) {
  return (
    <div className="banner">
      <img className="bannerImage" src={props.img} alt="bannière" />
      {props.title && <span className="bannerTitle">{props.title}</span>}
    </div>
  );
}

export default Banner;
