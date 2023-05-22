import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://story.com.pk/wp-content/uploads/2020/07/24141e0e596c3e34fc7dd41a45bb39a4.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Peshawar</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://story.com.pk/wp-content/uploads/2020/07/24141e0e596c3e34fc7dd41a45bb39a4.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Islamabad</h1>
          <h2>222 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://story.com.pk/wp-content/uploads/2020/07/24141e0e596c3e34fc7dd41a45bb39a4.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Lahore</h1>
          <h2>444 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
