import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import ootyImg1 from "../../assets/PlaceImages/Ooty1.jpeg";
import ootyImg2 from "../../assets/PlaceImages/Ooty2.webp";
import ootyImg3 from "../../assets/PlaceImages/Ooty3.jpg";

const Ooty = () => {
  const images = [ootyImg1, ootyImg2, ootyImg3];
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
      place: "Ooty",
      price: "₹1,800",
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
      <h1 className="place-title">Ooty Tourism</h1>

      {/* Image & Booking Section */}
      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Ooty" className="place-image" />
        </div>
        <div className="booking-section animate-section">
          <h2>Explore Ooty</h2>
          <p className="trip-price">Trip Price: ₹1,800 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() => navigate("/payment")}>
              Book Now
            </button> */}
            <button className="wishlist" onClick={() => addData()}>
              <i className='bx bx-heart'></i> Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Place Details Section */}
      <div className="place-details animate-section">
        <h2>About Ooty</h2>
        <p>✅ <strong>Queen of the Nilgiris</strong> – A breathtaking hill station surrounded by lush tea gardens and picturesque landscapes.</p>
        <p>✅ <strong>Nilgiri Mountain Railway</strong> – Experience Asia’s steepest track with mesmerizing views.</p>
        <p>✅ <strong>Colonial Charm</strong> – Visit historical buildings and quaint churches from the British era.</p>
        <p>✅ <strong>Serene Waterfalls & Lakes</strong> – Enjoy scenic beauty at Ooty Lake, Pykara Waterfalls, and Emerald Lake.</p>
        <p>✅ <strong>Botanical & Rose Gardens</strong> – Discover exotic plants and beautifully curated flower gardens.</p>
        <p>✅ <strong>Trekking & Adventure</strong> – Explore Doddabetta Peak and enjoy nature trails.</p>
        <p>✅ <strong>Tea & Chocolate Delights</strong> – Taste locally grown tea and homemade chocolates.</p>
      </div>

      {/* Trip Highlights & Itinerary */}
      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>Ooty Lake - Enjoy boating in the scenic lake.</li>
            <li>Doddabetta Peak - The highest point in the Nilgiris.</li>
            <li>Botanical Gardens - Home to a variety of exotic plants.</li>
            <li>Nilgiri Mountain Railway - A UNESCO World Heritage ride.</li>
            <li>Rose Garden - A colorful paradise with thousands of roses.</li>
          </ul>
        </div>

        {/* 3-Day Travel Itinerary */}
        <div className="trip-plan">
          <h3>3-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Arrive in Ooty, visit Botanical Gardens and Ooty Lake.</li>
            <li><b>Day 2:</b> Explore Doddabetta Peak, ride the Nilgiri Mountain Railway, and visit Rose Garden.</li>
            <li><b>Day 3:</b> Visit Pykara Lake and Waterfalls, shop for tea and chocolates, and depart.</li>
          </ol>
        </div>
      </div>

      {/* Travel Information */}
      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Best Time to Visit: Ooty is a year-round destination, but March to June offers the best weather.</li>
          <li>Winter Months: November to February can be chilly, so pack warm clothes.</li>
          <li>Local Transport: Auto-rickshaws, taxis, and rented bikes are available for easy travel.</li>
          <li>Accommodation: Book stays in advance, especially during peak tourist season.</li>
          <li>Permits: Some trekking routes may require prior permission.</li>
          <li>Shopping: Try local tea, homemade chocolates, and handicrafts.</li>
        </ul>
      </div>
    </div>
  );
};

export default Ooty;
