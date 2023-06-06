import React, { useState } from "react";

import "./style.scss";

const Pagination = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePageNumberClick = (index, event) => {
    event.preventDefault();
    setActiveIndex(index);
  };

  return (
    <div className="page-container">
      <div className="pagination">
        {[1, 2, "Next"].map((pageNumber, index) => (
          <a
            key={index}
            href="#"
            className={`page-number ${index === activeIndex ? "active" : ""}`}
            onClick={(event) => handlePageNumberClick(index, event)}
          >
            <span>{pageNumber}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
