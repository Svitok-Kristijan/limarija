import React from "react";
import "./home.scss";
import slikaBack from "./limarija1.jpg";
import phoneImg from "./logoPhone.png";

const Home = () => {
  return (
    <div className="home-container">
      <img src={slikaBack} alt="home" />
      <div className="text-container"></div>
      <h3>GRAĐEVINSKA LIMARIJA LIMARIJA ZA VAŠ KROV</h3>
      <div className="footer">
        <div className="container-phone">
          <h4>&#9743;</h4>
          <p>095-866-7201</p>
        </div>
        <div className="container-phone">
          <h4>&#x26C9;</h4>
          <p>Novoselci 18, 34310 Pleternica</p>
        </div>
        <div className="container-phone">
          <h4>&#64;</h4>
          <p>idrazetic@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
