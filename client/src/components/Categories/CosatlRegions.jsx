import React from "react";
import { useNavigate } from "react-router-dom";
import "./CostalRegions.css";

// ✅ Importing images
import PondicherryImage from "../../assets/PlaceImages/Pondicherry1.jpeg";
import GoaImage from "../../assets/PlaceImages/Goa1.jpg";
import VisakhapatnamImage from "../../assets/PlaceImages/Vizag1.jpg";
import KanyakumariImage from "../../assets/PlaceImages/Kanyakumari1.jpg";
import AndamanImage from "../../assets/PlaceImages/Andaman1.jpg";
import LakshadweepImage from "../../assets/PlaceImages/Lakshadweep2.jpeg";

// ✅ Array of Coastal Destinations
const coastalRegions = [
  { name: "Pondicherry", image: PondicherryImage, path: "/pondicherry" },
  { name: "Goa", image: GoaImage, path: "/goa" },
  { name: "Visakhapatnam", image: VisakhapatnamImage, path: "/visakhapatnam" },
  { name: "Kanyakumari", image: KanyakumariImage, path: "/kanyakumari" },
  { name: "Andaman", image: AndamanImage, path: "/andaman" },
  { name: "Lakshadweep", image: LakshadweepImage, path: "/lakshadweep" },
];

const CostalRegions = () => {
  const navigate = useNavigate();

  return (
    <div className="coastal-container">
      <h1 className="title">Popular Coastal Destinations</h1>
      <div className="grid-container">
        {coastalRegions.map((place, index) => (
          <div
            key={index}
            className="coastal-card"
            onClick={() => navigate(place.path)}
          >
            <img src={place.image} alt={place.name} className="coastal-image" />
            <div className="coastal-name">{place.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostalRegions;