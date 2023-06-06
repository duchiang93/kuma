import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import BackToTop from "../../components/BackToTop/BackToTop";
import Header from "../../components/Header/Header";

import data from "../../assets/Data/Data";

import "./style.scss";
import "../../assets/Icon/iconfont.css";

const Portfolio = () => {
  const { productId } = useParams();
  const [showImg, setShowImg] = useState(0);
  const { title, detail } = data[productId];
  return (
    <>
      <Header title="風格" subTitle={title} />
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6 d-flex ">
            <img
              src={detail.preImg[showImg]}
              alt={title}
              className="img-fluid detail-img"
            />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column">
            <div className="detail-container">
              <div className="arrow-group">
                <div
                  className="arrow"
                  onClick={() => {
                    if (showImg <= 0) {
                      setShowImg(detail.preImg.length - 1);
                    } else setShowImg(showImg - 1);
                  }}
                >
                  <i className="iconfont">&#xe611;</i>
                </div>
                <div
                  className="arrow"
                  onClick={() => {
                    if (showImg >= detail.preImg.length - 1) {
                      setShowImg(0);
                    } else setShowImg(showImg + 1);
                  }}
                >
                  <i className="iconfont">&#xe64a;</i>
                </div>
              </div>
              <div className="mb-2 mx-3">
                <h2 className="fw-bold">{detail.title}</h2>
                <hr />
              </div>
              <ul>
                {detail.feature.map((item, index) => {
                  return (
                    <li key={index} className="feature-items">
                      {item}
                    </li>
                  );
                })}
              </ul>

              <div className="category-group">
                <i className="iconfont">&#xe607;</i>
                <div>
                  <h5 className="category-title">模板需求分類</h5>
                  <div className="category">{detail.category}</div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="row mt-1 ">
              <div className="col-12 col-md-6">
                {detail.preImg.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt={title}
                    className="img-fluid pre-img mx-2 mb-4 pointer"
                    onClick={() => setShowImg(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h3>Related Products</h3>
            <div className="row mt-3">
              {detail.related.map((relatedProduct, index) => (
                <div className="col-12 col-md-3" key={index}>
                  <Link
                    to={`/portfolio/${relatedProduct.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="card mb-4 h-100">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.title}
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{relatedProduct.title}</h5>
                        <p className="card-text">{relatedProduct.content}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default Portfolio;
