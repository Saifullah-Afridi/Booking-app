import React from "react";
import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="propertyList">
      <div className="properyListItem">
        <img
          src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="propertyListItemTitle">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="properyListItem">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="propertyListItemTitle">
          <h1>Apartments</h1>
          <h2>2335 hotels</h2>
        </div>
      </div>
      <div className="properyListItem">
        <img
          src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="propertyListItemTitle">
          <h1>Resorts</h1>
          <h2>555 hotels</h2>
        </div>
      </div>
      <div className="properyListItem">
        <img
          src="https://images.pexels.com/photos/3051551/pexels-photo-3051551.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="propertyListItemTitle">
          <h1>Villas</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
