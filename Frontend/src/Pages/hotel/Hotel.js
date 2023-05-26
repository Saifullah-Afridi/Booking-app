import React, { useState } from "react";
import "./Hotel.css";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import MailComponent from "../../components/MailComponent";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotel-container">
        {open && (
          <div className="slider">
            <button onClick={() => setOpen(false)} className="cancel-button">
              X
            </button>
            <button onClick={() => handleMove("l")} className="arrow">
              Next
            </button>
            <div className="slider-container">
              <img src={photos[slideNumber].src} alt="" className="sliderimg" />
            </div>
            <button onClick={() => handleMove("r")} className="arrow">
              Back
            </button>
          </div>
        )}
        <div className="hotel-wrapper">
          <button className="booknow">Rerserve or Booknow</button>
          <h1 className="hotel-title">Grand hotel</h1>
          <div className="hotel-address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 123 New York</span>
          </div>
          <span className="hotel-distance">
            Excelent location - 500m from center
          </span>
          <span className="hotel-price-highlight">
            book a stay over $113 at this property and get a free airport ticket
          </span>
          <div className="hotel-images">
            {photos.map((photo, i) => (
              <div className="hotel-image-wrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotel-image"
                />
              </div>
            ))}
          </div>
          <div className="hotel-details">
            <div className="hotel-detail-text">
              <h1 className="hotel-detail-text-title">
                Stay in the heart of karakow
              </h1>
              <p className="hotel-descrp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quod, eum consequatur. Earum sed repellendus similique
                nostrum animi atque libero beatae commodi amet voluptas vitae
                nihil quas, nulla qui esse delectus., dolorem culpa, repellat,
                temporibus doloribus cupiditate nostrum quis minus officiis
                consectetur saepe odit fugiat quibusdam fuga rerum modi incidunt
                voluptates! Quaerat.
              </p>
            </div>
            <div className="hotel-detail-price">
              <h1>Perfect for 9 nights</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, reprehenderit.
              </span>
              <h2>
                <b>$925</b> (9 nights )
              </h2>
              <button>Reserver or book now</button>
            </div>
          </div>
        </div>
        <MailComponent></MailComponent>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Hotel;
