import React, {useState, useEffect} from "react";
import "./proizvodi.scss";
import {Link} from "react-scroll";
import photo1 from "./limarija2.jpg";
import photo2 from "./limarija3.jpg";
import photo3 from "./limarija4.jpg";
import photo4 from "./limarija5.jpg";
import photo5 from "./limarija6.jpg";

const Proizvodi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [photo1, photo2, photo3, photo4, photo5]; // Adjust the order of photos as needed

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Get the elements to animate
      const elements = document.querySelectorAll(".animate");

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // If the element is inside the viewport, add an "in-view" class
        if (elementPosition < windowHeight - 150) {
          element.classList.add("in-view");
        } else {
          element.classList.remove("in-view");
        }
      });
    };

    // Add the event listener to the window to trigger handleScroll on scroll
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll on component mount to initialize animations for elements in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="proizvodi-container">
      <div className="slider">
        <div
          className="slides"
          style={{transform: `translateX(-${currentIndex * 100}%)`}}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Proizvod ${index + 1}`} />
          ))}
        </div>
        <button className="nav-button prev-button" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="nav-button next-button" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
      <p>Poslujemo na poslujemo na području Požeško-slavonske županije.</p>
      <div className="ponuda">
        <div className="ponuda-1 animate">
          <img src={photo1} alt="photo" />
          <p>
            Vršimo profesionalnu zamjenu oštećenih, istrošenih ili zastarjelih
            krovnih crijepova. Na raspolaganju imamo različite tipove i
            materijale krovnih crijepova i limova.
          </p>
        </div>
        <div className="ponuda-2 animate">
          <img src={photo2} alt="photo" />
          <p>
            Vršimo profesionalnu zamjenu oštećenih, istrošenih ili zastarjelih
            krovnih crijepova. Na raspolaganju imamo različite tipove i
            materijale krovnih crijepova i limova.
          </p>
        </div>
        <div className="ponuda-3 animate">
          <img src={photo4} alt="photo" />
          <p>
            Vršimo profesionalnu zamjenu oštećenih, istrošenih ili zastarjelih
            krovnih crijepova. Na raspolaganju imamo različite tipove i
            materijale krovnih crijepova i limova.
          </p>
        </div>
        <div className="ponuda-4 animate">
          <img src={photo5} alt="photo" />
          <p>
            Vršimo profesionalnu zamjenu oštećenih, istrošenih ili zastarjelih
            krovnih crijepova. Na raspolaganju imamo različite tipove i
            materijale krovnih crijepova i limova.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proizvodi;
