import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";


import image1 from "../../assets/PackageImages/Sundarban1.jpg";
import image2 from "../../assets/PackageImages/Sundarban2.webp";
import image3 from "../../assets/PackageImages/Sundarban3.jpeg";


const images = [image1, image2, image3];

const AssamSundarbansTour = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDay, setActiveDay] = useState(null);
  const navigate = useNavigate();
  const { userData, setUserData, token } = useContext(AppContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
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
      place: "Assam & Sundarbans Package",
      price: "₹27,999",
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
    <div className="package-container">
      <div className="package-header">
        <h1>Assam Tour & Sundarbans Cruise</h1>
        <p>Kolkata – Jorhat – Majuli – Kaziranga – Manas – Guwahati – Kolkata</p>
        <p>Best Time to Visit: October to April</p>
        <p>15 Days / 14 Nights</p>
      </div>

      <div className="slider-container">
        <button className="prev-btn" onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}>❮</button>
        <img src={images[currentIndex]} alt="Assam Sundarbans Tour" className="slider-image" />
        <button className="next-btn" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}>❯</button>
      </div>

      <div className="trip-details">
        <div className="trip-info">
          <h2>Trip Highlights</h2>
          <ul>
            <li><strong>Kolkata:</strong> Flower Market, Howrah Bridge, Victoria Memorial, Botanical Garden.</li>
            <li><strong>Majuli:</strong> Majuli Island, Paalnaam, Salmara Village.</li>
            <li><strong>Kaziranga:</strong> Elephant Ride, Kaziranga National Park.</li>
            <li><strong>Manas:</strong> Manas National Park (Only Tiger Reserve in Assam).</li>
            <li><strong>Guwahati:</strong> Kamakhya Temple, Mathanguri Point.</li>
          </ul>
        </div>

        <div className="booking-section">
          <h3 className="price">Price: ₹27,999 per person</h3>
          {/* <button className="book-now" onClick={() => navigate("/payment")}>Book Now</button> */}
          <button className="wishlist" onClick={() => addData()}> ♡ Add to Wishlist</button>
        </div>
      </div>

      <div className="day-wise-plan">
        <h2>Day Wise Itinerary</h2>
        {[
          "Arrive in Kolkata – Airport pickup and check-in at hotel.",
          "Explore Kolkata – Flower Market, Howrah Bridge, Victoria Memorial, Botanical Garden.",
          "Fly to Jorhat, ferry to Majuli – Explore monasteries and local culture.",
          "Full day in Majuli – Visit Auniati Satra, Salmara Village, Mishying Tribes.",
          "Majuli to Kaziranga – Safari and explore Kaziranga National Park.",
          "Elephant Safari in Kaziranga – Jeep safari through the national park.",
          "Drive to Manas National Park – Assam’s only Tiger Reserve.",
          "Elephant Safari & Jeep Safari in Manas – Visit Bodo tribal village.",
          "Drive to Guwahati – Kamakhya Temple, special Assamese dinner.",
          "Fly back to Kolkata – Leisure day.",
          "Board Vivada Cruise – Explore Ganges River en route to Sundarbans.",
          "Sundarbans Cruise – Wildlife spotting, village visit, mangrove forest trail.",
          "Explore more Sundarbans – Canopy walk, island exploration, sunset cruise.",
          "Cruise back to Kolkata – Relax and enjoy the river journey.",
          "Departure from Kolkata – Transfer to airport for onward journey."
        ].map((day, index) => (
          <div className="day" key={index} onClick={() => setActiveDay(activeDay === index ? null : index)}>
            <h3>Day {index + 1}: {day.split(" – ")[0]}</h3>
            {activeDay === index && <p>{day.split(" – ")[1]}</p>}
          </div>
        ))}
      </div>

      <div className="included-section">
        <h2>What's Included</h2>
        <ul>
          <li>🏨 Accommodation in top hotels and lodges.</li>
          <li>🍽️ Meals: Breakfast, lunch, and dinner included.</li>
          <li>🚗 Private transportation and internal flights.</li>
          <li>🎟️ Entry fees for all attractions and safaris.</li>
          <li>🛳️ Luxury cruise experience through the Sundarbans.</li>
        </ul>
      </div>

      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {[
          { name: "Rohan Mehta", rating: 5, comment: "A breathtaking experience! The Sundarbans cruise was magical." },
          { name: "Jessica Ray", rating: 4.5, comment: "Loved the national parks and elephant rides!" },
          { name: "Amit Das", rating: 5, comment: "The cultural experience in Majuli was unforgettable." },
          { name: "Sophia Kim", rating: 4, comment: "Well-organized trip! Could use a bit more free time." },
          { name: "Rajiv Kapoor", rating: 5, comment: "Highly recommended! Everything was seamless and well-planned." }
        ].map((review, index) => (
          <div className="review" key={index}>
            <h3>{review.name}</h3>
            <p>Rating: {"⭑".repeat(Math.round(review.rating))}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssamSundarbansTour;
