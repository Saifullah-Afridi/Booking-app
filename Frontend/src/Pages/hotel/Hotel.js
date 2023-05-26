import React from "react";
import "./Hotel.css";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotel-container">
        <div className="hotel-wrapper">
          <h1 className="hotel-title">Grand hotel</h1>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
