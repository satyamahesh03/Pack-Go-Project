import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import ladakhImg1 from "../../assets/PlaceImages/Ladak1.jpeg";
import ladakhImg2 from "../../assets/PlaceImages/Ladak2.jpeg";
import ladakhImg3 from "../../assets/PlaceImages/Ladak3.jpeg";

const Ladakh = () => {
  const images = [ladakhImg1, ladakhImg2, ladakhImg3];
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
      place: "Ladak",
      price: "₹25,000",
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
      <h1 className="place-title">Ladakh Tourism</h1>

      {/* Image & Booking Section */}
      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Ladakh" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Ladakh</h2>
          <p className="trip-price">Trip Price: ₹25,000 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() => navigate("/payment")}>
              Book Now
            </button> */}

            {/* Navigate to Wishlist Page */}
            <button className="wishlist" onClick={() => addData()}>
              <i className='bx bx-heart'></i> Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Place Details Section */}
      <div className="place-details animate-section">
        <h2>Ladak Tourism</h2>
        <p>✅ <strong>High-Altitude Desert</strong> – Known as the world’s coldest desert, Ladakh is famous for its dramatic landscapes.</p>

        <p>✅ <strong>Land of High Passes</strong> – Home to some of the world's highest motorable roads, including <strong>Khardung La & Chang La</strong>.</p>

        <p>✅ <strong>Scenic Wonders</strong> – Stunning locations like <strong>Pangong Lake, Nubra Valley, and Tso Moriri</strong>.</p>

        <p>✅ <strong>Rich Tibetan Buddhist Culture</strong> – Monasteries like <strong>Hemis, Thiksey, and Alchi</strong> showcase Ladakh's spiritual heritage.</p>

        <p>✅ <strong>Adventure Paradise</strong> – Offers trekking, river rafting, mountain biking, and the famous <strong>Chadar Trek</strong>.</p>

        <p>✅ <strong>Leh – The Heart of Ladakh</strong> – A vibrant town with <strong>Shanti Stupa, Leh Bazaar, and Leh Palace</strong>.</p>

        <p>✅ <strong>Breathtaking Road Trips</strong> – The <strong>Manali-Leh & Srinagar-Leh highways</strong> are among the most scenic drives in the world.</p>

        <p>✅ <strong>Delicious Local Cuisine</strong> – Must-try dishes include <strong>momos, thukpa, and butter tea</strong>.</p>

        <p>✅ <strong>Best Time to Visit</strong> – April to mid-July when the roads are accessible and the weather is pleasant.</p>

        <p>✅ <strong>Unmatched Stargazing</strong> – Ladakh offers some of the clearest night skies, perfect for astronomy lovers.</p>
      </div>

      {/* Trip Highlights & Itinerary */}
      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>Pangong Lake - A mesmerizing high-altitude lake.</li>
            <li>Nubra Valley - Famous for sand dunes and Bactrian camels.</li>
            <li>Hemis & Thiksey Monasteries - Ancient Buddhist monasteries.</li>
            <li>Leh Palace - Offering panoramic views of Leh.</li>
            <li>Magnetic Hill - A mysterious optical illusion.</li>
          </ul>
        </div>
        {/* 5-Day Travel Itinerary */}
        <div className="trip-plan">
          <h3>5-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Arrive in Leh, acclimatize, explore local markets.</li>
            <li><b>Day 2:</b> Visit Hemis Monastery, Thiksey Monastery, and Leh Palace.</li>
            <li><b>Day 3:</b> Drive to Nubra Valley, enjoy sand dunes & Bactrian camels.</li>
            <li><b>Day 4:</b> Pangong Lake day trip, enjoy scenic views & photography.</li>
            <li><b>Day 5:</b> Visit Magnetic Hill, Gurudwara Pathar Sahib, and depart.</li>
          </ol>
        </div>
      </div>

      {/* Travel Information */}
      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Best Time to Visit: April to Mid-July (Pleasant weather & open roads).</li>
          <li>Road Closures: Ladakh remains closed from November to mid-May due to heavy snowfall.</li>
          <li>Permits: Inner Line Permits are NOT required for Indian nationals since August 2021.</li>
          <li>For Foreigners: A Protected Area Permit (PAP) or Restricted Area Permit (RAP) is required.</li>
          <li>Ladakh is a plastic-free zone - Avoid using plastic bottles.</li>
          <li>ATMs are only available in Leh - Carry enough cash.</li>
          <li>Acclimatization: Spend a day in Leh to adjust to high altitudes.</li>
        </ul>
      </div>
    </div>
  );
};

export default Ladakh;