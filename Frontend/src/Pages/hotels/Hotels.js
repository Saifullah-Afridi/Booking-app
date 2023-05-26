import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import "./Hotels.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItem";

const Hotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotels-container">
        <div className="hotels-wrapper">
          <div className="hotels-wrapper-search">
            <h1 className="hotels-wrapper-search-title">Search</h1>
            <div className="hotels-wrapper-search-item">
              <label htmlFor="">Desitination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="hotels-wrapper-search-item">
              <label htmlFor="">Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate(item.selection)}
                  minDate={new Date()}
                  ranges={date}
                ></DateRange>
              )}
            </div>
            <div className="hotel-wrapper-options-list">
              <div className="hotel-wraper-options-list-container">
                <label htmlFor="" className="first-label">
                  Options
                </label>
                <div className="option-list-item">
                  <span className="option-list-item-text">
                    Minimum Price <small>per night</small>
                  </span>
                  <input type="number" className="option-list-item-input" />
                </div>
                <div className="option-list-item">
                  <span className="option-list-item-text">
                    Maximum Price <small>per night</small>
                  </span>
                  <input type="number" className="option-list-item-input" />
                </div>
                <div className="option-list-item">
                  <span className="option-list-item-text">Adult</span>
                  <input
                    type="number"
                    className="option-list-item-input"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="option-list-item">
                  <span className="option-list-item-text">Children</span>
                  <input
                    type="number"
                    className="option-list-item-input"
                    placeholder={options.children}
                    min={1}
                  />
                </div>
                <div className="option-list-item">
                  <span className="option-list-item-text">Room</span>
                  <input
                    type="number"
                    className="option-list-item-input"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
              <button>Search</button>
            </div>
          </div>
          <div className="hotels-wrapper-result">
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>s
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
