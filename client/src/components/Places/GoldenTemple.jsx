import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import goldenTempleImg1 from "../../assets/PlaceImages/Goldentemple1.jpeg";
import goldenTempleImg2 from "../../assets/PlaceImages/Goldentemple4.jpg";
import goldenTempleImg3 from "../../assets/PlaceImages/Goldentemple3.jpeg";

const GoldenTemple = () => {
  const images = [goldenTempleImg1, goldenTempleImg2, goldenTempleImg3];
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
      place: "Golden Temple",
      price: "₹5,500",
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
      <h1 className="place-title">Golden Temple Tourism</h1>

      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Golden Temple" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Golden Temple</h2>
          <p className="trip-price">Trip Price: ₹5,500 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() => navigate("/payment")}>Book Now</button> */}
            <button className="wishlist" onClick={() => addData()}>
              <i className='bx bx-heart'></i> Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="place-details animate-section">
        <h2>About Golden Temple</h2>
        <p>✅ <strong>Sri Harmandir Sahib</strong> – The holiest shrine in Sikhism.</p>
        <p>✅ <strong>Amrit Sarovar</strong> – Sacred tank surrounding the temple.</p>
        <p>✅ <strong>Guru-Ka-Langar</strong> – Free community kitchen serving thousands daily.</p>
        <p>✅ <strong>Sikh Museum</strong> – Showcasing the history and struggles of Sikhs.</p>
        <p>✅ <strong>Best Time to Visit</strong> – October to March.</p>
      </div>

      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>Golden Temple - The central Sikh pilgrimage site.</li>
            <li>Akal Takht - The temporal seat of Sikh authority.</li>
            <li>Jallianwala Bagh - Historic site of the 1919 massacre.</li>
            <li>Wagah Border - Witness the iconic Beating Retreat ceremony.</li>
            <li>Durgiana Temple - Hindu temple with similar architecture.</li>
          </ul>
        </div>
        <div className="trip-plan">
          <h3>2-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Arrive in Amritsar, visit Golden Temple & Sikh Museum.</li>
            <li><b>Day 2:</b> Explore Jallianwala Bagh, Wagah Border, and local markets.</li>
          </ol>
        </div>
      </div>

      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Cover your head before entering the temple.</li>
          <li>Free meals are available at Guru-Ka-Langar.</li>
          <li>Visit early morning or late evening for a peaceful experience.</li>
          <li>Photography is restricted inside the sanctum.</li>
          <li>Best time to visit is from October to March.</li>
        </ul>
      </div>
    </div>
  );
};

export default GoldenTemple;
