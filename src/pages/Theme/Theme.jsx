import React, { useState } from "react";
import data from "../../assets/Data/Data";

import Item from "./component/Item";
import ThemePopup from "./component/ThemePopup/ThemePopup";
import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
import Navbar from "../../components/Navbar/Navbar";
import BackToTop from "../../components/BackToTop/BackToTop";

import "../../assets/Icon/iconfont.css";
import "./style.scss";

const Theme = () => {
  const [img, setImg] = useState();
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Header title="風格" />
      <Navbar />
      <div className="theme-container">
        {data.map((item, index) => (
          <Item
            key={index}
            productId={item.id}
            image={item.image}
            title={item.title}
            content={item.content}
            setImg={setImg}
            setVisible={setVisible}
          />
        ))}
      </div>
      <Pagination />
      <ThemePopup
        img={img}
        visible={visible}
        setVisible={setVisible}
        setImg={setImg}
      />
      <BackToTop />
    </>
  );
};

export default Theme;
