import React from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

import "./style.scss";

const BackToTop = () => {
  const handleOnClick = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="back-To-Top">
      <FaRegArrowAltCircleUp size={50} onClick={handleOnClick} />
    </div>
  );
};

export default BackToTop;
