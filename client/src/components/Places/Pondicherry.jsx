import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import pondicherryImg1 from "../../assets/PlaceImages/Pondicherry1.jpeg";
import pondicherryImg2 from "../../assets/PlaceImages/Pondicherry2.jpeg";
import pondicherryImg3 from "../../assets/PlaceImages/Pondicherry3.jpeg";

const Pondicherry = () => {
  const images = [pondicherryImg1, pondicherryImg2, pondicherryImg3];
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
      place: "Pondicherry",
      price: "₹7,200",
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
      <h1 className="place-title">Pondicherry Tourism</h1>

      {/* Image & Booking Section */}
      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Pondicherry" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Pondicherry</h2>
          <p className="trip-price">Trip Price: ₹7,200 per person</p>
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
        <h2>Pondicherry Tourism</h2>
        <p>✅ <strong>French-Inspired Charm</strong> – White Town is adorned with mustard-yellow colonial buildings and vibrant cafes.</p>
        <p>✅ <strong>Stunning Beaches</strong> – Relax at <strong>Paradise Beach</strong> and <strong>Auroville Beach</strong>.</p>
        <p>✅ <strong>Aurobindo Ashram</strong> – Experience spiritual peace and meditation retreats.</p>
        <p>✅ <strong>Auroville</strong> – A global township promoting sustainable living and unity.</p>
        <p>✅ <strong>Seaside Promenade</strong> – Enjoy stunning sunsets at <strong>Rock Beach</strong>.</p>
        <p>✅ <strong>Delicious Cuisine</strong> – Try authentic French pastries, seafood, and Tamil delicacies.</p>
        <p>✅ <strong>Adventure Activities</strong> – Indulge in scuba diving, kayaking, and heritage walks.</p>
        <p>✅ <strong>Shopping & Art</strong> – Explore bohemian stores, local markets, and art galleries.</p>
        <p>✅ <strong>Best Time to Visit</strong> – October to March for pleasant weather.</p>
      </div>

      {/* Trip Highlights & Itinerary */}
      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>French Quarter - Explore charming colonial streets.</li>
            <li>Paradise Beach - A secluded and scenic getaway.</li>
            <li>Auroville - Discover the peaceful Matrimandir.</li>
            <li>Rock Beach - A lively promenade by the sea.</li>
            <li>Serenity Beach - Ideal for surfing and relaxation.</li>
          </ul>
        </div>
        {/* 3-Day Travel Itinerary */}
        <div className="trip-plan">
          <h3>3-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Explore White Town, visit Aurobindo Ashram, relax at Rock Beach.</li>
            <li><b>Day 2:</b> Visit Auroville, enjoy Paradise Beach, try local cuisine.</li>
            <li><b>Day 3:</b> Heritage walk, shopping at local markets, enjoy a beachside sunset.</li>
          </ol>
        </div>
      </div>

      {/* Travel Information */}
      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Pre-Booking: Some activities like scuba diving require advance booking.</li>
          <li>Attraction Closures: Auroville and other sites may be closed on certain days.</li>
          <li>Monsoon Season: Beach activities may be restricted due to rough seas.</li>
          <li>Currency Exchange: Use authorized centers to avoid scams.</li>
          <li>Network Connectivity: Generally good, but remote areas may have weak signals.</li>
          <li>Local Transport: Best explored by foot or bicycle due to compact streets.</li>
        </ul>
      </div>
    </div>
  );
};

export default Pondicherry;