import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import vizagImg1 from "../../assets/PlaceImages/Vizag1.jpg";
import vizagImg2 from "../../assets/PlaceImages/Vizag2.jpg";
import vizagImg3 from "../../assets/PlaceImages/Vizag3.jpg";
import vizagImg4 from "../../assets/PlaceImages/Vizag4.jpg";

const Visakhapatnam = () => {
  const images = [vizagImg1, vizagImg2, vizagImg3, vizagImg4];
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
      place: "Visakhapatnam",
      price: "₹6,550",
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
      <h1 className="place-title">Visakhapatnam Tourism</h1>

      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Visakhapatnam" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Visakhapatnam</h2>
          <p className="trip-price">Trip Price: ₹6,550 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() => navigate("/payment")}>Book Now</button> */}
            <button className="wishlist" onClick={() => addData()}>
              <i className='bx bx-heart'></i> Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="place-details animate-section">
        <h2>Visakhapatnam Tourism</h2>
        <p>✅ <strong>Coastal Beauty</strong> – Famous for clean, scenic beaches like <strong>Yarada Beach & Rishikonda Beach</strong>.</p>
        <p>✅ <strong>Historical Wonders</strong> – Visit the <strong>Borra Caves</strong>, India's largest limestone caves.</p>
        <p>✅ <strong>Hill Stations</strong> – Explore the lush <strong>Araku Valley</strong> with waterfalls and gardens.</p>
        <p>✅ <strong>Cultural Attractions</strong> – Home to <strong>Kailasagiri Park, INS Kursura Submarine Museum</strong>.</p>
        <p>✅ <strong>Adventure Activities</strong> – Enjoy trekking, parasailing, and water sports.</p>
        <p>✅ <strong>Delicious Cuisine</strong> – Known for <strong>seafood delicacies and Andhra spicy dishes</strong>.</p>
        <p>✅ <strong>Best Time to Visit</strong> – September to March, with pleasant weather and clear skies.</p>
      </div>

      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>Yarada Beach - A pristine, less-crowded beach.</li>
            <li>Borra Caves - A natural limestone cave system.</li>
            <li>Araku Valley - A scenic hill station with waterfalls.</li>
            <li>Kailasagiri - A hilltop park with panoramic views.</li>
            <li>INS Kursura Museum - A decommissioned submarine turned museum.</li>
          </ul>
        </div>

        <div className="trip-plan">
          <h3>3-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Arrive in Vizag, visit Kailasagiri & Rishikonda Beach.</li>
            <li><b>Day 2:</b> Explore Borra Caves, Araku Valley & Katiki Waterfalls.</li>
            <li><b>Day 3:</b> Visit INS Kursura Museum & enjoy a sunset at Yarada Beach.</li>
          </ol>
        </div>
      </div>

      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Best Time to Visit: September to March (Cool weather & beach-friendly climate).</li>
          <li>Avoid Monsoon Season: Heavy rains from June to August can limit sightseeing.</li>
          <li>Carry Cash: Some remote areas may not have digital payment options.</li>
          <li>Beach Safety: Follow guidelines and avoid swimming in rough waters.</li>
          <li>Respect Local Culture: Dress modestly when visiting temples and cultural sites.</li>
        </ul>
      </div>
    </div>
  );
};

export default Visakhapatnam;