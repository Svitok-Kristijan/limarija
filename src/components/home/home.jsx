import React, {useEffect} from "react";
import "./home.scss";
import slikaBack from "./limarija1.jpg";

import {Link} from "react-scroll";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate");

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 150) {
          element.classList.add("in-view");
        } else {
          element.classList.remove("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="home-container">
      <img src={slikaBack} alt="home" />
      <div className="text-container"></div>
      <h3>GRAĐEVINSKA LIMARIJA LIMARIJA ZA VAŠ KROV</h3>
      <div className="footer animate">
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
