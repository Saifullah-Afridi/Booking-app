import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import "./Home.css";
import Featured from "../../components/Featured";
import PropertyList from "../../components/PropertyList";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList></PropertyList>
      </div>
    </Fragment>
  );
};

export default Home;
