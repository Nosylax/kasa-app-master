import React, { useState } from "react";
import ArrowLeft from "../../assets/Vectorleft.png";
import ArrowRight from "../../assets/Vectorright.png";
import "./Slideshow.css";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
    console.log(currentIndex);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
    console.log(currentIndex);
  };
  if (pictures.length > 1) {
    return (
      <div>
        <div className="slideshow">
          <img
            className="slider"
            src={pictures[currentIndex]}
            alt={`Diapositive du logement`}
          />

          <img
            className="arrowLeft"
            src={ArrowLeft}
            alt={`Flèche de gauche`}
            onClick={previousSlide}
          />

          <img
            className="arrowRight"
            src={ArrowRight}
            alt={`Flèche de droite`}
            onClick={nextSlide}
          />
          <p className="counter">
            {currentIndex + 1}/{pictures.length}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="slideshow">
        <img
          className="slider"
          src={pictures[currentIndex]}
          alt={`Diapositive du logement`}
        />
      </div>
    );
  }
};

export default Slideshow;
