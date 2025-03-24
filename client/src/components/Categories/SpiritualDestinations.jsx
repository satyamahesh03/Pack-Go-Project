import React from "react";
import { useNavigate } from "react-router-dom";
import "./SpiritualDestinations.css";

// ✅ Importing images
import TirupatiImage from "../../assets/PlaceImages/Tirupati1.jpeg";
import PuriImage from "../../assets/PlaceImages/Puri1.jpg";
import RameshwaramImage from "../../assets/PlaceImages/Rameshwaram1.webp";
import DwarakaImage from "../../assets/PlaceImages/Dwaraka1.jpeg";
import GoldenTempleImage from "../../assets/PlaceImages/Goldentemple1.jpeg";
import BadrinathImage from "../../assets/PlaceImages/Badrinath1.jpg";

// ✅ Array of Spiritual Destinations
const spiritualDestinations = [
  { name: "Tirupati", image: TirupatiImage, path: "/tirupati" },
  { name: "Puri", image: PuriImage, path: "/puri" },
  { name: "Rameshwaram", image: RameshwaramImage, path: "/rameshwaram" },
  { name: "Dwaraka", image: DwarakaImage, path: "/dwaraka" },
  { name: "Golden Temple", image: GoldenTempleImage, path: "/goldenTemple" },
  { name: "Badrinath", image: BadrinathImage, path: "/badrinath" },
];

const SpiritualDestinations = () => {
  const navigate = useNavigate();

  return (
    <div className="spiritual-container">
      <h1 className="title">Popular Spiritual Destinations</h1>
      <div className="grid-container">
        {spiritualDestinations.map((place, index) => (
          <div
            key={index}
            className="spiritual-card"
            onClick={() => navigate(place.path)}
          >
            <img src={place.image} alt={place.name} className="spiritual-image" />
            <div className="spiritual-name">{place.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpiritualDestinations;