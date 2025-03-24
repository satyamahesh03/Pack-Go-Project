import React, { useState, useEffect, useCallback, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import andamanImg1 from "../../assets/PlaceImages/Andaman1.jpg";
import andamanImg2 from "../../assets/PlaceImages/Andaman2.jpg";
import andamanImg3 from "../../assets/PlaceImages/Andaman3.jpg";
import andamanImg4 from "../../assets/PlaceImages/Andaman4.jpg";


const AndamanNicobar = () => {
  const images = [andamanImg1, andamanImg2, andamanImg3, andamanImg4];
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  const { userData, setUserData, token } = useContext(AppContext);
  // const [image,setImage] = useEffect(""); 


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (userData) {
      console.log(userData);
    }
  }, [userData]);
  const addData = () => {
    const newItem = {
      place: "Andaman",
      image: "String",
      price: "₹10,000 ",

    }
    const res = AddwishListData(newItem, setUserData);
    console.log("UserData" + userData);
    console.log("res" + res);
    setTimeout(() => {
      uploadData(newItem, token, setUserData);
    }, 500);

  }
  return (
    <div className="place-container">
      <h1 className="place-title">Andaman and Nicobar Islands Tourism</h1>

      {/* Image & Booking Section */}
      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Andaman" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Andaman & Nicobar</h2>
          <p className="trip-price">Trip Price: ₹10,000 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() => navigate("/payment?destination=Andaman")}>Book Now</button> */}
            <button className="wishlist" onClick={() => addData()}
            >
              <i className='bx bx-heart'></i> Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Place Details Section */}
      <div className="place-details animate-section">
        <h2>Andaman & Nicobar Tourism</h2>
        <p>✅ <strong>Beautiful Beaches</strong> – Home to white sandy beaches like Radhanagar, Elephant, and Bharatpur Beach.</p>
        <p>✅ <strong>Water Adventures</strong> – Popular for <strong>scuba diving, snorkeling, and sea walking</strong>.</p>
        <p>✅ <strong>Port Blair</strong> – The capital city known for its <strong>Cellular Jail</strong> and historical significance.</p>
        <p>✅ <strong>Island Hopping</strong> – Explore <strong>Havelock, Neil, Ross, and Jolly Buoy Islands</strong>.</p>
        <p>✅ <strong>Rich Marine Life</strong> – Witness vibrant coral reefs and marine species.</p>
        <p>✅ <strong>Perfect for Honeymooners</strong> – Known for its romantic and serene atmosphere.</p>
        <p>✅ <strong>Best Time to Visit</strong> – October to June offers the best weather conditions.</p>
      </div>

      {/* Trip Highlights & Itinerary */}
      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>Havelock Island - Known for Radhanagar Beach & diving spots.</li>
            <li>Neil Island - Famous for natural rock formations & serene beaches.</li>
            <li>Port Blair - Historical sites and ferry gateway to islands.</li>
            <li>Ross Island - Colonial ruins and historical significance.</li>
            <li>Jolly Buoy Island - Crystal clear waters for snorkeling.</li>
          </ul>
        </div>
        {/* 5-Day Travel Itinerary */}
        <div className="trip-plan">
          <h3>5-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Arrive in Port Blair, visit Cellular Jail & attend Light and Sound Show.</li>
            <li><b>Day 2:</b> Travel to Havelock Island, visit Radhanagar Beach.</li>
            <li><b>Day 3:</b> Explore Neil Island, visit Bharatpur Beach & Natural Bridge.</li>
            <li><b>Day 4:</b> Take a day trip to Ross Island & North Bay Island.</li>
            <li><b>Day 5:</b> Visit Jolly Buoy Island for snorkeling, return to Port Blair & depart.</li>
          </ol>
        </div>
      </div>

      {/* Travel Information */}
      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Best Time to Visit: October to June (Pleasant weather & clear waters).</li>
          <li>Permits: Foreigners need a Restricted Area Permit (RAP) upon arrival at Port Blair.</li>
          <li>Transport: Ferries are the primary mode of transport between islands.</li>
          <li>Connectivity: Limited internet, carry cash as digital payments may fail.</li>
          <li>Weather: Ferries may get canceled due to bad weather, plan accordingly.</li>
        </ul>
      </div>
    </div>
  );
};

export default AndamanNicobar;