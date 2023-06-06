import React, { useState } from "react";

import { navItem } from "../../assets/Data/Data";

import "./style.scss";

const Navbar = () => {
  const MenuItem = ({ label, active, onClick }) => {
    return (
      <a href="#">
        <div className="item" onClick={onClick}>
          <p className={` ${active ? "active" : ""} `}>{label}</p>
        </div>
      </a>
    );
  };
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMenuItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="nav-bar">
      <div className="top-menu d-flex">
        {navItem.map((item, index) => {
          return (
            <MenuItem
              key={index}
              label={item}
              active={activeIndex === index}
              className="menu-item"
              onClick={() => handleMenuItemClick(index)}
            />
          );
        })}
        <div
          className="menu-item-border"
          style={{ "--active-index": activeIndex }}
        />
      </div>
    </div>
  );
};

export default Navbar;
