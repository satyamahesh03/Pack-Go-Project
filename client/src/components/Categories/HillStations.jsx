import React from "react";
import { useNavigate } from "react-router-dom";
import "./HillStations.css";

// ✅ Importing images correctly
import ArakuImage from "../../assets/PlaceImages/Araku2.jpg";
import DarjeelingImage from "../../assets/PlaceImages/Darjeeling1.jpg";
import OotyImage from "../../assets/PlaceImages/Ooty3.jpg";
import MunnarImage from "../../assets/PlaceImages/Munnar2.jpeg";
import ManaliImage from "../../assets/PlaceImages/Manali1.jpeg";
import LadakImage from "../../assets/PlaceImages/Ladak1.jpeg";

// ✅ Corrected paths with imported images
const hillStations = [
  { name: "Araku", image: ArakuImage, path: "/araku" },
  { name: "Darjeeling", image: DarjeelingImage, path: "/darjeeling" },
  { name: "Ooty", image: OotyImage, path: "/ooty" },
  { name: "Munnar", image: MunnarImage, path: "/munnar" },
  { name: "Manali", image: ManaliImage, path: "/manali" },
  { name: "Ladakh", image: LadakImage, path: "/ladak" },
];

const HillStations = () => {
  const navigate = useNavigate();

  return (
    <div className="hill-stations-container">
      <h1 className="title">Popular Hill Stations</h1>
      <div className="grid-container">
        {hillStations.map((place, index) => (
          <div
            key={index}
            className="hill-card"
            onClick={() => navigate(place.path)}
          >
            <img src={place.image} alt={place.name} className="hill-image" />
            <div className="hill-name">{place.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HillStations;