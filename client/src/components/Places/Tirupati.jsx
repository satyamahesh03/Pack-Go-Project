import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import tirupatiImg1 from "../../assets/PlaceImages/Tirupati1.jpeg";
import tirupatiImg2 from "../../assets/PlaceImages/Tirupati2.jpeg";
import tirupatiImg3 from "../../assets/PlaceImages/Tirupati3.jpeg";
import tirupatiImg4 from "../../assets/PlaceImages/Tirupati4.jpg";

const Tirupati = () => {
  const images = [tirupatiImg1, tirupatiImg2, tirupatiImg3, tirupatiImg4];
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const { userData, setUserData, token } = useContext(AppContext);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (userData) {
      console.log(userData);
    }
  }, [userData]);
  const addData = () => {
    const newItem = {
      place: "Tirupati",
      price: "₹3,825",
      image: "String",
    }
    const res = AddwishListData(newItem, setUserData);
    console.log("UserData" + userData);
    console.log("res" + res);
    setTimeout(() => {
      uploadData(newItem, token, setUserData);
    }, 500);
  };
  return (
    <div className="place-container">
      <h1 className="place-title">Tirupati Tourism</h1>

      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Tirupati" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Tirupati</h2>
          <p className="trip-price">Trip Price: ₹3,825 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() => navigate("/payment")}>Book Now</button> */}
            <button className="wishlist" onClick={() => addData()}>
              <i className='bx bx-heart'></i> Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="place-details animate-section">
        <h2>About Tirupati</h2>
        <p>✅ <strong>Lord Venkateshwara Temple</strong> – One of the richest and most visited pilgrimage sites.</p>
        <p>✅ <strong>Spiritual Hub</strong> – Features many temples like Sri Kalahasti and Govindarajaswami.</p>
        <p>✅ <strong>Unique Rituals</strong> – Tonsuring, Thulabaram, and famous Tirupati Laddoo.</p>
        <p>✅ <strong>Scenic Hills</strong> – Tirumala Hills offers breathtaking views.</p>
        <p>✅ <strong>Silathoranam</strong> – A natural rock arch, a unique geological wonder.</p>
        <p>✅ <strong>Best Time to Visit</strong> – September to March.</p>
      </div>

      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>Tirumala - Home of Lord Venkateshwara Temple.</li>
            <li>Govindarajaswami Temple - Historic Vishnu temple.</li>
            <li>Silathoranam - A rare natural rock formation.</li>
            <li>Sri Kalahasti - Famous Shiva temple.</li>
            <li>Padmavathi Temple - Dedicated to Goddess Padmavathi.</li>
          </ul>
        </div>
        <div className="trip-plan">
          <h3>2-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Arrival at Tirupati, visit Sri Venkateshwara Temple.</li>
            <li><b>Day 2:</b> Explore other temples, Silathoranam, and return.</li>
          </ol>
        </div>
      </div>

      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Dress Code: Traditional attire required for temple entry.</li>
          <li>Darshan Booking: Multiple darshan options available.</li>
          <li>Best Time: Visit from September to March.</li>
          <li>Accommodation: Budget and luxury stays available in Tirupati.</li>
          <li>VIP Darshan: Available through SRIVANI Trust donations.</li>
        </ul>
      </div>
    </div>
  );
};

export default Tirupati;