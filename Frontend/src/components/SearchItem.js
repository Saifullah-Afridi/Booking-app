import React from "react";
import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="searchitem-container">
      <div className="searchitem-container">
        <img
          src="https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="searchitem-container-img"
        />
        <div className="searchitem-container-description">
          <h1 className="searchitem-container-description-title">
            Tower street Apartment
          </h1>
          <span className="searchitem-container-description-distance">
            50m from center
          </span>
          <span className="searchitem-container-description-taxioption">
            Free Airport taxi
          </span>
          <span className="searchitem-container-description-subtitle">
            Studio Apartment with Air conditionting
          </span>
          <span className="searchitem-container-description-features">
            Entire Studio . 1 bathroom . 21m<sup>2</sup> 1 full bed
          </span>
          <span className="searchitem-container-description-canceloption">
            Free Cancellation
          </span>
          <span className="searchitem-container-description-cancel-subtitile-option">
            You can cancel later,so look in this great price today
          </span>
        </div>
        <div className="searchitem-container-detail"></div>
      </div>
    </div>
  );
};

export default SearchItem;
