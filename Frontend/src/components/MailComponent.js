import React from "react";
import "./MailComponent.css";

const MailComponent = () => {
  return (
    <div className="mail">
      <h1 className="mail-title">Save Time,Save money</h1>
      <span className="maildescription">
        Sign up and we will send the best deal to you
      </span>
      <div className="mail-container">
        <input
          type="text"
          className="mail-container-input"
          placeholder="Your Email"
        />
        <button className="mail-container-button">Subscribe </button>
      </div>
    </div>
  );
};

export default MailComponent;
