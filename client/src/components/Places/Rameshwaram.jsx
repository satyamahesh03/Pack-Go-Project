import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import rameshwaramImg1 from "../../assets/PlaceImages/Rameshwaram1.webp";
import rameshwaramImg2 from "../../assets/PlaceImages/Rameshwaram2.webp";
import rameshwaramImg3 from "../../assets/PlaceImages/Rameshwaram3.webp";


const Rameshwaram = () => {
  const images = [rameshwaramImg1, rameshwaramImg2, rameshwaramImg3];
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
      place: "Rameshwaram",
      price: "₹2,968",
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
      <h1 className="place-title">Rameshwaram Tourism</h1>

      {/* Image & Booking Section */}
      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Rameshwaram" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Rameshwaram</h2>
          <p className="trip-price">Trip Price: ₹2,968 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() => navigate("/payment")}>Book Now</button> */}
            <button className="wishlist" onClick={() => addData()}>
            <i className='bx bx-heart'></i> Wishlist </button>
          </div>
        </div>
      </div>

      {/* Place Details Section */}
      <div className="place-details animate-section">
        <h2>About Rameshwaram</h2>
        <p>✅ <strong>Ramanathaswamy Temple</strong> – Famous for its longest corridor in the world.</p>
        <p>✅ <strong>Pamban Bridge</strong> – India's first sea bridge connecting mainland India to Rameshwaram.</p>
        <p>✅ <strong>Dhanushkodi</strong> – An abandoned town with historical and mythological significance.</p>
        <p>✅ <strong>Agniteertham</strong> – A sacred sea shore for rituals and prayers.</p>
        <p>✅ <strong>Five-faced Hanuman Temple</strong> – Holds floating stones from Lord Rama’s bridge.</p>
      </div>

      

      {/* Places Offered Section */}
      <div className="places-offered animate-section">
        <h2>Places Offered</h2>
        <ul>
          <li>Pamban Bridge</li>
          <li>Dhanushkodi Beach</li>
          <li>Ramanathaswamy Temple</li>
          <li>Gandhamadhana Parvatham</li>
          <li>Kothandaramaswamy Temple</li>
        </ul>
      </div>

      {/* Day Trip Plan */}
      <div className="day-trip animate-section">
        <h2>Day Trip Plan</h2>
        <ul>
          <li><strong>6:00 AM</strong> – Sunrise at Dhanushkodi Beach</li>
          <li><strong>8:00 AM</strong> – Visit Ramanathaswamy Temple</li>
          <li><strong>10:00 AM</strong> – Explore Pamban Bridge</li>
          <li><strong>12:00 PM</strong> – Lunch at a local restaurant</li>
          <li><strong>2:00 PM</strong> – Visit the Five-faced Hanuman Temple</li>
          <li><strong>4:00 PM</strong> – Relax at Agniteertham Beach</li>
          <li><strong>6:00 PM</strong> – Sunset at Gandhamadhana Parvatham</li>
        </ul>
      </div>

      {/* Travel Information */}
      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Best Time to Visit: October to April for comfortable weather.</li>
          <li>Temple Timings: Visit Ramanathaswamy Temple between 5 AM - 1 PM & 3 PM - 9 PM.</li>
          <li>Dress Code: Wear traditional attire when visiting temples.</li>
          <li>Transportation: Local autos and rental cars are the best way to explore.</li>
          <li>Food: Try local South Indian delicacies like dosa, idli, and filter coffee.</li>
        </ul>
      </div>
    </div>
  );
};

export default Rameshwaram;