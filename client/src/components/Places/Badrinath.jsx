import React, { useState, useEffect, useContext } from "react";
import "./Places.css";
import { useNavigate } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import { AppContext } from "../Context/AppContext";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";

// Import Images
import badrinathImg1 from "../../assets/PlaceImages/Badrinath1.jpg";
import badrinathImg2 from "../../assets/PlaceImages/Badrinath2.jpg";
import badrinathImg3 from "../../assets/PlaceImages/Badrinath3.jpg";

const Badrinath = () => {
  const images = [badrinathImg1, badrinathImg2, badrinathImg3];
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
      place: "Badrinath",
      price: "₹8,000",
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
      <h1 className="place-title">Badrinath Tourism</h1>

      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Badrinath" className="place-image" />
        </div>
        <div className="booking-section animate-section">
          <h2>Explore Badrinath</h2>
          <p className="trip-price">Trip Price: ₹8,000 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() => navigate("/payment")}>Book Now</button> */}
            <button className="wishlist" onClick={() => addData()}>
              <i className='bx bx-heart'></i> Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="place-details animate-section">
        <h2>About Badrinath</h2>
        <p>✅ <strong>Badrinath Temple</strong> – Dedicated to Lord Vishnu, one of the Char Dham sites.</p>
        <p>✅ <strong>Tapt Kund</strong> – Natural hot water spring with medicinal properties.</p>
        <p>✅ <strong>Neelkanth Peak</strong> – Stunning mountain backdrop of Badrinath.</p>
        <p>✅ <strong>Mana Village</strong> – Last village before the Indo-Tibetan border.</p>
        <p>✅ <strong>Alaknanda River</strong> – Sacred river flowing beside the temple.</p>
      </div>



      <div className="places-offered animate-section">
        <h2>Places Offered</h2>
        <ul>
          <li>Badrinath Temple</li>
          <li>Tapt Kund</li>
          <li>Neelkanth Peak</li>
          <li>Mana Village</li>
          <li>Alaknanda River</li>
        </ul>
      </div>

      <div className="day-trip animate-section">
        <h2>Day Trip Plan</h2>
        <ul>
          <li>6:00 AM – Morning darshan at Badrinath Temple.</li>
          <li>8:00 AM – Relax at Tapt Kund hot springs.</li>
          <li>10:00 AM – Explore Mana Village, India’s last village.</li>
          <li>1:00 PM – Lunch and visit Alaknanda River.</li>
          <li>3:00 PM – Trek to Neelkanth Peak viewpoint.</li>
          <li>6:00 PM – Attend the evening aarti at Badrinath Temple.</li>
        </ul>
      </div>

      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Best Time to Visit: May to June, September to October.</li>
          <li>Temple Timings: 6:30 AM - 2:00 PM, 3:00 PM - 9:00 PM.</li>
          <li>Pack Warm Clothes: The temperature can drop significantly.</li>
          <li>Photography is Prohibited Inside the Temple.</li>
        </ul>
      </div>
    </div>
  );
};

export default Badrinath;
