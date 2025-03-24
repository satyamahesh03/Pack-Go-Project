import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import lakshadweepImg1 from "../../assets/PlaceImages/Lakshadweep1.webp";
import lakshadweepImg2 from "../../assets/PlaceImages/Lakshadweep2.jpeg";
import lakshadweepImg3 from "../../assets/PlaceImages/Lakshadweep3.jpeg";

const Lakshadweep = () => {
  const images = [lakshadweepImg1, lakshadweepImg2, lakshadweepImg3];
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
      place: "Lakshadweep",
      price: "₹18,000",
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
      <h1 className="place-title">Lakshadweep Tourism</h1>

      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Lakshadweep" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Lakshadweep</h2>
          <p className="trip-price">Trip Price: ₹18,000 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() => navigate("/payment")}>Book Now</button> */}
            <button className="wishlist" onClick={addData}>
              <i className='bx bx-heart'></i> Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="place-details animate-section">
        <h2>About Lakshadweep</h2>
        <p>✅ <strong>Stunning Coral Reefs</strong> – A paradise for snorkeling and scuba diving.</p>
        <p>✅ <strong>Exotic Islands</strong> – Comprises 36 islands with unique attractions.</p>
        <p>✅ <strong>Rich Marine Life</strong> – Explore vibrant underwater ecosystems.</p>
        <p>✅ <strong>Secluded Beaches</strong> – Perfect for relaxation and tranquility.</p>
        <p>✅ <strong>Adventure Sports</strong> – Kayaking, jet skiing, and deep-sea fishing.</p>
        <p>✅ <strong>Cultural Heritage</strong> – A blend of Indian, Arab, and European influences.</p>
        <p>✅ <strong>Delicious Seafood</strong> – Savor fresh fish, prawn curry, and coconut-infused dishes.</p>
        <p>✅ <strong>Best Time to Visit</strong> – September to May for ideal weather.</p>
      </div>

      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>Agatti Island - Pristine beaches and turquoise waters.</li>
            <li>Bangaram Island - A serene retreat with white sandy beaches.</li>
            <li>Kavaratti Island - The capital with stunning lagoons.</li>
            <li>Minicoy Island - Famous for its traditional Lakshadweep culture.</li>
            <li>Kalpeni Island - Renowned for its beautiful coral atolls.</li>
          </ul>
        </div>
        <div className="trip-plan">
          <h3>5-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Arrive at Agatti, explore local beaches.</li>
            <li><b>Day 2:</b> Snorkeling and scuba diving at Bangaram Island.</li>
            <li><b>Day 3:</b> Visit Kavaratti, enjoy local cuisine and cultural sites.</li>
            <li><b>Day 4:</b> Explore Minicoy, visit its iconic lighthouse.</li>
            <li><b>Day 5:</b> Relax at Kalpeni beaches before departure.</li>
          </ol>
        </div>
      </div>

      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Best Time to Visit: September to May for pleasant weather.</li>
          <li>Permits Required: All visitors need an entry permit.</li>
          <li>Limited Transport: Ferry services have limited schedules.</li>
          <li>Cash Dependency: Carry enough cash as ATMs are scarce.</li>
          <li>Network Connectivity: Mobile networks may be weak on some islands.</li>
          <li>Monsoon Season: May to September experiences rough seas.</li>
        </ul>
      </div>
    </div>
  );
};

export default Lakshadweep;
