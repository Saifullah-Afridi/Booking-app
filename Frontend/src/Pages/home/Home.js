import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import "./Home.css";
import Featured from "../../components/Featured";
import PropertyList from "../../components/PropertyList";
import Featured2 from "./Featured2";
import MailComponent from "../../components/MailComponent";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <Featured2 />
        <MailComponent />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
