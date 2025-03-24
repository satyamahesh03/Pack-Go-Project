import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";


import image1 from "../../assets/PackageImages/GTIndia1.jpeg";
import image2 from "../../assets/PackageImages/GTIndia2.jpeg";
import image3 from "../../assets/PackageImages/GTIndia3.jpg";


const images = [image1, image2, image3];

const GoldenTriangleIndia = () => {
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
        place: "Golden Triangle India Package",
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

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="package-container">
      {/* Package Title */}
      <div className="package-header">
        <h1>Golden Triangle Tour of India</h1>
        <p>Delhi – Jaipur – Agra</p>
        <p>Best Time to Travel: September – April</p>
        <p>06 Days / 05 Nights</p>
      </div>

      {/* Image Slider */}
      <div className="slider-container">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <img src={images[currentIndex]} alt="Golden Triangle Tour" className="slider-image" />
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

      {/* Trip Details & Booking */}
      <div className="trip-details">
        <div className="trip-info">
          <h2>Trip Highlights</h2>
          <ul>
            <li><strong>Delhi:</strong> Chandni Chowk, Jama Masjid, India Gate, Qutub Minar, Humayun’s Tomb.</li>
            <li><strong>Agra:</strong> Taj Mahal, Agra Fort, Fatehpur Sikri.</li>
            <li><strong>Jaipur:</strong> Hawa Mahal, City Palace, Jantar Mantar, Amber Fort.</li>
          </ul>
        </div>

        <div className="booking-section">
          <h3 className="price">Price: ₹27,999 per person</h3>
          {/* <button className="book-now" onClick={() => navigate("/payment")}>Buy Now</button> */}
          <button className="wishlist" onClick={() => addData()}>
 ♡ Add to Wishlist</button>
        </div>
      </div>

      {/* Day Wise Itinerary */}
      <div className="day-wise-plan">
        <h2>Day Wise Itinerary</h2>
        {[
          { day: "Arrive in Delhi", details: "Our representative will receive you at the International airport and escort you to your hotel. Overnight in Delhi. Meals: None" },
          { day: "Explore Delhi", details: "Post breakfast, enjoy a full-day city tour of Old and New Delhi including Jama Masjid, Chandni Chowk, India Gate, and more." },
          { day: "Delhi to Jaipur", details: "Drive to Jaipur, check into the hotel, and enjoy a free afternoon. Overnight in Jaipur. Meals: Breakfast" },
          { day: "Jaipur Sightseeing", details: "Visit Amber Fort, City Palace, Jantar Mantar, and Hawa Mahal. Evening at leisure. Overnight in Jaipur. Meals: Breakfast" },
          { day: "Jaipur to Agra via Fatehpur Sikri", details: "Visit Fatehpur Sikri en route to Agra. Check into the hotel and enjoy free time. Overnight in Agra. Meals: Breakfast" },
          { day: "Agra to Delhi - Departure", details: "Visit the Taj Mahal and Agra Fort before driving back to Delhi for departure. Meals: Breakfast" }
        ].map((item, index) => (
          <div className="day" key={index} onClick={() => setActiveDay(activeDay === index ? null : index)}>
            <h3>Day {index + 1}: {item.day}</h3>
            {activeDay === index && <p>{item.details}</p>}
          </div>
        ))}
      </div>

      {/* What's Included */}
      <div className="included-section">
        <h2>What's Included</h2>
        <ul>
          <li>🏨 Accommodation: 5-star hotels</li>
          <li>🍽️ Meals: Breakfast included</li>
          <li>🚗 Transportation: Private car with driver</li>
          <li>🎟️ Entry Tickets: Monument fees covered</li>
        </ul>
      </div>

      {/* Customer Reviews */}
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {[
          { name: "Amit Sharma", rating: 5, comment: "An unforgettable journey! The arrangements were perfect." },
          { name: "Sophia Patel", rating: 4.5, comment: "Beautiful locations and well-planned itinerary." },
          { name: "Rahul Verma", rating: 5, comment: "Loved every bit of it. Taj Mahal was breathtaking!" },
          { name: "Emily Watson", rating: 4, comment: "Great experience, but would have loved more leisure time." },
          { name: "Rajesh Kumar", rating: 5, comment: "Highly recommend! Everything was smooth and enjoyable." }
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

export default GoldenTriangleIndia;