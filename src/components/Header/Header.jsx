import React from "react";

import "./style.scss";

const Header = ({ title, subTitle }) => {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="header-text1">{title}</h1>
        <p className="header-text2">
          Home &gt; {title} {`${subTitle ? "> " + subTitle : ""}`}
        </p>
      </div>
    </div>
  );
};

export default Header;
