import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = () => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/properties");
        const data = await response.json();
        setLocation(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="locationContainer">
      {location.map((card) => (
        <div key={`location-${card.id}`}>
          <Link to={`/FicheLogement/${card.id}`}>
            <div className="locationCard">
              <img
                className="locationCover"
                src={card.cover}
                alt={`couverture de la location ${card.title}`}
              />
              <p className="cardTitle">{card.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
