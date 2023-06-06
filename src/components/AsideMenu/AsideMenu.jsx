import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import { asideMenu } from "../../assets/Data/Data";

import "./style.scss";

const AsideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="aside-menu ">
        <ul className={`menu-items ${isOpen ? "open" : ""}`}>
          {asideMenu.map((item, index) => (
            <li className="menu-item" key={index}>
              <Link to={item.url}>{item.content}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-footer">
          <p>boxing club</p>
        </div>
      </div>

      <div className={`sidebar my-4 ${isOpen ? "active" : ""}`}>
        <div className="sidebar-items">
          <ul>
            {asideMenu.map((item, index) => (
              <li className="menu-item" key={index}>
                <Link to={item.url}>{item.content}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`toggle ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default AsideMenu;
