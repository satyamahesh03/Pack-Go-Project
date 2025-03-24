import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";


import image1 from "../../assets/PackageImages/GTShimla1.jpg";
import image2 from "../../assets/PackageImages/GTShimla2.jpeg";
import image3 from "../../assets/PackageImages/GTShimla3.jpg";


const images = [image1, image2, image3];

const GoldenTriangleShimla = () => {
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
        place: "Golden Triangle Shimla Package",
        price: "₹14,999",
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
        <h1>Golden Triangle Tour with Shimla</h1>
        <p>Delhi – Agra – Jaipur – Shimla – Delhi</p>
        <p>Best Time to Travel: September – April</p>
        <p>09 Days / 08 Nights</p>
      </div>

      <div className="slider-container">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <img src={images[currentIndex]} alt="Golden Triangle with Shimla" className="slider-image" />
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

      <div className="trip-details">
        <div className="trip-info">
          <h2>Trip Highlights</h2>
          <ul>
            <li><strong>Delhi:</strong> Sightseeing of Old and New Delhi</li>
            <li><strong>Agra:</strong> Taj Mahal, Agra Fort, Sikandara Tomb, Fatehpur Sikri</li>
            <li><strong>Jaipur:</strong> Amer Fort, City Palace, Jantar Mantar, Hawa Mahal</li>
            <li><strong>Shimla:</strong> Kufri, Jakhu Temple, Hanuman Temple</li>
          </ul>
        </div>

        <div className="booking-section">
          <h3 className="price">Price: ₹14,999 per person</h3>
          {/* <button className="book-now" onClick={() => navigate("/payment")}>Buy Now</button> */}
          <button className="wishlist" onClick={() => addData()}> ♡ Add to Wishlist</button>
        </div>
      </div>

      <div className="day-wise-plan">
        <h2>Day Wise Itinerary</h2>
        {[
          { day: "Arrive in Delhi", details: "Our representative will receive you at the International airport and escort you to your hotel. Overnight in Delhi. Meals: None" },
          { day: "Explore Delhi", details: "Enjoy a full-day city tour of Old and New Delhi including Chandni Chowk, Jama Masjid, India Gate, and more. Overnight in Delhi. Meals: Breakfast" },
          { day: "Delhi to Agra", details: "Transfer to Agra, visit Agra Fort and Taj Mahal by sunset. Overnight in Agra. Meals: Breakfast" },
          { day: "Agra to Jaipur via Fatehpur Sikri", details: "Visit Fatehpur Sikri en route to Jaipur. Evening leisure. Overnight in Jaipur. Meals: Breakfast" },
          { day: "Jaipur Sightseeing", details: "Visit Amer Fort, City Palace, Jantar Mantar, and Hawa Mahal. Overnight in Jaipur. Meals: Breakfast" },
          { day: "Jaipur to Chandigarh to Shimla", details: "Fly from Jaipur to Chandigarh and drive to Shimla. Overnight in Shimla. Meals: Breakfast" },
          { day: "Explore Shimla", details: "Visit Viceroy Lodge, Jhakhoo Hills, and take a stroll through Mall Road. Overnight in Shimla. Meals: Breakfast" },
          { day: "Shimla to Chandigarh to Delhi", details: "Transfer to Chandigarh, fly to Delhi. Overnight in Delhi. Meals: Breakfast" },
          { day: "Delhi Departure", details: "Transfer to the airport for onward journey. Meals: Breakfast" }
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
          { name: "Ravi Mehta", rating: 5, comment: "Amazing experience! Highly recommend this tour." },
          { name: "Sophia Khan", rating: 4.5, comment: "A well-organized trip with great accommodations." },
          { name: "Aditya Sharma", rating: 5, comment: "Loved Shimla! The mountain views were breathtaking." },
          { name: "Emily Brown", rating: 4, comment: "Would have preferred more time at Jaipur." },
          { name: "Rajiv Kapoor", rating: 5, comment: "The best travel experience ever! Everything was smooth and enjoyable." }
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

export default GoldenTriangleShimla;