import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import arakuImg1 from "../../assets/PlaceImages/Araku1.jpeg";
import arakuImg2 from "../../assets/PlaceImages/Araku2.jpg";
import arakuImg3 from "../../assets/PlaceImages/Araku3.avif";
import arakuImg4 from "../../assets/PlaceImages/Araku4.jpg";
import arakuImg5 from "../../assets/PlaceImages/Araku5.avif";



const ArakuValley = () => {
  const newItem = {
    place: "Araku",
    price: "₹2,500",
    image: "String",
  }
  const images = [arakuImg1, arakuImg2, arakuImg3, arakuImg4, arakuImg5];
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
    const res = AddwishListData(newItem, setUserData);
    console.log("UserData" + userData);
    console.log("res" + res);
    setTimeout(() => {
      uploadData(newItem, token, setUserData);
    }, 500);
  };

  return (
    <div className="place-container">
      <h1 className="place-title">Araku Valley Tourism</h1>

      {/* Image & Booking Section */}
      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Araku Valley" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Araku Valley</h2>
          <p className="trip-price">Trip Price: ₹2,500 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() =>bookNow()}>Book Now</button> */}
            <button className="wishlist" onClick={() => addData()}> <i className='bx bx-heart'></i> Wishlist </button>
          </div>
        </div>
      </div>

      

      {/* Place Details Section */}
      <div className="place-details animate-section">
        <h2>About Araku Valley</h2>
        <p>✅ <strong>Scenic Hill Station</strong> – Located in the Eastern Ghats, offering breathtaking views and cool weather.</p>
        <p>✅ <strong>Vistadome Train</strong> – A must-experience journey with 58 tunnels and 84 bridges offering stunning landscapes.</p>
        <p>✅ <strong>Tribal Culture</strong> – Visit the Tribal Museum and explore the local traditions and handicrafts.</p>
        <p>✅ <strong>Coffee Plantations</strong> – Famous for its rich coffee aroma, enjoy a fresh cup at local farms.</p>
        <p>✅ <strong>Adventure Activities</strong> – Enjoy trekking, caving, and swimming in the surrounding natural spots.</p>
        <p>✅ <strong>Borra Caves</strong> – Explore the stunning limestone caves near Araku Valley.</p>
      </div>

      {/* Trip Highlights & Itinerary */}
      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>Borra Caves - Stunning limestone formations.</li>
            <li>Katiki Waterfalls - A beautiful cascading waterfall.</li>
            <li>Tribal Museum - Learn about the indigenous culture.</li>
            <li>Coffee Plantations - Enjoy the aroma of freshly brewed coffee.</li>
            <li>Dumbriguda Waterfalls - A serene picnic spot.</li>
          </ul>
        </div>
        {/* Day Trip Plan */}
        <div className="trip-plan">
          <h3>1-Day Trip Plan</h3>
          <ol>
            <li><b>Morning:</b> Arrive in Araku, visit Borra Caves.</li>
            <li><b>Midday:</b> Explore the Tribal Museum & Coffee Plantations.</li>
            <li><b>Afternoon:</b> Enjoy lunch at a local restaurant, visit Katiki Waterfalls.</li>
            <li><b>Evening:</b> Relax at Dumbriguda Waterfalls before heading back.</li>
          </ol>
        </div>
      </div>

      {/* Travel Information */}
      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Best Time to Visit: September to February for pleasant weather and greenery.</li>
          <li>Book Train Tickets Early: The Vistadome train is in high demand, so reserve in advance.</li>
          <li>Carry Warm Clothes: Evenings and early mornings can be chilly, especially in winter.</li>
          <li>Local Transport: Rent bikes or hire taxis to explore nearby attractions comfortably.</li>
          <li>Try Local Cuisine: Don't miss Bamboo Chicken, a local tribal delicacy.</li>
        </ul>
      </div>
    </div>
  );
};

export default ArakuValley;