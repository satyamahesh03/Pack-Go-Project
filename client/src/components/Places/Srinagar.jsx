import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import srinagarImg1 from "../../assets/PlaceImages/Srinagar1.jpeg";
import srinagarImg2 from "../../assets/PlaceImages/Srinagar2.jpeg";
import srinagarImg3 from "../../assets/PlaceImages/Srinagar3.jpeg";
import srinagarImg4 from "../../assets/PlaceImages/Srinagar4.jpg";

const Srinagar = () => {
  const images = [srinagarImg1, srinagarImg2, srinagarImg3, srinagarImg4];
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
      place: "Srinagar",
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
      <h1 className="place-title">Srinagar Tourism</h1>

      {/* Image & Booking Section */}
      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Srinagar" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Srinagar</h2>
          <p className="trip-price">Trip Price: ₹8,000 onwards</p>
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
        <h2>Srinagar - The Paradise on Earth</h2>
        <p>✅ <strong>Serene Lakes</strong> – Experience tranquility at <strong>Dal Lake & Nigeen Lake</strong>.</p>
        <p>✅ <strong>Shikara Rides</strong> – Enjoy a peaceful boat ride and visit the <strong>Floating Vegetable Market</strong>.</p>
        <p>✅ <strong>Mughal Gardens</strong> – Explore <strong>Nishat Bagh, Shalimar Bagh, and Chashm-E-Shahi</strong>.</p>
        <p>✅ <strong>Historic Monuments</strong> – Visit <strong>Shankaracharya Temple & Hazratbal Shrine</strong>.</p>
        <p>✅ <strong>Asia’s Largest Tulip Garden</strong> – Witness the vibrant <strong>Indira Gandhi Memorial Tulip Garden</strong>.</p>
        <p>✅ <strong>Local Cuisine</strong> – Savor <strong>Rogan Josh, Yakhni, and Kashmiri Kahwa</strong>.</p>
        <p>✅ <strong>Traditional Handicrafts</strong> – Shop for <strong>Pashmina Shawls & Kashmiri Carpets</strong>.</p>
        <p>✅ <strong>Best Time to Visit</strong> – April to October for pleasant weather.</p>
      </div>

      {/* Trip Highlights & Itinerary */}
      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>Dal Lake - Famous for houseboats and Shikara rides.</li>
            <li>Mughal Gardens - Beautiful Persian-style gardens.</li>
            <li>Shankaracharya Temple - A revered Hindu shrine.</li>
            <li>Hazratbal Shrine - A significant Muslim pilgrimage site.</li>
            <li>Lal Chowk Market - Shop for authentic Kashmiri handicrafts.</li>
          </ul>
        </div>

        {/* 5-Day Travel Itinerary */}
        <div className="trip-plan">
          <h3>5-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Arrive in Srinagar, Shikara ride on Dal Lake.</li>
            <li><b>Day 2:</b> Visit Mughal Gardens - Nishat, Shalimar & Chashm-E-Shahi.</li>
            <li><b>Day 3:</b> Explore Shankaracharya Temple & Hazratbal Shrine.</li>
            <li><b>Day 4:</b> Visit the famous Tulip Garden & Lal Chowk Market.</li>
            <li><b>Day 5:</b> Enjoy local cuisine & depart from Srinagar.</li>
          </ol>
        </div>
      </div>

      {/* Travel Information */}
      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Best Time to Visit: April to October for pleasant weather.</li>
          <li>Winter Impact: Heavy snowfall may affect connectivity from December to February.</li>
          <li>Pre-Booking: Book houseboats and Shikara rides in advance during peak season.</li>
          <li>Transport: Public transport is limited; taxis and private cars are more convenient.</li>
          <li>Connectivity: Mobile networks may be weak in remote areas; carry a local SIM.</li>
          <li>Dress Code: Follow local customs at religious sites.</li>
        </ul>
      </div>
    </div>
  );
};

export default Srinagar;
