import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import puriImg1 from "../../assets/PlaceImages/Puri1.jpg";
import puriImg2 from "../../assets/PlaceImages/Puri2.jpeg";
import puriImg3 from "../../assets/PlaceImages/Puri3.jpg";

const Puri = () => {
  const images = [puriImg1, puriImg2, puriImg3];
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
      place: "Puri",
      price: "₹11,900",
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
      <h1 className="place-title">Puri Tourism</h1>

      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Puri" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Puri</h2>
          <p className="trip-price">Trip Price: ₹11,900 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() => navigate("/payment")}>Book Now</button> */}
            <button className="wishlist" onClick={() => addData()}>
              <i className='bx bx-heart'></i> Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="place-details animate-section">
        <h2>About Puri</h2>
        <p>✅ <strong>Jagannath Temple</strong> – A major Hindu pilgrimage site and part of Char Dham.</p>
        <p>✅ <strong>Puri Beach</strong> – Beautiful coastline along the Bay of Bengal.</p>
        <p>✅ <strong>Rath Yatra Festival</strong> – Famous annual chariot festival of Lord Jagannath.</p>
        <p>✅ <strong>Golden Triangle</strong> – Part of Odisha’s Golden Triangle (Puri, Konark, Bhubaneswar).</p>
        <p>✅ <strong>Chilika Lake</strong> – India’s largest coastal lagoon, home to migratory birds.</p>
        <p>✅ <strong>Konark Sun Temple</strong> – A UNESCO World Heritage Site near Puri.</p>
        <p>✅ <strong>Cultural Heritage</strong> – Rich history dating back to the 3rd century B.C.</p>
        <p>✅ <strong>Best Time to Visit</strong> – July to March for pleasant weather.</p>
      </div>

      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>Jagannath Temple - Sacred pilgrimage site.</li>
            <li>Puri Beach - A perfect spot for relaxation.</li>
            <li>Chilika Lake - Spot rare migratory birds and dolphins.</li>
            <li>Konark Sun Temple - A historic marvel near Puri.</li>
            <li>Gundicha Temple - Famous during Rath Yatra.</li>
          </ul>
        </div>
        <div className="trip-plan">
          <h3>3-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Visit Jagannath Temple, explore local markets, and relax at Puri Beach.</li>
            <li><b>Day 2:</b> Take a boat ride at Chilika Lake and explore wildlife.</li>
            <li><b>Day 3:</b> Visit Konark Sun Temple and Gundicha Temple before departure.</li>
          </ol>
        </div>
      </div>

      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Best Time to Visit: July to March for ideal weather.</li>
          <li>Festivals: Rath Yatra is a major attraction in June-July.</li>
          <li>Local Transport: Auto-rickshaws and cycle rickshaws are common.</li>
          <li>Temple Dress Code: Traditional attire is required for temple visits.</li>
          <li>Accommodation: Various options from budget stays to luxury resorts.</li>
          <li>Food: Try Odisha’s local delicacies like Dalma and Chhena Poda.</li>
        </ul>
      </div>
    </div>
  );
};

export default Puri;