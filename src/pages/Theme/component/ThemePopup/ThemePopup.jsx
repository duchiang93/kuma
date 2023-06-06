import React from "react";

import "./style.scss";

const ThemePopup = ({ img, visible, setVisible, setImg }) => {
  return (
    <div className={`theme-popup ${visible ? "visible" : ""}`}>
      <img src={img}></img>
      <div
        className="close-icon"
        onClick={() => {
          setVisible(false);
          setImg("");
        }}
      >
        <div className="circle">
          <div className="cross"></div>
        </div>
      </div>
    </div>
  );
};

export default ThemePopup;
