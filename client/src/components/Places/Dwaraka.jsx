import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import dwarkaImg1 from "../../assets/PlaceImages/Dwaraka1.jpeg";
import dwarkaImg2 from "../../assets/PlaceImages/Dwaraka2.jpeg";
import dwarkaImg3 from "../../assets/PlaceImages/Dwaraka3.jpg";

const Dwarka = () => {
  const images = [dwarkaImg1, dwarkaImg2, dwarkaImg3];
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
      place: "Dwaraka",
      price: "₹8,500",
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
      <h1 className="place-title">Dwarka Tourism</h1>

      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Dwarka" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Dwarka</h2>
          <p className="trip-price">Trip Price: ₹8,500 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() => navigate("/payment")}>Book Now</button> */}
            <button className="wishlist" onClick={() => addData()}>
              <i className='bx bx-heart'></i> Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="place-details animate-section">
        <h2>About Dwarka</h2>
        <p>✅ <strong>Dwarkadhish Temple</strong> – A sacred temple dedicated to Lord Krishna.</p>
        <p>✅ <strong>Nageshwar Jyotirlinga</strong> – One of the 12 Jyotirlingas.</p>
        <p>✅ <strong>Bet Dwarka</strong> – An island with great religious significance.</p>
        <p>✅ <strong>Gomti Ghat</strong> – A holy bathing site on the river.</p>
        <p>✅ <strong>Best Time to Visit</strong> – July to March.</p>
      </div>

      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>Dwarkadhish Temple - Main Krishna temple.</li>
            <li>Nageshwar Jyotirlinga - Sacred Shiva temple.</li>
            <li>Bet Dwarka - Island associated with Lord Krishna.</li>
            <li>Rukmini Devi Temple - Dedicated to Krishna’s queen.</li>
            <li>Dwarka Beach & Lighthouse - Perfect for sunset views.</li>
          </ul>
        </div>
        <div className="trip-plan">
          <h3>2-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Arrival at Dwarka, visit Dwarkadhish Temple and Gomti Ghat.</li>
            <li><b>Day 2:</b> Explore Nageshwar Jyotirlinga, Bet Dwarka, and Rukmini Devi Temple.</li>
          </ol>
        </div>
      </div>

      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Dress Code: Modest attire required for temple visits.</li>
          <li>Temple Timings: Opens early morning, best to visit before 11 AM.</li>
          <li>Best Time: Visit between July and March for pleasant weather.</li>
          <li>Accommodation: Plenty of budget and luxury hotels available.</li>
          <li>Transportation: Auto-rickshaws and taxis are convenient for local travel.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dwarka;