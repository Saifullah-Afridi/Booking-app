import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import "./Hotels.css";
const Hotels = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotels-container">
        <div className="hotels-wrapper">
          <div className="hotels-wrapper-search">
            <h1 className="hotels-wrapper-search-title">Search</h1>
            <div className="hotels-wrapper-search-item">
              <label htmlFor="Desitination"></label>
              <input type="text" name="" id="" />
            </div>
            <div className="hotels-wrapper-search-item">
              <label htmlFor="">Check-in date</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="hotels-wrapper-result"></div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
