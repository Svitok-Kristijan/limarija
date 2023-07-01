import React, {useState, useEffect} from "react";
import "./proizvodi.scss";
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
        <div className="ponuda-1">
          <img src={photo1} alt="photo" />
          <p>
            Vršimo profesionalnu zamjenu oštećenih, istrošenih ili zastarjelih
            krovnih crijepova. Na raspolaganju imamo različite tipove i
            materijale krovnih crijepova i limova.
          </p>
        </div>
        <div className="ponuda-2">
          <img src={photo2} alt="photo" />
          <p>
            Vršimo profesionalnu zamjenu oštećenih, istrošenih ili zastarjelih
            krovnih crijepova. Na raspolaganju imamo različite tipove i
            materijale krovnih crijepova i limova.
          </p>
        </div>
        <div className="ponuda-3">
          <img src={photo4} alt="photo" />
          <p>
            Vršimo profesionalnu zamjenu oštećenih, istrošenih ili zastarjelih
            krovnih crijepova. Na raspolaganju imamo različite tipove i
            materijale krovnih crijepova i limova.
          </p>
        </div>
        <div className="ponuda-4">
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
