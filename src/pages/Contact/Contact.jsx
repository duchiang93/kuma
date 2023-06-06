import React from "react";

import Header from "../../components/Header/Header";

import "./style.scss";

const Contact = () => {
  return (
    <>
      <Header title="聯絡我們" />
      <div className="contact">
        <div className="contact-text">
          專業是我們的基礎、質感是我們的堅持、聆聽您的需求是我們的榮幸、酷碼在此期待與您共同開發
        </div>
        <form className="contact-form">
          <div className="input-box">
            <label htmlFor="name">姓名(必填)</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input-box">
            <label htmlFor="gender">稱謂</label>
            <select name="gender" id="gender">
              <option value="male">男生</option>
              <option value="female">女生</option>
            </select>
          </div>
          <div className="input-box">
            <label htmlFor="email">電子郵件(必填)</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-box">
            <label htmlFor="subject">主旨</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="input-box">
            <label htmlFor="message">留言</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">傳送</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
