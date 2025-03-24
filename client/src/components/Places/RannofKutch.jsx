import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import kutchImg1 from "../../assets/PlaceImages/Kutch1.jpg";
import kutchImg2 from "../../assets/PlaceImages/Kutch2.jpg";
import kutchImg3 from "../../assets/PlaceImages/Kutch3.jpeg";

const RannOfKutch = () => {
  const images = [kutchImg1, kutchImg2, kutchImg3];
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate(); // Initialize navigation

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
      place: "Rann of Kutch",
      price: "₹5,000",
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
      <h1 className="place-title">Rann of Kutch Tourism</h1>

      {/* Image & Booking Section */}
      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Rann of Kutch" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Rann of Kutch</h2>
          <p className="trip-price">Trip Price: ₹5,000 per person</p>
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
        <h2>About Rann of Kutch</h2>
        <p>✅ <strong>Largest Salt Desert</strong> – One of the world’s largest salt deserts, stretching over 7,500 square kilometers.</p>
        <p>✅ <strong>Sunset Views</strong> – Stunning sunset landscapes with a surreal white salt expanse.</p>
        <p>✅ <strong>Rann Utsav</strong> – A famous cultural festival showcasing Gujarat’s heritage, folk music, and dance.</p>
        <p>✅ <strong>Wildlife & Bird Sanctuary</strong> – Home to flamingos, pelicans, common teal, and Sarus cranes.</p>
        <p>✅ <strong>Optical Illusions</strong> – Unique mirage effects caused by salt deposits.</p>
        <p>✅ <strong>Bollywood Connection</strong> – Featured in movies like Refugee, Magadheera, and Goliyon Ki Raasleela Ram Leela.</p>
      </div>

      {/* Trip Highlights & Itinerary */}
      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>White Desert - Vast salt desert, best experienced at sunrise or sunset.</li>
            <li>Kalo Dungar - The highest point in Kutch offering panoramic views.</li>
            <li>Dholavira - One of the largest Harappan civilization sites.</li>
            <li>Mandvi Beach - A serene beach with golden sands.</li>
            <li>Wildlife Sanctuary - Home to migratory birds and unique desert wildlife.</li>
          </ul>
        </div>
        {/* 3-Day Travel Itinerary */}
        <div className="trip-plan">
          <h3>3-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Arrival, visit the White Desert & enjoy Rann Utsav festivities.</li>
            <li><b>Day 2:</b> Explore Kalo Dungar & Dholavira archaeological site.</li>
            <li><b>Day 3:</b> Visit Mandvi Beach and explore local handicrafts.</li>
          </ol>
        </div>
      </div>

      {/* Travel Information */}
      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Best Time to Visit: October to March (Cool weather & Rann Utsav festival).</li>
          <li>Entry Fees: ₹100 per person, ₹50 for car parking.</li>
          <li>Permits Required: Visitors need an entry permit to access the White Desert.</li>
          <li>Carry Warm Clothes: Nights can be cold, especially during winters.</li>
          <li>Stay in Traditional Bhungas: Experience Kutch’s culture in local mud huts.</li>
        </ul>
      </div>
    </div>
  );
};

export default RannOfKutch;