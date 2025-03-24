import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";


import image1 from "../../assets/PackageImages/GTAmritsar1.jpeg";
import image2 from "../../assets/PackageImages/GTAmritsar2.jpeg";
import image3 from "../../assets/PackageImages/GTAmritsar3.jpeg";


const images = [image1, image2, image3];

const GoldenTriangleAmritsar = () => {
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
      place: "Golden Triangle Amritsar Package",
      price: "₹7,999",
      image: "String",
    }
    const res = AddwishListData(newItem, setUserData);
    console.log("UserData" + userData);
    console.log("res" + res);
    setTimeout(() => {
      uploadData(newItem, token, setUserData);
    }, 500);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="package-container">
      <div className="package-header">
        <h1>Golden Triangle with Amritsar</h1>
        <p>Delhi – Agra – Jaipur – Amritsar</p>
        <p>Best Time to Travel: September – April</p>
        <p>06 Days / 05 Nights</p>
      </div>

      <div className="slider-container">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <img src={images[currentIndex]} alt="Golden Triangle Amritsar" className="slider-image" />
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

      <div className="trip-details">
        <div className="trip-info">
          <h2>Trip Highlights</h2>
          <ul>
            <li><strong>Delhi:</strong> India Gate, Qutub Minar, Jama Masjid.</li>
            <li><strong>Agra:</strong> Taj Mahal, Agra Fort, Fatehpur Sikri.</li>
            <li><strong>Jaipur:</strong> Amber Fort, City Palace, Hawa Mahal.</li>
            <li><strong>Amritsar:</strong> Golden Temple, Wagah Border, Jallianwala Bagh.</li>
          </ul>
        </div>

        <div className="booking-section">
          <h3 className="price">Price: ₹7,999 per person</h3>
          {/* <button className="book-now" onClick={() => navigate("/payment")}>Buy Now</button> */}
          <button className="wishlist" onClick={() => addData()}>
            ♡ Add to Wishlist</button>
        </div>
      </div>

      <div className="day-wise-plan">
        <h2>Day Wise Itinerary</h2>
        {[
          { day: "Arrive in Delhi", details: "Meet our representative and transfer to your hotel. Explore India Gate and Connaught Place. Overnight in Delhi." },
          { day: "Delhi – Agra", details: "Visit Jama Masjid, Qutub Minar, and drive to Agra. Enjoy the sunset at Mehtab Bagh with a Taj Mahal view. Overnight in Agra." },
          { day: "Agra – Jaipur", details: "Early morning Taj Mahal visit. Explore Agra Fort, then drive to Jaipur via Fatehpur Sikri. Overnight in Jaipur." },
          { day: "Jaipur Sightseeing", details: "Visit Amber Fort, City Palace, Jantar Mantar, and Hawa Mahal. Enjoy a cultural evening. Overnight in Jaipur." },
          { day: "Jaipur – Amritsar", details: "Fly to Amritsar. Visit Wagah Border for the evening ceremony. Overnight in Amritsar." },
          { day: "Amritsar – Delhi (Departure)", details: "Explore Golden Temple and Jallianwala Bagh. Transfer to airport for departure to Delhi." }
        ].map((item, index) => (
          <div className="day" key={index} onClick={() => setActiveDay(activeDay === index ? null : index)}>
            <h3>Day {index + 1}: {item.day}</h3>
            {activeDay === index && <p>{item.details}</p>}
          </div>
        ))}
      </div>

      <div className="included-section">
        <h2>What's Included</h2>
        <ul>
          <li>🏨 Accommodation: 5-star hotels</li>
          <li>🍽️ Meals: Breakfast included</li>
          <li>🚗 Transportation: Private car with driver</li>
          <li>🎟️ Entry Tickets: Monument fees covered</li>
        </ul>
      </div>

      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {[
          { name: "Anil Mehta", rating: 5, comment: "A fantastic tour with a seamless experience!" },
          { name: "Emma Wilson", rating: 4.5, comment: "Loved the Golden Temple visit, truly spiritual." },
          { name: "Ravi Kapoor", rating: 5, comment: "The itinerary was perfect, and the guides were great!" },
          { name: "Sophia Rao", rating: 4, comment: "Jaipur was a highlight, but more time in Amritsar would be nice." },
          { name: "Vikram Sinha", rating: 5, comment: "A must-do tour! Everything was smooth and well-organized." }
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

export default GoldenTriangleAmritsar;