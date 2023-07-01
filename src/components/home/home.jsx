import React from "react";
import "./home.scss";
import slikaBack from "./limarija1.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <img src={slikaBack} alt="home" />
      <div className="text-container"></div>
      <h3>GRAĐEVINSKA LIMARIJA LIMARIJA ZA VAŠ KROV</h3>
    </div>
  );
};

export default Home;
