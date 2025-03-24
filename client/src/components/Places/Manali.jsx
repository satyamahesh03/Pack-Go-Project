import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import manaliImg1 from "../../assets/PlaceImages/Manali1.jpeg";
import manaliImg2 from "../../assets/PlaceImages/Manali2.jpg";
import manaliImg3 from "../../assets/PlaceImages/Manali3.webp";

const Manali = () => {
  const images = [manaliImg1, manaliImg2, manaliImg3];
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
      place: "Manali",
      price: "₹6,000",
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
      <h1 className="place-title">Manali Tourism</h1>

      {/* Image & Booking Section */}
      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Manali" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Manali</h2>
          <p className="trip-price">Trip Price: ₹6,000 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() => navigate("/payment")}>Book Now</button> */}
            <button className="wishlist" onClick={() => addData()}>
            <i className='bx bx-heart'></i> Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Place Details Section */}
      <div className="place-details animate-section">
        <h2>About Manali</h2>
        <p>✅ <strong>Snowy Paradise</strong> – Enjoy breathtaking views of the Pir Panjal and Dhauladhar ranges.</p>
        <p>✅ <strong>Adventure Hub</strong> – Perfect for trekking, paragliding, skiing, and river rafting.</p>
        <p>✅ <strong>Honeymoon Destination</strong> – One of India's most romantic getaways.</p>
        <p>✅ <strong>Scenic Valleys</strong> – Explore Solang Valley, Parvati Valley, and Rohtang Pass.</p>
        <p>✅ <strong>Workation Spot</strong> – A favorite for digital nomads with great cafes and co-working spaces.</p>
        <p>✅ <strong>Cultural Hotspot</strong> – Visit temples, monasteries, and charming old Manali.</p>
      </div>

      {/* Trip Highlights & Itinerary */}
      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>Solang Valley - Adventure sports and breathtaking landscapes.</li>
            <li>Rohtang Pass - Snow-capped mountains and scenic views.</li>
            <li>Hadimba Temple - Ancient wooden temple amidst cedar forests.</li>
            <li>Old Manali - Quaint cafes and vibrant nightlife.</li>
            <li>Manikaran - Hot springs and religious significance.</li>
          </ul>
        </div>

        {/* 5-Day Travel Itinerary */}
        <div className="trip-plan">
          <h3>5-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Arrive in Manali, explore Old Manali, and visit Hadimba Temple.</li>
            <li><b>Day 2:</b> Adventure sports at Solang Valley, visit Vashisht Hot Springs.</li>
            <li><b>Day 3:</b> Rohtang Pass excursion, snow activities, and scenic photography.</li>
            <li><b>Day 4:</b> Visit Manikaran, enjoy the Parvati Valley and Kasol.</li>
            <li><b>Day 5:</b> Local shopping, Tibetan Monastery, and departure.</li>
          </ol>
        </div>
      </div>

      {/* Travel Information */}
      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Best Time to Visit: October to June for snow and pleasant weather.</li>
          <li>Monsoon Caution: Avoid visiting during heavy rains due to landslides.</li>
          <li>Rohtang Pass Permit: Required for visiting between May and October.</li>
          <li>Warm Clothing: Essential during winter months for sub-zero temperatures.</li>
          <li>Local Transport: Rent bikes or take shared cabs for easy travel.</li>
        </ul>
      </div>
    </div>
  );
};

export default Manali;