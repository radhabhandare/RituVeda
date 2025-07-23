import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

// Corrected imports with unique variable names
import card1 from "/src/assets/card1.png";
import card2 from "/src/assets/card2.png";
import card3 from "/src/assets/card3.png";
import card4 from "/src/assets/card4.png";
import card5 from "/src/assets/card5.png";
import card6 from "/src/assets/card6.png";
import card7 from "/src/assets/card7.png";
import card8 from "/src/assets/card8.png";
import card9 from "/src/assets/card9.png";

const CardGrid = () => {
  const cards = [
    { title: "Who We Are", path: "/who-we-are", image: card1 },
    { title: "Our Associates", path: "/our-associates", image: card2 },
    { title: "Understanding Menstruation", path: "/understanding-menstruation", image: card3 },
    { title: "Menstrual Health", path: "/menstrual-health", image: card4 },
    { title: "Health and Food", path: "/health-and-food", image: card5 },
    { title: "Community Support", path: "/community-support", image: card6 },
    { title: "Cultural Insights", path: "/cultural-insights", image: card7 },
    { title: "Traditional Practices", path: "/traditional-practices", image: card8 },
    { title: "Empowering Women", path: "/empowering-women", image: card9 },
  ];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Link to={card.path} key={index} style={{ textDecoration: "none" }}>
          <div className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <h3>{card.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardGrid;
